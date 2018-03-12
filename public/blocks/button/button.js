(function () {
    'use strict';
    const BaseComponent = window.BaseComponent;

    class Button extends BaseComponent {
        constructor(handler = null, text = '', modificator = '') {
            const button = document.createElement('div');
            super(button);
            if(handler){
                this.on('click', handler);
            }
            this.element.innerHTML = text;
            this.element.setAttribute('class','button '+modificator);

        }
    }

    window.Button = Button;

})();