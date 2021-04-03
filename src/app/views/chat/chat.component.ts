import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ChatService, Message } from 'src/app/data-services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  // allMessages: Observable<Message>

  constructor(
    private dialog: MatDialog,
    // private chatService: ChatService,
  ) { 
    // this.allMessages = this.chatService.getMessages();
  }



  ngOnInit(): void {
  }


  openChat(){
    this.dialog.open(ChatComponentContent);
  }

}



@Component({
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class ChatComponentContent implements OnInit {


  allMessages: Observable<Message>

  constructor(
    private chatService: ChatService,
  ) { 
    this.allMessages = this.chatService.getMessages();
  }


  ngOnInit(): void {
  }

  sendMessage(message: string){
    this.chatService.sendMessage(message);
  }

}
