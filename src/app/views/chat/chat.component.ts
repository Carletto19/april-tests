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


  public hour: Number;
  public minutes: Number;
  ngOnInit(): void {
    setInterval(() => {
      const time = new Date;
      this.minutes = time.getMinutes();
      this.hour = time.getHours()-20;
      this.deleteAfterTime()
    }, 10000);

  }



  sendMessage(message: string) {
    if(message != ''){
    this._chatService.sendMessage(message);
    }
    return;
    // this._chatService.getMessagesPromise();
  }




  
  showKey(){
    return this._chatService.firstKeyFromDB().subscribe(lastItems =>{
      
      // this._chatService.chatDatabase.database.ref('/messages/').child(lastItems).remove();
      // this.firstKey = lastItems;
      console.log(lastItems);
      let lastItemString = lastItems.toString();
      console.log(lastItemString);

      this._chatService.getMessages().subscribe(allMessages =>{
        let usableTime = allMessages[0].time.slice(0,-3);
        let currentTime =this.timeFormat();

        console.log(usableTime + ' vs ' + currentTime  + '        '+ this.hour + this.minutes);
        
      })
    }); 
    // console.log(this._chatService.firstKeyFromDB())    .child('/'+lastItems))         this._chatService.chatDatabase.database.ref('messages/'+lastItems)

    
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

  deleteAfterTime(){
    this._chatService.getMessages().pipe(first()).subscribe(allMessages =>{
      let usableTime = allMessages[0].time.slice(0,-3);
      let itemKey = allMessages[0].id;
      if(usableTime == this.timeFormat()){
        // setTimeout(() => {
        this._chatService.chatDatabase.database.ref('/messages/').child(itemKey).remove();
        console.log(true);
        // },55000)
        return
      }
      else{
        console.log(false + itemKey + '    messagetuime->' + usableTime + '      actualtime->'+ this.timeFormat());
      }

      //console.log(lastItems)
    })



  }


  tests(){
    
    this._chatService.getMessages().pipe(first()).subscribe(allMessages =>{
      let lastItemString = allMessages.toString();

      let firstItem = '-MXzWfTo1TaWgMOCQziW';
      // lastItems.remove(object[0])
      // let key = this._chatService.chatDatabase.database.ref('/messages/').child('id').set();

      // console.log(idKey)
      this._chatService.chatDatabase.database.ref('/messages/').child(firstItem).remove();
      //this._chatService.chatDatabase.database.ref('/messages/').child(lastItemString).remove(); IMPORTANT********

      // this.firstKey = lastItems;
      console.log(allMessages.length);
      // console.log(lastItemString);
      // this._chatService.chatDatabase.database.ref('/messages').child(lastItemString).remove();
      // this._chatService.chatDatabase.database.ref('/messages').child(lastItemString).remove();
      // console.log(this._chatService.key.valueChanges)
      // console.log(this._chatService.chatDatabase.list('messages/'+lastItems));
    }); 
  }



}
