import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ScheduleMapComponent} from 'src/app/views/schedule-map/schedule-map.component';
import { MANUFACTURE_LAB_ARRAY, DESIGN_LAB_ARRAY, THERMO_LAB_ARRAY, FLUIDS_LAB_ARRAY, LaboratoriesTemplate } from '../../models/laboratories';

export class WeekdayArray {

    schedule: ScheduleMapComponent;
    constructor(public dialog: MatDialog) {

    }

    weekdayArrayFunction(name: string): LaboratoriesTemplate[] { // Fills array with information from that day
      let dayClasses = [];
      const LAB_DATA = this.schedule.selectLabDataArray(name);

      dayClasses = LAB_DATA.filter(x => x.weekday == this.schedule.weekdayName());
      // for (let i = 0; i < LAB_DATA.length; i++) {
      //   if (this.weekdayName() == LAB_DATA[i].weekday) {

      //     dayClasses.push(LAB_DATA[i]);

      //   }
      // }

      // ^^^^^^^ everything from above can be done by using .filter (106,112) ^^^^^^

      return dayClasses;
    }


  currentClassIndexFunction(name: string): number { // Returns index when conditions of schedule time apply
    const DATA = this.weekdayArrayFunction(name);
    // console.log(DATA);
    // console.log(this.dayClassesTest);
    // console.log(this.labName(name)[0].weekday);/////
    // console.log(this.weekdayName())/////
    // console.log(<number>(this.hour)+16);/////

    const currentClassIndex = DATA.findIndex((lab) => (lab.startHour <= this.schedule.hour) && lab.endHour > this.schedule.hour);
    // console.log(currentClassIndex);

    return currentClassIndex;
    // console.log(currentClassIndex);




  }




  teacher(name: string): string {
    let teacherInLab: string;
    if (this.currentClassIndexFunction(name) == -1) {
      teacherInLab = 'Sin docente';
      return (teacherInLab);
    }
    else {
      teacherInLab = this.weekdayArrayFunction(name)[this.currentClassIndexFunction(name)].teacher;
      return (teacherInLab);
    }
  }
  }

