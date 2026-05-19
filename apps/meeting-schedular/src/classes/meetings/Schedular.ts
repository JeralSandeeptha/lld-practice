import { User } from "../user/User";
import { Calender } from "./Calender";
import { Meeting } from "./Meeting";
import { MeetingRoom } from "./MeetingRoom";

export class Schedular {
    private meetingRooms: MeetingRoom[];
    private calender: Calender;

    constructor(meetingRooms: MeetingRoom[]) {
        this.meetingRooms = meetingRooms;
        this.calender = Calender.getInstance();
    }

    public scheduleMeeting(meetingRoom: MeetingRoom, participants: User[], endTime: Date, startTime: Date, title: string, date: Date): void {
        const meeting = new Meeting(
            meetingRoom,
            title,
            date,
            startTime,
            endTime,
            participants,
        );
        this.calender.addMeeting(meeting);
    }

    public startMeeting(meeting: Meeting): void {
        console.log(`Meeting "${meeting.getTitle()}" is starting.`);
    }

    public endMeeting(meeting: Meeting): void {
        console.log(`Meeting "${meeting.getTitle()}" has ended.`);
    }

    public cancelMeeting(meeting: Meeting): void {
        console.log(`Meeting "${meeting.getTitle()}" has been cancelled.`);
    }

    public listMeetings(): void {
        this.getCalender().listMeetings();
    }

    public getMeetingRooms(): MeetingRoom[] {
        return this.meetingRooms;
    }

    private getCalender(): Calender {
        return this.calender;
    }

    public findAvailableMeetingRooms(date: Date, duration: number): MeetingRoom[] {
        const availableRooms: MeetingRoom[] = [];
        return availableRooms;
    }
};
