import {autoinject} from 'aurelia-framework';

@autoinject
export class Welcome {
  heading = 'Component Function Call (TypeScript)';

  callComponentFunction(){
    this.uls.loadForAdditionalLocations("ImportUser a", "ImportUser b");
  }
}
