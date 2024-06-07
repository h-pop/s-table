export class EventBus {
    private static instance: EventBus;

    private createdAt: Date;
    private listeners: EventListener[] = [];

    private constructor() {
        this.createdAt = new Date();
    }

    public static getInstance(): EventBus {
        if (!EventBus.instance) {
            EventBus.instance = new EventBus();
        }
        return EventBus.instance;
    }

    public emit(eventType: EventType, emitObject) {
        this.listeners.filter(l => l.eventType === eventType).forEach(l => l.callback(emitObject));
    }

    public subscribe(eventType: EventType, callback) {
        const eventListener = {eventType: eventType, callback: callback}
        this.listeners.push(eventListener);
        return eventListener;
    }

    public unsubscribe(eventListener: EventListener) {
        this.listeners = this.listeners.filter(l => l !== eventListener);
    }
}

export enum EventType {
    SORT
}

export type EventListener = {
    callback;
    eventType: EventType;
}