import sortUp from "./assets/sort-up.svg";
import sortDown from "./assets/sort-down.svg";
import { EventBus } from "./event-bus";
import { EventEnum } from "./types";

export class SCell {

    htmlElement: HTMLElement;

    constructor(columnDefinition) {
        this.htmlElement = document.createElement('div');
        this.appendLabel(columnDefinition);
        this.appendSortIcon(`s-header-cell-sort-up`, sortUp);
        this.appendSortIcon('s-header-cell-sort-down', sortDown);
        this.htmlElement.addEventListener('click', this.sort.bind(this, columnDefinition));
    }

    get(): HTMLElement {
        return this.htmlElement;
    }

    appendLabel(columnDefinition) {
        this.htmlElement.setAttribute('class', 's-header-cell');
        const cellTextDiv = document.createElement('div');
        cellTextDiv.setAttribute('class', 's-header-cell-text');
        const cellTextNode = document.createTextNode(columnDefinition);
        cellTextDiv.appendChild(cellTextNode);
        this.htmlElement.appendChild(cellTextDiv);
    }

    appendSortIcon(id, src) {
        const cellIconDiv = document.createElement('div');
        cellIconDiv.setAttribute('id', id)
        cellIconDiv.setAttribute('class', 's-header-cell-icon-hidden');
        const sortImg = document.createElement('img');
        sortImg.setAttribute('src', src);
        sortImg.setAttribute('class', 'sort-icon');
        cellIconDiv.appendChild(sortImg);
        this.htmlElement.appendChild(cellIconDiv);
    }

    sort(columnDefinition) {
        const previousSort = this.htmlElement.getAttribute("sort");
        const currentSort = previousSort && previousSort === 'asc' ? 'desc' : 'asc';
        this.htmlElement.setAttribute("sort", currentSort);
        this.displaySort(currentSort);
        EventBus.getInstance().emit(EventEnum.SORT, { columnName: columnDefinition, direction: currentSort });
    }

    private displaySort(currentSort) {
        if (currentSort === 'asc') {
            this.showSortAsc();
        } else if (currentSort === 'desc') {
            this.showSortDesc();
        }
    }

    private showSortDesc() {
        this.getSortDesc().setAttribute('class', 's-header-cell-icon');
        this.getSortAsc().setAttribute('class', 's-header-cell-icon-hidden');
    }

    private showSortAsc() {
        this.getSortAsc().setAttribute('class', 's-header-cell-icon');
        this.getSortDesc().setAttribute('class', 's-header-cell-icon-hidden');
    }

    private getSortAsc() {
        return this.htmlElement.querySelector('#s-header-cell-sort-up');
    }

    private getSortDesc() {
        return this.htmlElement.querySelector('#s-header-cell-sort-down');
    }
}