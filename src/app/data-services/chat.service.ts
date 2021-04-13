import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges  } from '@angular/fire/database';
import { Query } from '@google-cloud/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';


export interface Message{
  message: string;
  timeCheck: number,
  time: string;
  date: string;
  
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(
    public chatDatabase: AngularFireDatabase 
  ) { }

  getMessages(): Observable<any> {
    return this.chatDatabase.list<Message>('messages').valueChanges();
  }


  key: any;


  sendMessage(message: string){
    const currTime = Number(new Date());
    const now = Date.now();
    const readableTime = new Date(currTime).toLocaleTimeString();
    const readableDate = new Date(currTime).toDateString();

    let object = this.chatDatabase.list<Message>('messages').push({
      message,
      timeCheck: now,
      time: readableTime,
      date: readableDate,
    }).key;

    this.chatDatabase.database.ref('messages/'+object).child('id').set(object);


    

    //this.chatDatabase.list('/keys').push(object);

    this.chatDatabase.object('messages').update({'last_updated_at': currTime});

 

  }



  firstKeyFromDB(): Observable<any>{
   return this.key = this.chatDatabase.list('/keys', ref => ref.limitToFirst(1)).valueChanges();
  }



  accumulatedKeys: string[] = [];


  deleteMessage(){
    
    
    return this.chatDatabase.database.ref('/messages').child('-MXuCGGBBeWBhsnqpNfN').remove();
   // console.log(this.accumulatedKeys[0], this.key);
    // console.log(this.chatDatabase.object('messages').remove());
    ;
  }

}


