import {ClockInterface} from "./clock.interface";

export class Clock implements ClockInterface {
    currentDate: Date;

    changeDate(date: Date): void {
    }
}