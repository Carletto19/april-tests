import { AbstractControl, FormControl } from '@angular/forms';


export class ValidationStyles {

    inputStyle(input: AbstractControl): string {
        if (input.touched && input.invalid) {
            return 'redBorder';
        }
        return '';
    }

    requiredPrecaution(input: AbstractControl) {
        if (input.errors?.required && input.touched) {
            return true;
        }
        return;
    }

    emailPatternPrecaution(input: AbstractControl) {
        if (input.errors?.pattern && input.touched) {
            return true;
        }
        return;
    }

    namesPatternPrecaution(input: AbstractControl){
        if (input.errors?.pattern && input.touched){
            return true;
        }
        return;
    }

}



