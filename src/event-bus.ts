import { EventEnum, TypedEventListener } from "./types";

export class EventBus {
    private static instance: EventBus;

    private createdAt: Date;
    private listeners: TypedEventListener[] = [];

    private constructor() {
        this.createdAt = new Date();
    }

    public static getInstance(): EventBus {
        if (!EventBus.instance) {
            EventBus.instance = new EventBus();
        }
        return EventBus.instance;
    }

    public emit(eventType: EventEnum, emitObject: any) {
        this.listeners.filter(l => l.eventType === eventType).forEach(l => l.callback(emitObject));
    }

    public subscribe(eventType: EventEnum, callback) {
        const eventListener = { eventType: eventType, callback: callback }
        this.listeners.push(eventListener);
        return eventListener;
    }

    public unsubscribe(eventListener: TypedEventListener) {
        this.listeners = this.listeners.filter(l => l !== eventListener);
    }
}

