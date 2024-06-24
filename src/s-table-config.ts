import { SColumnDef } from "./s-column-def";

export class STableConfig {
    columns: SColumnDef[];
    showFilter: boolean;
    data: any[];
    style: {
        height: string;
    }
}