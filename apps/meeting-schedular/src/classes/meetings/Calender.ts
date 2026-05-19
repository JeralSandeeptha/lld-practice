import { Meeting } from "./Meeting";

export class Calender {
    private static instance: Calender;
    private meetings: Meeting[];

    // cant create instance of calender from outside the class
    private constructor() {
        this.meetings = [];
    }

    // method to get the single instance of calender
    public static getInstance(): Calender {
        if(!Calender.instance) {
            Calender.instance = new Calender();
        }
        return Calender.instance;
    }

    // add a meeting to the calender
    public addMeeting(meeting: Meeting): void {
        this.meetings.push(meeting);
        console.log(`Meeting "${meeting.getTitle()}" added to the calendar.`);
    }

    // remove a meeting from the calender
    public removeMeeting(meeting: Meeting): void {
        const index = this.meetings.indexOf(meeting);
        if (index > -1) {
            this.meetings.splice(index, 1);
            console.log(`Meeting "${meeting.getTitle()}" removed from the calendar.`);
        } else {
            console.log(`Meeting "${meeting.getTitle()}" not found in the calendar.`);
        }
    }

    // get meetings from the calender
    public listMeetings(): Meeting[] | void {
        if (this.meetings.length === 0) {
            console.log("No meetings scheduled.");
        } else {
            return this.meetings;
        }
    }
};
