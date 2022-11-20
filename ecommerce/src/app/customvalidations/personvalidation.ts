import {AbstractControl,ValidationErrors} from '@angular/forms' 
export function grt10(cntrl:AbstractControl):ValidationErrors | null{
    let frmctrlval=cntrl.value;
    if(frmctrlval<=10)
    {
        return{
            'grt10':false,'msg':'value should be greater than 10'}
        }
    
    else{
        return null;
    }
}