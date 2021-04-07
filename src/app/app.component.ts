import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RegistrationService } from './data-services/registration.service'

@Component({
  selector: 'app-root',
  template: `
  <app-main-nav>
  <router-outlet></router-outlet>
  
  </app-main-nav>
  <!-- <app-main-page></app-main-page> -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  collection = {data: []}

  constructor(
    private registerDatabase: RegistrationService,
  ){

  }
  
  title = 'december-project';
  ngOnInit(){
  // this.registerDatabase.getUser().subscribe(data=>{
  //     this.collection.data = data.map((e:any)=> {let newData = {
  //       firstName: e.payload.doc.data().firstName,
  //       lastName: e.payload.doc.data().lastName,
  //       email: e.payload.doc.data().email,
  //       password: e.payload.doc.data().password,
  //       major: e.payload.doc.data().major,
  //     }
  //     console.log(newData.email);
  //     })
  //   },
  //   error=>{console.error('A VER WEY ALGO ESTA PASANDO'), error}
  //   )
  }

 
}



