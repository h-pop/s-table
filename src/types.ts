export type Direction = 'asc' | 'desc' | 'none';
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