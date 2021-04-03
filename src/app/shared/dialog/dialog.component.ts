import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MANUFACTURE_LAB_ARRAY, DESIGN_LAB_ARRAY, THERMO_LAB_ARRAY, FLUIDS_LAB_ARRAY, LaboratoriesTemplate } from '../../models/laboratories';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(private dialog: MatDialog) {
  }

  openDialog(name) {


    switch (name) {
      case 'manufacture':
        this.dialog.open(DialogContentManufacture);
        break;
      case 'design':
        this.dialog.open(DialogContentDesign);
        break;
      case 'fluids':
        this.dialog.open(DialogContentFluids);
        break;
      case 'thermo':
        this.dialog.open(DialogContentThermo);
        break;
      default:
        break;
    }

  }

}































@Component({
  templateUrl: './dialog-contents/dialog-content-manufacture.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentManufacture implements OnInit{
  constructor() {}

  
  isWeekend: boolean = false;

  MANUFACTURE_ARRAY = MANUFACTURE_LAB_ARRAY.filter(x => x.weekday == this.weekdayNameForDialog());


  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  dataSourceManufacture = new MatTableDataSource(this.MANUFACTURE_ARRAY);

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngOnInit() {
    this.dataSourceManufacture.sort = this.sort;
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }
  }
  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay() ;
    return this.day;
 }

  weekdayNameForDialog() {  // returns the current day number from Time function
    const dayNumber = this.dayNumber();
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
    // console.log(dayName);
    return dayName;
  }
}










@Component({
  templateUrl: './dialog-contents/dialog-content-design.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentDesign implements AfterViewInit{
  constructor() {}

  isWeekend: boolean = false;

  DESIGN_ARRAY = DESIGN_LAB_ARRAY.filter(x => x.weekday == this.weekdayNameForDialog());


  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  dataSourceDesign = new MatTableDataSource(this.DESIGN_ARRAY);

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngAfterViewInit() {
    this.dataSourceDesign.sort = this.sort;
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }
  }
  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay() ;
    return this.day;
 }

  weekdayNameForDialog() {  // returns the current day number from Time function
    const dayNumber = this.dayNumber();
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
    // console.log(dayName);
    return dayName;
  }
}










@Component({
  templateUrl: './dialog-contents/dialog-content-thermo.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentThermo implements AfterViewInit{
  constructor() {}

  isWeekend: boolean = false;

  THERMO_ARRAY = THERMO_LAB_ARRAY.filter(x => x.weekday == this.weekdayNameForDialog());


  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  dataSourceThermo = new MatTableDataSource(this.THERMO_ARRAY);

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngAfterViewInit() {
    this.dataSourceThermo.sort = this.sort;
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }
  }
  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay() ;
    return this.day;
 }

  weekdayNameForDialog() {  // returns the current day number from Time function
    const dayNumber = this.dayNumber();
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
    // console.log(dayName);
    return dayName;
  }
}









@Component({
  templateUrl: './dialog-contents/dialog-content-fluids.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentFluids implements AfterViewInit {
  constructor() {}

  isWeekend: boolean = false;

  FLUIDS_ARRAY = FLUIDS_LAB_ARRAY.filter(x => x.weekday == this.weekdayNameForDialog());


  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  dataSourceFluids = new MatTableDataSource(this.FLUIDS_ARRAY);

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngAfterViewInit() {
    this.dataSourceFluids.sort = this.sort;
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }
  }
  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay() ;
    return this.day;
 }

  weekdayNameForDialog() {  // returns the current day number from Time function
    const dayNumber = this.dayNumber();
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
    // console.log(dayName);
    return dayName;
  }
}





























































// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { DialogComponent } from './dialog.component';

// describe('DialogComponent', () => {
//   let component: DialogComponent;
//   let fixture: ComponentFixture<DialogComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DialogComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DialogComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
