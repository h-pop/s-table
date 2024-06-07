import sortUp from "./assets/sort-up.svg";
import sortDown from "./assets/sort-down.svg";
import { EventBus } from "./event-bus";
import { Direction, EventEnum } from "./types";

export class SCell {

    htmlElement: HTMLElement;

    static readonly HIDDEN_CLASS = 's-sort-hidden';
    constructor(columnDefinition) {
        this.htmlElement = document.createElement('div');
        this.appendLabel(columnDefinition);
        this.appendSortIcon(`s-sort-up`, sortUp);
        this.appendSortIcon('s-sort-down', sortDown);
        this.htmlElement.addEventListener('click', this.sort.bind(this, columnDefinition));
    }

    get(): HTMLElement {
        return this.htmlElement;
    }

    private appendLabel(columnDefinition) {
        this.htmlElement.setAttribute('class', 's-header-cell');
        const cellTextDiv = document.createElement('div');
        cellTextDiv.setAttribute('class', 's-text');
        const cellTextNode = document.createTextNode(columnDefinition);
        cellTextDiv.appendChild(cellTextNode);
        this.htmlElement.appendChild(cellTextDiv);
    }

    private appendSortIcon(id, src) {
        const cellIconDiv = document.createElement('div');
        cellIconDiv.setAttribute('id', id)
        cellIconDiv.setAttribute('class', SCell.HIDDEN_CLASS);
        const sortImg = document.createElement('img');
        sortImg.setAttribute('src', src);
        sortImg.setAttribute('class', 's-sort-icon');
        cellIconDiv.appendChild(sortImg);
        this.htmlElement.appendChild(cellIconDiv);
    }

    private sort(columnDefinition) {
        const direction = this.determineDirection();
        EventBus.getInstance().emit(EventEnum.SORT, { columnName: columnDefinition, direction: direction });
    }

    private determineDirection(): Direction {
        const bothSortsHidden = this.htmlElement.querySelectorAll(`.${SCell.HIDDEN_CLASS}`).length > 1;
        const sortDescHidden = this.isSortDescHidden();
        this.hideAllSorts();
        if (bothSortsHidden) {
            this.showSortAsc();
            return 'asc';
        } else if (sortDescHidden) {
            this.showSortDesc();
            return 'desc';
        } else {
            return 'none';
        }
    }

    private hideAllSorts() {
        document.querySelectorAll('#s-sort-up, #s-sort-down')
            .forEach(a => a.setAttribute('class', SCell.HIDDEN_CLASS));
    }

    private showSortDesc() {
        this.showSort(this.getSortDesc());
    }

    private showSortAsc() {
        this.showSort(this.getSortAsc());
    }

    private showSort(element: Element): void {
        element.classList.remove(SCell.HIDDEN_CLASS);
    }

    private getSortAsc() {
        return this.htmlElement.querySelector('#s-sort-up');
    }

    private getSortDesc() {
        return this.htmlElement.querySelector('#s-sort-down');
    }

    private isSortDescHidden(): boolean {
        return this.isSortHidden(this.getSortDesc());
    }

    private isSortHidden(element: Element): boolean {
        return element.classList.contains("s-sort-hidden");
    }
}