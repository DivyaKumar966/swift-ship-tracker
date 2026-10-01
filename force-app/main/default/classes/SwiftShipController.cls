public with sharing class SwiftShipController {
    @AuraEnabled(cacheable=true)
    public static List<Shipment__c> getRecentShipments() {
        return [
            SELECT Id, Name, Source__c, Destination__c, Package_Weight__c,
                   Status__c, Expected_Delivery__c, Customer__c
            FROM Shipment__c
            ORDER BY CreatedDate DESC
            LIMIT 10
        ];
    }

    @AuraEnabled(cacheable=true)
    public static Shipment__c trackShipment(String shipmentNumber) {
        if (String.isBlank(shipmentNumber)) {
            return null;
        }

        List<Shipment__c> shipments = [
            SELECT Id, Name, Source__c, Destination__c, Package_Weight__c,
                   Status__c, Expected_Delivery__c, Customer__c
            FROM Shipment__c
            WHERE Name = :shipmentNumber
            LIMIT 1
        ];

        return shipments.isEmpty() ? null : shipments[0];
    }

    @AuraEnabled
    public static Id createShipment(
        Id customerId,
        String source,
        String destination,
        Decimal packageWeight,
        Date expectedDelivery
    ) {
        if (String.isBlank(source) || String.isBlank(destination) ||
            packageWeight == null || packageWeight <= 0) {
            throw new AuraHandledException('Please provide valid shipment details.');
        }

        Shipment__c shipment = new Shipment__c(
            Customer__c = customerId,
            Source__c = source,
            Destination__c = destination,
            Package_Weight__c = packageWeight,
            Status__c = 'Booked',
            Expected_Delivery__c = expectedDelivery
        );

        insert shipment;
        return shipment.Id;
    }
}
