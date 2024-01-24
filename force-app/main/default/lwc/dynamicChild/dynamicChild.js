import { LightningElement, api, wire } from "lwc";
import getCustomMetadata from '@salesforce/apex/PropertySettingsController.getCustomMetadata';
//does importing js file work? field validation? // fieldValidations.js
export default class DynamicChild extends LightningElement {

  @api recordId;
  componentConstructor;
  @api strlwc;

  @api childProps;

  @wire(getCustomMetadata, {lwcName: '$strlwc'}) 
  wiredAccount({ error, data }) {
    if (data) {
        var temp = {};

        data.map((item) => {
          temp[item['dynamicLwc2024__Property_Name__c']] = item['dynamicLwc2024__Property_Value__c'];
       });

      this.childProps = temp;

    } else if (error) {
        this.error = error;
        this.record = undefined;
    }
}

  connectedCallback() {
    import(this.strlwc)
      .then(({ default: ctor }) => (this.componentConstructor = ctor))
      .catch((err) => console.log("Error importing component"));
  }
    
  }