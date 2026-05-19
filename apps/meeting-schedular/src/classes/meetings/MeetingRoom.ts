export class MeetingRoom {
    private roomNumber: string;
    private capacity: number;
    private isAvailable: boolean;

    constructor(roomNumber: string, capacity: number) {
        this.roomNumber = roomNumber;
        this.capacity = capacity;
        this.isAvailable = true; // Assuming the room is available when created
    }

    public getRoomNumber(): string {
        return this.roomNumber;
    }

    public getCapacity(): number {
        return this.capacity;
    }

    public checkAvailability(): boolean {
        return this.isAvailable;
    }

    public bookRoom(): void {
        if (this.isAvailable) {
            this.isAvailable = false; // Mark the room as booked
        } else {
            throw new Error(`Meeting Room ${this.roomNumber} is already booked.`);
        }
    }

    public releaseRoom(): void {
        this.isAvailable = true; // Mark the room as available
    }
};
