import { Component, OnInit } from "@angular/core";
import { WebexService } from "../webex.service";

@Component({
selector: 'app-room',
templateUrl: './room.component.html',
styleUrls: ['./room.component.sass']
})

export class RoomComponent implements OnInit{
roomName: string;
roomId: string;
memberName: string;
textMessage: string;
name:string;

constructor(private webex: WebexService) {}

ngOnInit(): void {
this.webex.onInit()
}

onCreateRoom() {

this.webex.onCreateRoom(this.roomName).then((roomId) => {
console.log(roomId)
this.roomId=roomId.id
})

}

addPeopleToRoom() {

console.log(this.roomId)
this.webex.addPeopleToRoom(this.memberName,this.roomId)



}

sendmsgToRoom() {
if(this.textMessage,this.roomId) {
this.webex.sendmsgToRoom(this.textMessage,this.roomId)
}

}

listRooms() {
this.webex.onListRoom().then((rooms) => {
console.log(rooms)
})
}

onLogout() {
this.webex.onLogout()
}
}