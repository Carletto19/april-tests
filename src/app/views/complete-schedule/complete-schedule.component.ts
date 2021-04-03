import { Component, OnInit } from '@angular/core';
import { MANUFACTURE_LAB_ARRAY, DESIGN_LAB_ARRAY, THERMO_LAB_ARRAY, FLUIDS_LAB_ARRAY, LaboratoriesTemplate } from '../../models/laboratories';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-complete-schedule',
  templateUrl: './complete-schedule.component.html',
  styleUrls: ['./complete-schedule.component.scss']
})
export class CompleteScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  MANUFACTURE_ARRAY = MANUFACTURE_LAB_ARRAY;
  DESIGN_ARRAY = DESIGN_LAB_ARRAY;
  THERMO_ARRAY = THERMO_LAB_ARRAY;
  FLUIDS_ARRAY = FLUIDS_LAB_ARRAY


  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  dataSourceManufacture = new MatTableDataSource(this.MANUFACTURE_ARRAY);
  dataSourceDesign = new MatTableDataSource(this.DESIGN_ARRAY);
  dataSourceThermo = new MatTableDataSource(this.THERMO_ARRAY);
  dataSourceFluids = new MatTableDataSource(this.FLUIDS_ARRAY);

}