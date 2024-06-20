import { EventBus } from "./event-bus";
import { SColumnDef } from "./s-column-def";
import { EventEnum } from "./types";

export class SFilterCell {

    htmlElement: HTMLElement;

    constructor(columnDefinition: SColumnDef) {
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 's-filter-cell');
        const inputElement = document.createElement("input");
        inputElement.addEventListener('change', this.filter.bind(this, columnDefinition));
        this.htmlElement.appendChild(inputElement);
    }

    get(): HTMLElement {
        return this.htmlElement;
    }

    filter(columnDefinition, event) {
        const filterValue = event.target.value;
        console.log(columnDefinition);
        EventBus.getInstance().emit(EventEnum.FILTER, { columnName: columnDefinition.name, filterValue: filterValue });
    };

}