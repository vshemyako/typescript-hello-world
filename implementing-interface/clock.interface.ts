export interface ClockInterface {
    currentDate: Date;
    changeDate(date: Date): void;
}