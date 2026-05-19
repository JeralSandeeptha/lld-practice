import { ISubject } from "../helpers/ISubject";
import { User } from "../user/User";
import { MeetingRoom } from "./MeetingRoom";
import { MeetingStatus } from "./MeetinStatus";

export class Meeting implements ISubject{
    private title: string;
    private date: Date;
    private startTime: Date; // Duration in minutes
    private endTime: Date; // Duration in minutes
    private participants: User[]; // List of participant names
    private meetingRoom: MeetingRoom; // Meeting room name
    private meetingStatus: MeetingStatus;

    constructor(meetingRoom: MeetingRoom, title: string, date: Date, startTime: Date, endTime: Date, participants: User[]) {
        this.meetingRoom = meetingRoom;
        this.title = title;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.participants = participants;
        this.meetingStatus = MeetingStatus.SCHEDULED;
    }

    addObserver(observer: any): void {
        throw new Error("Method not implemented.");
    }
    removeObserver(observer: any): void {
        throw new Error("Method not implemented.");
    }
    notifyObservers(): void {
        throw new Error("Method not implemented.");
    }

    public scheduleMeeting(): void {
        console.log(`Meeting "${this.title}" has been scheduled.`);
        this.notifyObservers();
    }

    public startMeeting(): void {
        console.log(`Meeting "${this.title}" has started.`);
        this.meetingStatus = MeetingStatus.IN_PROGRESS;
    }

    public endMeeting(): void {
        console.log(`Meeting "${this.title}" has ended.`);
        this.meetingStatus = MeetingStatus.COMPLETED;
    }

    public addParticipant(participant: User): void {
        this.participants.push(participant);
        console.log(`Participant "${participant.getName()}" added to the meeting "${this.title}".`);
    }
    
    public getTitle(): string {
        return this.title;
    }

    public getMeetingStatus(): MeetingStatus {
        return this.meetingStatus;
    }

    public getMeetingRoom(): MeetingRoom {
        return this.meetingRoom;
    }

    public getDate(): Date {
        return this.date;
    }

    public getStartTime(): Date {
        return this.startTime;
    }

    public getEndTime(): Date {
        return this.endTime;
    }

    public getParticipants(): User[] {
        return this.participants;
    }
};
