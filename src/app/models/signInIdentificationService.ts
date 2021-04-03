import { LIST_ARRAY } from './identification';

export class SignInIdentificationService {

  constructor() { }

  searchIdentification(email, password) {
    const identification = LIST_ARRAY.find(x => x.password === password && x.email === email);
    console.log(password, email);

    if (identification) {
      console.log('Found');
    } else {
      console.log('Not found');
    }
  }


}
