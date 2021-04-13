export interface LaboratoriesTemplate {
        weekday: string;
        className: string;
        teacher: string;
        startHour: number;
        endHour: number;
}

export const MANUFACTURE_LAB_ARRAY: LaboratoriesTemplate[] = [

    {weekday: 'Lunes', className: 'Mecanismos', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Lunes', className: 'Manufactura', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Lunes', className: 'Manufactura Asistida', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Lunes', className: 'CNC', teacher: 'Maestra 4', startHour: 15, endHour: 17},
    {weekday: 'Lunes', className: 'Mecanismos II', teacher: 'Maestra 5', startHour: 17, endHour: 18},
    {weekday: 'Lunes', className: 'Manufactura II', teacher: 'Maestra 6', startHour: 18, endHour: 19},
    {weekday: 'Lunes', className: 'Manufactura Asistida II', teacher: 'Maestro 7', startHour: 19, endHour: 20},
    {weekday: 'Lunes', className: 'CNC II', teacher: 'Maestro 8', startHour: 20, endHour: 22},
    {weekday: 'Lunes', className: 'Mecanismos III', teacher: 'Maestra 9', startHour: 22, endHour: 23},

    {weekday: 'Martes', className: 'Mecanismos', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Martes', className: 'Manufactura', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Martes', className: 'Manufactura Asistida', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Martes', className: 'CNC', teacher: 'Maestra 4', startHour: 15, endHour: 17},
    {weekday: 'Martes', className: 'Mecanismos II', teacher: 'Maestra 5', startHour: 17, endHour: 18},
    {weekday: 'Martes', className: 'Manufactura II', teacher: 'Maestra 6', startHour: 18, endHour: 19},
    {weekday: 'Martes', className: 'Manufactura Asistida II', teacher: 'Maestro 7', startHour: 19, endHour: 20},
    {weekday: 'Martes', className: 'CNC II', teacher: 'Maestro 8', startHour: 20, endHour: 22},
    {weekday: 'Martes', className: 'Mecanismos III', teacher: 'Maestra 9', startHour: 22, endHour: 23},


    {weekday: 'Jueves', className: 'Mecanismos', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Jueves', className: 'Manufactura', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Jueves', className: 'Manufactura Asistida', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Jueves', className: 'CNC', teacher: 'Maestra 4', startHour: 15, endHour: 17},
    {weekday: 'Jueves', className: 'Mecanismos II', teacher: 'Maestra 5', startHour: 17, endHour: 18},
    {weekday: 'Jueves', className: 'Manufactura II', teacher: 'Maestra 6', startHour: 18, endHour: 19},
    {weekday: 'Jueves', className: 'Manufactura Asistida II', teacher: 'Maestro 7', startHour: 19, endHour: 20},
    {weekday: 'Jueves', className: 'CNC II', teacher: 'Maestro 8', startHour: 20, endHour: 22},
    {weekday: 'Jueves', className: 'Mecanismos III', teacher: 'Maestra 9', startHour: 22, endHour: 23},

    {weekday: 'Sabado', className: 'Mecanismos', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Sabado', className: 'Manufactura', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Sabado', className: 'Manufactura Asistida', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Sabado', className: 'CNC', teacher: 'Maestra 4', startHour: 15, endHour: 17},
    {weekday: 'Sabado', className: 'Mecanismos II', teacher: 'Maestra 5', startHour: 17, endHour: 18},
    {weekday: 'Sabado', className: 'Manufactura II', teacher: 'Maestra 6', startHour: 18, endHour: 19},
    {weekday: 'Sabado', className: 'Manufactura Asistida II', teacher: 'Maestro 7', startHour: 19, endHour: 20},
    {weekday: 'Sabado', className: 'CNC II', teacher: 'Maestro 8', startHour: 20, endHour: 22},
    {weekday: 'Sabado', className: 'Mecanismos III', teacher: 'Maestra 9', startHour: 22, endHour: 23}
];



export const DESIGN_LAB_ARRAY: LaboratoriesTemplate[] = [
    {weekday: 'Lunes', className: 'Dibujo', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Lunes', className: 'Diseño I', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Lunes', className: 'Diseño I', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Lunes', className: 'Ingeniería Asistida', teacher: 'Maestra 4', startHour: 13, endHour: 15},
    {weekday: 'Lunes', className: 'Dibujo I', teacher: 'Maestra 5', startHour: 15, endHour: 16},
    {weekday: 'Lunes', className: 'Diseño III', teacher: 'Maestra 6', startHour: 16, endHour: 18},
    {weekday: 'Lunes', className: 'Diseño IV', teacher: 'Maestro 7', startHour: 19, endHour: 20},
    {weekday: 'Lunes', className: 'Ingeniería Asistida II', teacher: 'Maestro 8', startHour: 20, endHour: 22},

    {weekday: 'Martes', className: 'Dibujo', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Martes', className: 'Diseño I', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Martes', className: 'Diseño I', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Martes', className: 'Ingeniería Asistida', teacher: 'Maestra 4', startHour: 13, endHour: 15},
    {weekday: 'Martes', className: 'Dibujo I', teacher: 'Maestra 5', startHour: 15, endHour: 16},
    {weekday: 'Martes', className: 'Diseño III', teacher: 'Maestra 6', startHour: 16, endHour: 18},
    {weekday: 'Martes', className: 'Diseño IV', teacher: 'Maestro 7', startHour: 19, endHour: 20},
    {weekday: 'Martes', className: 'Ingeniería Asistida II', teacher: 'Maestro 8', startHour: 20, endHour: 22},

    {weekday: 'Jueves', className: 'Dibujo', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Jueves', className: 'Diseño I', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Jueves', className: 'Diseño I', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Jueves', className: 'Ingeniería Asistida', teacher: 'Maestra 4', startHour: 13, endHour: 15},
    {weekday: 'Jueves', className: 'Dibujo I', teacher: 'Maestra 5', startHour: 15, endHour: 16},
    {weekday: 'Jueves', className: 'Diseño III', teacher: 'Maestra 6', startHour: 16, endHour: 18},
    {weekday: 'Jueves', className: 'Diseño IV', teacher: 'Maestro 7', startHour: 19, endHour: 20},
    {weekday: 'Jueves', className: 'Ingeniería Asistida II', teacher: 'Maestro 8', startHour: 20, endHour: 22},

    {weekday: 'Viernes', className: 'Dibujo', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Viernes', className: 'Diseño I', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Viernes', className: 'Diseño I', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Viernes', className: 'Ingeniería Asistida', teacher: 'Maestra 4', startHour: 13, endHour: 15},
    {weekday: 'Viernes', className: 'Dibujo I', teacher: 'Maestra 5', startHour: 15, endHour: 16},
    {weekday: 'Viernes', className: 'Diseño III', teacher: 'Maestra 6', startHour: 16, endHour: 18},
    {weekday: 'Viernes', className: 'Angular', teacher: 'Maestro 7', startHour: 18, endHour: 20},
    {weekday: 'Viernes', className: 'Ingeniería Asistida II', teacher: 'Maestro 8', startHour: 20, endHour: 22}
];



export const THERMO_LAB_ARRAY: LaboratoriesTemplate[] = [
    {weekday: 'Lunes', className: 'Termofluidos', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Lunes', className: 'Termodinámica', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Lunes', className: 'Máquinas térmicas', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Lunes', className: 'Refrigeración', teacher: 'Maestra 4', startHour: 13, endHour: 15},
    {weekday: 'Lunes', className: 'Termofluidos II', teacher: 'Maestra 5', startHour: 15, endHour: 16},
    {weekday: 'Lunes', className: 'Termodinámica II', teacher: 'Maestra 6', startHour: 16, endHour: 17},
    {weekday: 'Lunes', className: 'Máquinas térmicas II', teacher: 'Maestro 7', startHour: 17, endHour: 18},
    {weekday: 'Lunes', className: 'Refrigeración II', teacher: 'Maestro 8', startHour: 19, endHour: 21},

    {weekday: 'Martes', className: 'Termofluidos', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Martes', className: 'Termodinámica', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Martes', className: 'Máquinas térmicas', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Martes', className: 'Refrigeración', teacher: 'Maestra 4', startHour: 13, endHour: 15},
    {weekday: 'Martes', className: 'Termofluidos II', teacher: 'Maestra 5', startHour: 15, endHour: 16},
    {weekday: 'Martes', className: 'Termodinámica II', teacher: 'Maestra 6', startHour: 16, endHour: 17},
    {weekday: 'Martes', className: 'Máquinas térmicas II', teacher: 'Maestro 7', startHour: 17, endHour: 18},
    {weekday: 'Martes', className: 'Refrigeración II', teacher: 'Maestro 8', startHour: 19, endHour: 21},

    {weekday: 'Jueves', className: 'Termofluidos', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Jueves', className: 'Termodinámica', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Jueves', className: 'Máquinas térmicas', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Jueves', className: 'Refrigeración', teacher: 'Maestra 4', startHour: 13, endHour: 15},
    {weekday: 'Jueves', className: 'Termofluidos II', teacher: 'Maestra 5', startHour: 15, endHour: 16},
    {weekday: 'Jueves', className: 'Termodinámica II', teacher: 'Maestra 6', startHour: 16, endHour: 17},
    {weekday: 'Jueves', className: 'Máquinas térmicas II', teacher: 'Maestro 7', startHour: 17, endHour: 18},
    {weekday: 'Jueves', className: 'Refrigeración II', teacher: 'Maestro 8', startHour: 19, endHour: 21},

    {weekday: 'Viernes', className: 'Termofluidos', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Viernes', className: 'Termodinámica', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Viernes', className: 'Máquinas térmicas', teacher: 'Maestro 3', startHour: 12, endHour: 13},
    {weekday: 'Viernes', className: 'Refrigeración', teacher: 'Maestra 4', startHour: 13, endHour: 15},
    {weekday: 'Viernes', className: 'Termofluidos II', teacher: 'Maestra 5', startHour: 15, endHour: 16},
    {weekday: 'Viernes', className: 'Termodinámica II', teacher: 'Maestra 6', startHour: 16, endHour: 17},
    {weekday: 'Viernes', className: 'Máquinas térmicas II', teacher: 'Maestro 7', startHour: 17, endHour: 18},
    {weekday: 'Viernes', className: 'Refrigeración II', teacher: 'Maestro 8', startHour: 18, endHour: 21},
];



export const FLUIDS_LAB_ARRAY: LaboratoriesTemplate[] = [
    {weekday: 'Lunes', className: 'Mecánica de fluidos I', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Lunes', className: 'Mecánica de fluidos II', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Lunes', className: 'Máquinas hidráulicas', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Lunes', className: 'Bombeo', teacher: 'Maestra 4', startHour: 13, endHour: 15},
    {weekday: 'Lunes', className: 'Mecánica de fluidos III', teacher: 'Maestra 5', startHour: 15, endHour: 16},
    {weekday: 'Lunes', className: 'Mecánica de fluidos IV', teacher: 'Maestra 6', startHour: 16, endHour: 18},
    {weekday: 'Lunes', className: 'Máquinas hidráulicas II', teacher: 'Maestro 7', startHour: 18, endHour: 19},
    {weekday: 'Lunes', className: 'Bombeo I', teacher: 'Maestro 8', startHour: 19, endHour: 21},

    {weekday: 'Martes', className: 'Mecánica de fluidos I', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Martes', className: 'Mecánica de fluidos II', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Martes', className: 'Máquinas hidráulicas', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Martes', className: 'Bombeo', teacher: 'Maestra 4', startHour: 13, endHour: 15},
    {weekday: 'Martes', className: 'Mecánica de fluidos III', teacher: 'Maestra 5', startHour: 15, endHour: 16},
    {weekday: 'Martes', className: 'Mecánica de fluidos IV', teacher: 'Maestra 6', startHour: 16, endHour: 18},
    {weekday: 'Martes', className: 'Máquinas hidráulicas II', teacher: 'Maestro 7', startHour: 18, endHour: 19},
    {weekday: 'Martes', className: 'Bombeo I', teacher: 'Maestro 8', startHour: 19, endHour: 21},

    {weekday: 'Jueves', className: 'Mecánica de fluidos I', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Jueves', className: 'Mecánica de fluidos II', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Jueves', className: 'Máquinas hidráulicas', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Jueves', className: 'Bombeo', teacher: 'Maestra 4', startHour: 13, endHour: 15},
    {weekday: 'Jueves', className: 'Mecánica de fluidos III', teacher: 'Maestra 5', startHour: 15, endHour: 16},
    {weekday: 'Jueves', className: 'Mecánica de fluidos IV', teacher: 'Maestra 6', startHour: 16, endHour: 18},
    {weekday: 'Jueves', className: 'Máquinas hidráulicas II', teacher: 'Maestro 7', startHour: 18, endHour: 19},
    {weekday: 'Jueves', className: 'Bombeo I', teacher: 'Maestro 8', startHour: 19, endHour: 21},

    {weekday: 'Miercoles', className: 'Mecánica de fluidos I', teacher: 'Maestro 1', startHour: 8, endHour: 9},
    {weekday: 'Miercoles', className: 'Mecánica de fluidos II', teacher: 'Maestra 2', startHour: 9, endHour: 11},
    {weekday: 'Miercoles', className: 'Máquinas hidráulicas', teacher: 'Maestro 3', startHour: 11, endHour: 13},
    {weekday: 'Miercoles', className: 'Bombeo', teacher: 'Maestra 4', startHour: 13, endHour: 15},
    {weekday: 'Miercoles', className: 'Mecánica de fluidos III', teacher: 'Maestra 5', startHour: 15, endHour: 16},
    {weekday: 'Miercoles', className: 'Mecánica de fluidos IV', teacher: 'Maestra 6', startHour: 16, endHour: 18},
    {weekday: 'Miercoles', className: 'Máquinas hidráulicas II', teacher: 'Maestro 7', startHour: 18, endHour: 19},
    {weekday: 'Miercoles', className: 'Bombeo I', teacher: 'Maestro 8', startHour: 19, endHour: 21},
];
