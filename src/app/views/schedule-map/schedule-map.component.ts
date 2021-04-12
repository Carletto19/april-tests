import { Component, OnInit, AfterViewInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { MANUFACTURE_LAB_ARRAY, DESIGN_LAB_ARRAY, THERMO_LAB_ARRAY, FLUIDS_LAB_ARRAY, LaboratoriesTemplate } from '../../models/laboratories';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent, DialogContentManufacture } from '../../shared/dialog/dialog.component';
import { Time } from '../../models/classes-time';
import { defaultMaxListeners } from 'stream';
import { WeekdayArray } from '../schedule-map/weekdayArrayClass';
import { AuthService } from '../../data-services/auth.service'; 
import { MainNavComponent } from '../../main-nav/main-nav.component';
import { ChatComponentContent } from '../../views/chat/chat.component';



@Component({
  selector: 'app-schedule-map',
  templateUrl: './schedule-map.component.html',
  styleUrls: ['./schedule-map.component.scss']
})
export class ScheduleMapComponent implements OnInit, OnDestroy {

  dialogBox: DialogComponent;
  manufactureContent: DialogContentManufacture;

  constructor(
    public dialog: MatDialog,
    public _authService: AuthService,
    public mainNavComponent: MainNavComponent,
    // public chatComponentContent: ChatComponentContent,
    ) 
  {
    this.dialogBox = new DialogComponent(dialog);
    this.manufactureContent = new DialogContentManufacture;
   }

  hour: Number;
  minutes: Number;
  seconds: Number;
  day: Number;

  name: string;

  ngOnInit() {

      setInterval(() => {
        const time = new Date;
        this.seconds = time.getSeconds();
        this.minutes = time.getMinutes();
        this.hour = time.getHours();
        this.day = time.getDay();
      }, 1000);

      //this.chatComponentContent.sameTime()

  }



  weekdayName() {  // returns the current day number from Time function
    const dayNumber = this.day as number;
    let dayName;
    switch (dayNumber) {
      case 0:
        dayName = 'Domingo';
        break;
      case 1:
        dayName = 'Lunes';
        break;
      case 2:
        dayName = 'Martes';
        break;
      case 3:
        dayName = 'Miercoles';
        break;
      case 4:
        dayName = 'Jueves';
        break;
      case 5:
        dayName = 'Viernes';
        break;
      case 6:
        dayName = 'Sabado';
        break;
      default:
        break;
    }
    return dayName;
  }





  selectLabDataArray(name: string): LaboratoriesTemplate[] { // gives LAB_ARRAY the laboratory information from selection
    let LAB_ARRAY = [];
    switch (name) {
      case 'thermo':
        LAB_ARRAY = THERMO_LAB_ARRAY;
        break;
      case 'manufacture':
        LAB_ARRAY = MANUFACTURE_LAB_ARRAY;
        break;
      case 'design':
        LAB_ARRAY = DESIGN_LAB_ARRAY;
        break;
      case 'fluids':
        LAB_ARRAY = FLUIDS_LAB_ARRAY;
        break;
      default:
        break;
    }
    return LAB_ARRAY;
  }


  weekdayArray(name: string): LaboratoriesTemplate[] { // Fills array with information from that day
    let dayClasses = [];
    const LAB_DATA = this.selectLabDataArray(name);

    dayClasses = LAB_DATA.filter(x => x.weekday == this.weekdayName());
    // for (let i = 0; i < LAB_DATA.length; i++) {
    //   if (this.weekdayName() == LAB_DATA[i].weekday) {

    //     dayClasses.push(LAB_DATA[i]);

    //   }
    // }

    // ^^^^^^^ everything from above can be done by using .filter (106,112) ^^^^^^

    return dayClasses;
  }




  currentClassIndex(name: string): number { // Returns index when conditions of schedule time apply
    const DATA = this.weekdayArray(name);
    // console.log(DATA);
    // console.log(this.dayClassesTest);
    // console.log(this.labName(name)[0].weekday);/////
    // console.log(this.weekdayName())/////
    // console.log(<number>(this.hour)+16);/////

    const currentClassIndex = DATA.findIndex((lab) => (lab.startHour <= this.hour) && lab.endHour > this.hour);
    // console.log(currentClassIndex);

    return currentClassIndex;
    // console.log(currentClassIndex);


  }



  classStatus(name: string): string {

    if (this.currentClassIndex(name) == -1) {
      return 'Laboratorio disponible';
    }
    else {
      return this.weekdayArray(name)[this.currentClassIndex(name)].className;
    }
  }

  teacher(name: string): string {
    let teacherInLab: string;
    if (this.currentClassIndex(name) == -1) {
      teacherInLab = 'Sin docente';
      return (teacherInLab);
    }
    else {
      teacherInLab = this.weekdayArray(name)[this.currentClassIndex(name)].teacher;
      return (teacherInLab);
    }
  }

  changeHourFormat(): string {
    if (this.hour == 12 && this.seconds > 9 && this.minutes > 9) {
      return (this.hour as number) + ':' + this.minutes + ':' + this.seconds + ' pm';
    }
    else if (this.hour == 12 && this.seconds < 10 && this.minutes < 10) {
      return (this.hour as number) + ':0' + this.minutes + ':0' + this.seconds + ' pm';
    }
    else if (this.hour == 12 && this.minutes < 10) {
      return (this.hour as number) + ':0' + this.minutes + ':' + this.seconds + ' pm';
    }
    else if (this.hour == 12 && this.seconds < 10) {
      return (this.hour as number) + ':' + this.minutes + ':0' + this.seconds + ' pm';
    }


    else if (this.hour > 12 && this.seconds > 9 && this.minutes > 9) {
      return ((this.hour as number) - 12) + ':' + this.minutes + ':' + this.seconds + ' pm';
    }
    else if (this.hour > 12 && this.seconds < 10 && this.minutes < 10) {
      return ((this.hour as number) - 12) + ':0' + this.minutes + ':0' + this.seconds + ' pm';
    }
    else if (this.hour > 12 && this.minutes < 10) {
      return ((this.hour as number) - 12) + ':0' + this.minutes + ':' + this.seconds + ' pm';
    }
    else if (this.hour > 12 && this.seconds < 10) {
      return ((this.hour as number) - 12) + ':' + this.minutes + ':0' + this.seconds + ' pm';
    }

    else if (this.hour < 12 && this.seconds > 9 && this.minutes > 9) {
      return (this.hour as number) + ':' + this.minutes + ':' + this.seconds + ' am';
    }
    else if (this.hour < 12 && this.seconds < 10 && this.minutes < 10) {
      return (this.hour as number) + ':0' + this.minutes + ':0' + this.seconds + ' am';
    }
    else if (this.hour < 12 && this.minutes < 10) {
      return (this.hour as number) + ':0' + this.minutes + ':' + this.seconds + ' am';
    }
    else {
      return (this.hour as number) + ':' + this.minutes + ':0' + this.seconds + ' am';
    }
  }

  tileColor(name) {

    if (this.currentClassIndex(name) == -1) {
      const buttonStyles = {
        'background-color': 'rgb(76, 175, 80)'
      };
      return buttonStyles;
    }
    else {
      const buttonStyles = {
        'background-color': 'rgb(244, 67, 54)'
      };
      return buttonStyles;
    }
    // if (this.isAvailable) {
    //   let buttonStyles = {
    //     'background-color': 'rgb(212, 135, 153)'
    //   }
    //   return buttonStyles;
    // }
    // else {
    //   let buttonStyles = {
    //     'background-color': 'rgb(155, 243, 145)'
    //   }
    //   return buttonStyles;
    // }


  }





























  // currentClassIndex(name) {
  //   const DATA = this.weekdayArray(name);
  //   let currentClassIndex = <number>DATA.findIndex(currentHour => currentHour.startHour === <number>this.hour+13);
  //   if (currentClassIndex == -1) {
  //     currentClassIndex = <number>DATA.findIndex(currentHour => currentHour.startHour - 1 === <number>this.hour);
  //     return currentClassIndex;
  //     // console.log(currentClassIndex);

  //   } else {
  //     return currentClassIndex;
  //     // console.log(currentClassIndex);

  //   }
  // }










  // new(name) {
  //   setInterval(() => {
  //     this.classStatus(name)
  //   }, 3000);
  // }

  // manufactureStatus() {
  //   if (this.currentClassIndex('manufacture') == -1) {
  //     this.className = 'You do not have class';
  //     // console.log ('You do not have class');
  //   }
  //   else {
  //     this.className = 'Your class is ' + this.labName('manufacture')[this.currentClassIndex('manufacture')].className;
  //     // console.log(this.time.currentCourseInLab);
  //   }
  // }

  //   classStatus(name: string) {
  //     console.log(name);
  //     if (this.time.currentClassIndex(name) == -1) {
  //         this.className = 'You do not have class';
  //         console.log ('You do not have class');
  //     }
  //     else {
  //         this.className= 'Your class is ' + this.time.labName(name)[this.time.currentClassIndex(name)].className;
  //         console.log(this.time.currentCourseInLab);
  //     }
  // }



  // this.tiles = [
  //   { rows: 2, cols: 2, data: this.classStatus('manufacture') },
  //   { rows: 2, cols: 2, data: this.classStatus('design') },
  //   { rows: 2, cols: 2, data: this.classStatus('fluids') },
  //   { rows: 2, cols: 2, data: this.classStatus('thermo') },
  // ];



  ngOnDestroy() {
    setInterval(() => {
      const time = new Date;
      this.seconds = time.getSeconds();
      this.minutes = time.getMinutes();
      this.hour = time.getHours();
      this.day = time.getDay();
    }, 1000);
  }




}


//    Luis Carlos Mariles S.



