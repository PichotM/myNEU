export class TrackedClass {
    public readonly nre: number;
    public name: string = "Unnamed";

    public maxSeats: number = 0;
    public seatsAvailable: number = 0;

    constructor(nre: number) {
        this.nre = nre
    }

    public getAvailableSeats() {

    }

    public getMaxSeats() {
        
    }
}