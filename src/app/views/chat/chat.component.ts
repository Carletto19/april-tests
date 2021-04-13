import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { first, last } from 'rxjs/operators';
import { AuthService } from 'src/app/data-services/auth.service';
import { ChatService, Message } from 'src/app/data-services/chat.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { object } from 'firebase-functions/lib/providers/storage';


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
  allMessages: Observable<Message>;
  

  constructor(
    public _chatService: ChatService,
  ) {
    this.allMessages = this._chatService.getMessages();
  }


  public hour: number;
  public minutes: Number;
  ngOnInit(): void {
    setInterval(() => {
      const time = new Date;
      this.minutes = time.getMinutes();
      this.hour = time.getHours();
      if(this.hour==0){
        this.hour = 22;
      }
      else if (this.hour == 1){
        this.hour = 23;
      }
      //this.deleteAfter2Hours()
    }, 10000);
    this.deleteMessageAfter2Hours()
  }


  sendMessage(message: string) {
    if(message != ''){
    this._chatService.sendMessage(message);
    }
    return;
  }


  deleteMessageAfter2Hours(){
    this._chatService.getMessages().pipe(first()).subscribe(allMessages =>{
      this._chatService.chatDatabase.database.ref('/messages/').child('-MY73zTvGBdcmFD8Sqtv').remove();
      // let messageTime = <number>allMessages[0].timeCheck+ 2 * 60 * 60 * 1000;
      let currentTime = Date.now();
      // console.log(currentTime);
      let allMessagesTimes = [];
      let allIds = [];

      for(let y = 0; y<allMessages.length-1; y++){
        allMessagesTimes.push(allMessages[y].timeCheck + 1 * 60 * 60 * 1000 )
        allIds.push(allMessages[y].id);
      }

      for(let i = 0; i<allMessages.length-1; i++){
        if(allMessagesTimes[i]<= currentTime){
          this._chatService.chatDatabase.database.ref('/messages/').child(allIds[i]).remove();
        }
        else{
          console.log(false);
        }
      }

      console.log(allMessagesTimes);
      console.log(allIds);
    }); 
  }


  
  tests(){
    this._chatService.getMessages().pipe(first()).subscribe(allMessages =>{
      if(allMessages.length<=1){
        console.log('No hay nada')
        return;
      }
      let usableTime = allMessages[0].time.slice(0,-3);
      let itemKey = allMessages[0].id;
      if(usableTime == this.timeFormat()){
        this._chatService.chatDatabase.database.ref('/messages/').child(itemKey).remove();
        console.log(true);
        return
      }
      else{
        console.log(false + itemKey + '    messagetuime->' + usableTime + '      actualtime->'+ this.timeFormat());
      }
    })
  }


  
  timeFormat(): string{
    if(this.hour>9 && this.minutes>9){
      return (this.hour+':'+this.minutes);
    }
    else if(this.hour<=9 && this.minutes<=9){
      return ('0'+this.hour + ':0' + this.minutes);
    }
    else if(this.hour<=9 && this.minutes>9){
      return ('0'+this.hour + ':' + this.minutes)
    }
    else if(this.hour>9 && this.minutes<=9){
      return (this.hour + ':0' + this.minutes)
    }
  }




}
