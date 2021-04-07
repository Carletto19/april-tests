import { Injectable } from '@angular/core';
import { AngularFireDatabase  } from '@angular/fire/database';
import { Observable } from 'rxjs';


export interface Message{
  message: string;
  time: string;
  date: string;
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  isLoaded: boolean = true;

  constructor(
    private chatDatabase: AngularFireDatabase 
  ) { }

  getMessages(): Observable<any> {
    return this.chatDatabase.list<Message>('messages').valueChanges()
  }


  // getMessagesPromise(): Promise<any> {
  //   return this.chatDatabase.list<Message>('messages').snapshotChanges().pipe(to);
  //     /*this.isLoaded = false*/});
  // }

  sendMessage(message: string){
    const currTime = Number(new Date());
    const readableTime = new Date(currTime).toLocaleDateString();
    const readableDate = new Date(currTime).toDateString();

    this.chatDatabase.list<Message>('messages').push({
      message,
      time: readableTime,
      date: readableDate,
    });

    this.chatDatabase.object('messages').update({'last_updated_at': currTime});
  }

}


