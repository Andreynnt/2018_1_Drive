import {View} from '../View/view';
const profileViewTemplate = require('./profile-view.pug');
import {UsersModel} from '../../models/UsersModel';
import * as UserSingletone from '../../services/user-singletone';
import * as busSingletone from '../../modules/bus';
import {ProfilePopup} from './ProfilePopup/profile-popup';

export class ProfileView extends View {
    constructor() {
        super('Profile', profileViewTemplate);
    }

    create() {
        this.user = UserSingletone.getInstance().getUser();
        if (!this.user) {
            return this;
        } else {
            super.render(this.user);
        }
        this.addLogoutAction(this.el.querySelector('.logout-button'));
        this.addAvatarsPopup(this.el.querySelector('.user-profile__change-avatar'));
        super.hide();
        return this;
    }

    addLogoutAction(button) {
        button.addEventListener('click', () => busSingletone.getInstance().emit('logout'));
    }

    show() {
        const user = UserSingletone.getInstance().getUser();
        if (user && !this.user) {
            this.create();
        }
        this.el.removeAttribute('hidden');
        this.active = true;
        return this;
    }

    deleteUser() {
        this.user = null;
    }

    addAvatarsPopup(button) {
        this.profilePopup = new ProfilePopup(this.el.querySelector('.js-profile-main'), this.getAvatarsPaths());
        this.profilePopup.activate(button);
    }

    getAvatarsPaths() {
        return ['../../img/avatars/1.svg', '../../img/avatars/2.svg', '../../img/avatars/3.svg', '../../img/avatars/4.svg'];
    }
}
