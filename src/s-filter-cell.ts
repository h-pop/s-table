import { EventBus } from "./event-bus";
import { SColumnDef } from "./s-column-def";
import { EventEnum } from "./types";

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

    setOnFilterChange(func: Function): void {
        this.onFilterChange = func;
    }

    filter(event) {
        this.onFilterChange(event.target.value);
    };

}