import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';

@autoinject
export class UserLocationSelector {
     
    @bindable public message:string="--------";

    public loadForAdditionalLocations(reportLogin:string, addLocationsLogin:string){
         this.message=reportLogin + " adding locations for " +addLocationsLogin;
    }
}