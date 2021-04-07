import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/data-services/auth.service';
import { ChatService, Message } from 'src/app/data-services/chat.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  // allMessages: Observable<Message>

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    public _chatService: ChatService,
  ) {
    // this.allMessages = this.chatService.getMessages();
  }



  ngOnInit(): void {
  }


  openChat() {
    this.dialog.open(ChatComponentContent);

  }

}



@Component({
  templateUrl: './chat-content/chat-content.component.html',
  styleUrls: ['./chat-content/chat-content.component.scss']
})
export class ChatComponentContent implements OnInit {

  messageInput: FormGroup;
  allMessages: Observable<Message>

  constructor(
    public _chatService: ChatService,
  ) {
    this.allMessages = this._chatService.getMessages();
  }



  ngOnInit(): void {
    // this._chatService.getMessagesPromise();
  }

  sendMessage(message: string) {
    this._chatService.sendMessage(message);
    // this._chatService.getMessagesPromise();
  }



}
