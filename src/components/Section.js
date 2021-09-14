export class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._element = document.querySelector(containerSelector);
    }

    rendererAll(items) {
        items.forEach(cardData => {
            this.addItem(cardData)
        });
    }

    addItem(cardData, myElement = false) {
        if (myElement) {
            this._element.prepend(this._renderer(cardData));
        } else {
            this._element.append(this._renderer(cardData));
        }
    }
}