import {View} from '../View/view';
import {Ws} from '../../modules/ws';
import * as UserSingletone from '../../services/user-singletone';
import * as busSingletone from '../../modules/bus';
const gameRoomView = require('./room-view.pug');
import {multiPlayerEvents} from '../../modules/game/multiplayer/events';
import {WaitingBLock} from '../../blocks/waiting-block/waiting-block';
const waitingBlockTemplate = require( '../../blocks/waiting-block/waiting-template.pug');
import {BaseComponent} from '../../blocks/baseComponent';
import {MultiplayerGame} from '../../modules/game/multiplayer';
const gameViewTemplate = require('../../views/GameView/game-view.pug');
const multiplayerTemplate = require('../../modules/game/multiplayer/multiplayer.pug');

export class GameRoomView extends View {
    constructor() {
        super('GameRoomView', gameRoomView);
    }

    create() {
        const user = UserSingletone.getInstance().getUser();
        if (user) {
            user.authorized = true;
            this.user = user;
            super.create(user);
            this.initButton = this.el.querySelector('.search');
            this.initButton.addEventListener('click', this.onSearchButton.bind(this));

            this.blackBackground = new BaseComponent(this.el.querySelector('.black-background'));
            this.mainBlock = new BaseComponent(this.el.querySelector('.main-block'));

            this.waitingBlock = new WaitingBLock(this.el.querySelector('.waiting'), waitingBlockTemplate);
            const bus = busSingletone.getInstance();
            bus.on(multiPlayerEvents.EVENTS_GAME_START, this.onGameStarted.bind(this));
        } else {
            super.create({authorized: false});
        }
        return this;
    }

    onSearchButton() {
        this.ws = new Ws();
        this.waitingBlock.render();
    }

    onGameStarted(payload) {
        console.log('GAME started');
        this.waitingBlock.root.innerHTML = '<h2>GAME STARTED</h2>';
        this.mainBlock.hide();
        let gameDiv = document.querySelector('.multiplayer-game');
        if (gameDiv == null) {
            gameDiv = document.createElement('div');
            gameDiv.innerHTML = multiplayerTemplate();
            document.querySelector('.main').appendChild(gameDiv);
        }
        this.blackBackground.hide();
        this.game = new MultiplayerGame(gameDiv, this.ws);
        this.game.start(payload);
    }

    show() {
        const user = UserSingletone.getInstance().getUser();
        console.log('In show()');
        if (this.user && !user) {
            this.render({authorized: false});
            this.mainBlock = new BaseComponent(this.el.querySelector('.main-block'));
            this.user = null;
            this.blackBackground = new BaseComponent(this.el.querySelector('.black-background'));
        } else if (!this.user && user) {
            this.render(user);
            this.initButton = this.el.querySelector('.search');
            this.initButton.addEventListener('click', this.onSearchButton.bind(this));
            this.user = user;
            this.mainBlock = new BaseComponent(this.el.querySelector('.main-block'));
            this.waitingBlock = new WaitingBLock(this.el.querySelector('.waiting'), waitingBlockTemplate);
            this.blackBackground = new BaseComponent(this.el.querySelector('.black-background'));
            const bus = busSingletone.getInstance();
            bus.on(multiPlayerEvents.EVENTS_GAME_START, this.onGameStarted.bind(this));
        }
        this.el.removeAttribute('hidden');
        this.active = true;
        return this;
    }
}