'use strict';

export class Popup2 {
        constructor(popup, inner) {
            this.popup = popup;
            this.inner = inner;
        }

        activate(button) {
            button.addEventListener('click', () => {
                this.openPopup();
            });
        }

        onCancel(cancelButton) {
            cancelButton.addEventListener('click', () => {
                this.closePopup();
            });
        }

        addActionOnClose(cancelButton, callback) {
            cancelButton.addEventListener('click', () => {
                callback();
            });
        }

        openPopup() {
            this.popup.style.visibility = 'visible';
            this.popup.style.opacity = '1';
            this.inner.style.animation = 'forward 0.3s 1';
        }

        closePopup() {
            this.popup.style.visibility = 'hidden';
            this.popup.style.opacity = '0';
            this.inner.style.animation = '';
        }
}
