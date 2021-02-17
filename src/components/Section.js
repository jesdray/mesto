export default class Section{
    constructor({ data, renderer}, containerSelector) {
        this._initialArray = data;
        this._renderer = renderer;

        this._container = containerSelector;
    }

    addNewItem(element) {
        this._container.prepend(element);
    }

    addItem(element) {
        this._container.append(element);
    }
    
    renderer() {
        this._initialArray.forEach(item => {
            const element = this._renderer(item);

            this.addItem(element);
        })
    }
}