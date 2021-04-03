import {LIST_ARRAY, IdentificationTemplate, MAJOR_ARRAY} from './identification';

export class SignUpRegitration {
  listLength: number = LIST_ARRAY.length;
  majorList: Object = MAJOR_ARRAY;


  constructor() { }


  // registration(data: IdentificationTemplate, email: string) {
  //   if (LIST_ARRAY.find(x => x.email === email)) {
  //     throw new Error ('This email is already taken!'); // Email repetition validatation
  //   }

  //   LIST_ARRAY.push(data); // All validations are correct
  //   console.log('Array ', LIST_ARRAY);
  // }
}
