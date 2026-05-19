export interface ISubject {
    addObserver(observer: any): void;
    removeObserver(observer: any): void;
    notifyObservers(): void;
}