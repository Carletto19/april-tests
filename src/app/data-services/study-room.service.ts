import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudyRoomService {

  constructor(
    public peopleNumberDatabase: AngularFireDatabase,
  ) { }

  peopleNumber: unknown[];

  peopleInRoom(){
    return this.peopleNumberDatabase.list('people/number').snapshotChanges();
  }
}
