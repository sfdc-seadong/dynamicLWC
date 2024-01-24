public with sharing class PropertySettingsController {
    @AuraEnabled(cacheable=true)
    public static List<dynamicLwc2024__Custom_LWC_Setting__mdt>getCustomMetadata(String lwcName) {
        //potentially look into getinstance(developerName)
        //limitation on number of characters you can retrieve using getInstance()
        //or other ways to get custom metadatatypes;

        List<Custom_LWC_Setting__mdt> p = [SELECT dynamicLwc2024__Component_Name__c, dynamicLwc2024__Property_Name__c, dynamicLwc2024__Property_Value__c
             FROM dynamicLwc2024__Custom_LWC_Setting__mdt
             WHERE dynamicLwc2024__Component_Name__c =: lwcName
             WITH SECURITY_ENFORCED];
        
        return p;
    }
}