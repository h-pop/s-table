export type Direction = 'asc' | 'desc';
export type Sort = {
    columnName: string;
    direction: Direction;
}
export type TypedEventListener = {
    callback: Function;
    eventType: EventEnum;
}
export enum EventEnum {
    SORT
}