import { STable } from "./s-table";
import { TestData } from "./test-data";

function create(container) {
    new STable(container, {
        data: TestData.animals,
        columns: [
            { name: 'name' },
            { name: 'type' },
            { name: 'isVaccinated' },
            { name: 'incidentDescription' },
            { name: 'context' }
        ]
    });
}

export { create };