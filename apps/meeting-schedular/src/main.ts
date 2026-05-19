import { MeetingRoom } from "./classes/meetings/MeetingRoom";
import { Schedular } from "./classes/meetings/Schedular";
import { User } from "./classes/user/User";

// users
const userOne = new User("John Doe", "john.doe@example.com");
const userTwo = new User("Jane Smith", "jane.smith@example.com");
const userThree = new User("Bob Johnson", "bob.johnson@example.com");
const userFour = new User("Alice Brown", "alice.brown@example.com");
const admin = new User("Admin", "admin@example.com");
const users = [userOne, userTwo, userThree, userFour, admin];
console.log(users);

// meeting rooms
const roomOne = new MeetingRoom("Room A", 10);
const roomTwo = new MeetingRoom("Room B", 20);
const roomThree = new MeetingRoom("Room C", 15);
const meetingRooms = [roomOne, roomTwo, roomThree];

const scheduler = new Schedular(meetingRooms);

console.log(scheduler);

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
scheduler.scheduleMeeting(
    roomOne, 
    [userOne, userTwo, admin], 
    new Date("2024-07-01T10:00:00"), 
    new Date("2024-07-01T11:00:00"), 
    "Project Meeting",
    new Date("2024-07-01")
);

console.log(scheduler.listMeetings());