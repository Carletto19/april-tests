import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { MainPageComponent } from './views/main-page/main-page.component';
// import { Time } from './models/classes-time';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table'  
import {MatCardModule} from '@angular/material/card';



import { SignUpComponent } from './views/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleMapComponent } from './views/schedule-map/schedule-map.component';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from 'src/environments/environment';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { AuthService } from './data-services/auth.service';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { DialogComponent } from './shared/dialog/dialog.component';
import { DialogContentManufacture } from './shared/dialog/dialog.component';
import { DialogContentDesign } from './shared/dialog/dialog.component';
import { DialogContentThermo } from './shared/dialog/dialog.component';
import { DialogContentFluids } from './shared/dialog/dialog.component';
import { ChatComponent } from './views/chat/chat.component';
import { CompleteScheduleComponent } from './views/complete-schedule/complete-schedule.component';
import { ChatComponentContent } from './views/chat/chat.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainPageComponent,
    SignUpComponent,
    ScheduleMapComponent,
    NavigationBarComponent,
    MainNavComponent,
    DialogComponent,
    DialogContentManufacture,
    DialogContentManufacture,
    DialogContentDesign,
    DialogContentThermo,
    DialogContentFluids,
    ChatComponent,
    ChatComponentContent,
    CompleteScheduleComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,   
     
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    LayoutModule,
    MatListModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    MatCardModule
    // Time
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
