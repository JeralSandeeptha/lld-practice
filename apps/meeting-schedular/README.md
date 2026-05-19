# Meeting Schedular

## Requirements

- There are `n` number of meeting rooms
- Book a meeting in any meeting room at given interval (start and end time, capacity)
- Send notifications for all the users who are invited to the meeting
- Use meeting room for track the meetings (date and time)

## Class Diagram

```mermaid

classDiagram

%% ===== Interfaces =====
class IObserver {
    <<interface>>
    +update()
}

class ISubject {
    <<interface>>
    +subscribe()
    +unsubscribe()
    +notify()
}

class INotification {
    <<interface>>
    +send()
}

%% ===== Concrete Classes =====
class MeetingRoom {

}

class Meeting {
    +startMeeting()
    +endMeeting()
}

class EmailNotification {
    +send()
}

class User {

}

class Calender {
    +getMeetings()
    +removeMeeting()
}

class MeetingSchedular {
    +schedule()
}

%% ===== Relationships =====

MeetingSchedular --> MeetingRoom : has-a
MeetingSchedular --> User : has-a
MeetingSchedular --> Meeting : uses
IObserver <|-- User : is-a
ISubject <|-- Meeting : is-a
INotification <|-- EmailNotification : is-a

%% ===== Client =====
class Client {
    +main()
}

Client --> Calender : uses
Client --> MeetingSchedular : uses

```
