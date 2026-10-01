@IsTest
private class SwiftShipControllerTest {
    @IsTest
    static void testShipmentFlow() {
        Customer__c customer = new Customer__c(
            Name = 'Demo Customer',
            Email__c = 'demo@example.com',
            Phone__c = '9876543210'
        );
        insert customer;

        Test.startTest();
        Id shipmentId = SwiftShipController.createShipment(
            customer.Id,
            'Chennai',
            'Coimbatore',
            5,
            Date.today().addDays(2)
        );
        Test.stopTest();

        System.assertNotEquals(null, shipmentId);

        Shipment__c shipment = [
            SELECT Id, Name, Status__c, Source__c, Destination__c
            FROM Shipment__c
            WHERE Id = :shipmentId
        ];

        System.assertEquals('Booked', shipment.Status__c);
        System.assertEquals('Chennai', shipment.Source__c);
        System.assertEquals('Coimbatore', shipment.Destination__c);
    }

    @IsTest
    static void testTrackShipment() {
        Customer__c customer = new Customer__c(Name='Tracking Customer');
        insert customer;

        Shipment__c shipment = new Shipment__c(
            Customer__c = customer.Id,
            Source__c = 'Salem',
            Destination__c = 'Chennai',
            Package_Weight__c = 2,
            Status__c = 'In Transit',
            Expected_Delivery__c = Date.today().addDays(1)
        );
        insert shipment;

        Test.startTest();
        Shipment__c result = SwiftShipController.trackShipment(shipment.Name);
        Test.stopTest();

        System.assertEquals(shipment.Id, result.Id);
    }
}
