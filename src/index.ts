import { STable } from "./s-table";
import { STableConfig } from "./s-table-config";

function create(container: HTMLElement, sTableConfig: STableConfig) {
    new STable(container, sTableConfig);
}

export { create };