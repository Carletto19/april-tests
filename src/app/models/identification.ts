export interface IdentificationTemplate {
  id?: number;
  firstName: string;
  secondName?: string;
  lastName: string;
  email: string;
  password: string;
  major: string;
}

export interface SignInTemplate {
  password: string;
  email: string;
}

export const LIST_ARRAY: IdentificationTemplate[] = [
      { id: 1, firstName: 'Luis Carlos', lastName: 'Mariles', email: 'carlitos@uabc.edu', password: 'carlitos' , major: 'Ingeniería mecánica'},
      { id: 2, firstName: 'José Manuel', lastName: 'Cota', email: 'manuel@unam.edu', password: 'manolo' , major: 'Ingeniería en computación'},
      { id: 3, firstName: 'Antonio', lastName: 'Guitron', email: 'tony@uabc.edu', password: 'tony' , major: 'Ingeniería eléctrica'},
      { id: 4, firstName: 'Gerardo', lastName: 'Padilla', email: 'gera@uabc.edu', password: 'gera', major: 'Ingeniería aeroespacial' }
    ];

export const MAJOR_ARRAY = [
      { major: 'Ingeniería mecánica'},
      { major: 'Ingeniería en computación'},
      { major: 'Ingeniería eléctrica'},
      { major: 'Ingeniería aeroespacial' }
    ];
