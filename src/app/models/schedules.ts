export interface ScheduleInterface {
    id: number;
    className: string;
    teacherName: string;
    date: string;
    startTime: number;
    endTime: number;
}



export const SCHEDULE_LIST: ScheduleInterface[] = [
    { id: 1, className: 'Mecánica de fluidos', teacherName: 'Carlos Bernal', date: 'monday', startTime: 10, endTime: 11 },
    { id: 2, className: 'Diseño 1', teacherName: 'Ana María', date: 'tuesday', startTime: 11, endTime: 12 },
    { id: 3, className: 'Termo', teacherName: 'Angel', date: 'wednesday', startTime: 12, endTime: 13 },
    { id: 4, className: 'Manu', teacherName: 'Rigo', date: 'thursday', startTime: 13, endTime: 14 },
    { id: 5, className: 'Circuitos', teacherName: 'Amaro', date: 'friday', startTime: 14, endTime: 15 },
    { id: 6, className: 'Economica', teacherName: 'Eddna', date: 'saturday', startTime: 15, endTime: 16 },
];
