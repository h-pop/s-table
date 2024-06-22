
import { EventBus } from "./event-bus";
import { SColumnDef } from "./s-column-def";
import { SHeaderCell } from "./s-header-cell";
import { Direction, EventEnum } from "./types";

export class SHeader {
    htmlElement: HTMLElement;
    sortObject = {};
    constructor(columnDefinitions) {
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 's-header-main');
        columnDefinitions?.forEach(cd => {
            const sCell = new SHeaderCell(cd);
            sCell.setOnSortChange(this.onSortChange.bind(this, cd));
            this.htmlElement.appendChild(sCell.get());
        });
    }

    public get(): HTMLElement {
        return this.htmlElement;
    }

    public getSortObject(): any {
        return this.sortObject;
    }

    private onSortChange(columnDefinition: SColumnDef, direction: Direction) {
        if (direction === 'none') {
            delete this.sortObject[columnDefinition.name];
        } else {
            this.sortObject[columnDefinition.name] = direction;
        }
        EventBus.getInstance().emit(EventEnum.SORT, this.sortObject);
    }
}