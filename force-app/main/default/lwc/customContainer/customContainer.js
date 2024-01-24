import { LightningElement, api, wire } from "lwc";

export default class CustomContainer extends LightningElement {
    @api strLWC1 = "c/genericPlaceholder";
   
    @api strLWC2 = "c/genericPlaceholder";

    @api strLWC3 = "c/genericPlaceholder";
    @api recordId;
}
