export class SFilterCell {

    htmlElement: HTMLElement;
    onFilterChange: Function;

    constructor() {
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 's-filter-cell');
        const inputElement = document.createElement("input");
        inputElement.addEventListener('change', this.filter.bind(this));
        this.htmlElement.appendChild(inputElement);
    }

    get(): HTMLElement {
        return this.htmlElement;
    }

    setOnFilterChange(fn: Function): void {
        this.onFilterChange = fn;
    }

    filter(event) {
        this.onFilterChange(event.target.value);
    };

}