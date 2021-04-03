import { ScheduleInterface, SCHEDULE_LIST } from './schedules';
import { MANUFACTURE_LAB_ARRAY, DESIGN_LAB_ARRAY, THERMO_LAB_ARRAY, FLUIDS_LAB_ARRAY, LaboratoriesTemplate } from '../models/laboratories';

export class Time {

    currentCourseInLab: string;

    constructor() { }

    newHour(): number {
        const time = new Date;
        const hour = time.getHours();
        return hour;
    }


    currentClassIndex(name) {
        const DATA = this.labName(name);
        const currentClassIndex = DATA.findIndex(currentHour => currentHour.startHour === this.newHour()) as number;
        return currentClassIndex;
    }

    labName(name: string) {
        let LAB_ARRAY;
        switch (name) {
            case 'thermo':
                return LAB_ARRAY = THERMO_LAB_ARRAY;
            case 'manufacture':
                return LAB_ARRAY = MANUFACTURE_LAB_ARRAY;
            case 'design':
                return LAB_ARRAY = DESIGN_LAB_ARRAY;
            case 'fluids':
                return LAB_ARRAY = FLUIDS_LAB_ARRAY;
            default:
                break;
        }
    }

    classStatus(name: string): string {
        console.log(name);
        if (this.currentClassIndex(name) == -1) {
            this.currentCourseInLab = 'You do not have class';
            console.log ('You do not have class');
        }
        else {
            this.currentCourseInLab = 'Your class is ' + this.labName(name)[this.currentClassIndex(name)].className;
            console.log(this.currentCourseInLab);
        }
        return this.currentCourseInLab;
    }

    updatedClassesStatus(name: string) {
        setInterval(() => {
            this.classStatus(name);
        }, 3000);
    }







}

// newHour(): number {
//     let time = new Date;
//     let hour = time.getHours();
//     return hour;
// }

// // updatedHour() {
// //     const hours = setInterval(() => {
// //         let currentHour = this.showHour();
// //         //console.log(currentHour);
// //         return currentHour;
// //     }, 3000);
// // }

// currentClassIndex(hour) {
//     const  scheduleClasses = SCHEDULE_CLASSES;
//     const currentClass = setInterval(() => {
//     let currentClassIndex = scheduleClasses.findIndex(currentHour => currentHour.startTime === hour-3);
//     //console.log(SCHEDULE_CLASSES[currentClassIndex].className);
//     return currentClassIndex;
//     }, 3000);
// }

// className(index): string {
//     if (index == -1) {
//         console.log('You do not have class');
//     }
//     else {
//         console.log('Your class is ' + SCHEDULE_CLASSES[index].className);
//     }
//     return;
// }
