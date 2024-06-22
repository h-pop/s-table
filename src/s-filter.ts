import { EventBus } from "./event-bus";
import { SFilterCell } from "./s-filter-cell";
import { EventEnum } from "./types";
export class SFilter {
    htmlElement: HTMLElement;
    filterObject = {};
    constructor(columnDefinitions) {
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 's-header-main');
        columnDefinitions?.forEach(cd => {
            const sFilterCell = new SFilterCell();
            sFilterCell.setOnFilterChange(this.onFilterChange.bind(this, cd))
            this.htmlElement.appendChild(sFilterCell.get());
        });
    }

    public get(): HTMLElement {
        return this.htmlElement;
    }

    public getFilterObject(): any {
        return this.filterObject;
    }

    public hide() {
        this.htmlElement.setAttribute('class', 's-hidden');
    }

    public show() {
        this.htmlElement.classList.remove('class', 's-hidden');
    }

    private onFilterChange(columnDefinition, filterValue): void {
        if (filterValue) {
            this.filterObject[columnDefinition.name] = filterValue;
        } else {
            delete this.filterObject[columnDefinition.name];
        }
        EventBus.getInstance().emit(EventEnum.FILTER, this.filterObject);
    }
}