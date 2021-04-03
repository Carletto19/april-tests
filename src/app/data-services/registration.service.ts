import { ElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import {LIST_ARRAY, IdentificationTemplate, SignInTemplate} from '../models/identification';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getUser(): Observable<any>{ // metodo para listar todos los estudiantes
    return this.firestore.collection('users').snapshotChanges().pipe(first()/*, map(element => element.map)*/    );    //dile al tio que es lo que pasa cuando quitas .pipe(first())
  }

  registerUser(user: IdentificationTemplate){ //metodo para crear usuario
    return this.firestore.collection('users').add(user)
                          .then((resp)=>{console.log('REGISTRED', resp);})
                          .catch((error)=>{console.log('EXISTE UN ERROR ', error)});
  }
}
