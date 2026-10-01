# Flow Builder — Swift Ship Tracker

Create a **Record-Triggered Flow** on `Shipment__c`.

## Flow 1: Create Tracking Record

Trigger:
- Object: Shipment
- When: A record is created
- Run: After save

Steps:
1. Get/Create the related Shipment record.
2. Create a Tracking__c record.
3. Shipment__c = triggering Shipment Id.
4. Current_Location__c = Source__c.
5. Status__c = Booked.
6. Last_Updated__c = current date/time.
7. Save and activate the flow.

## Flow 2: Status Synchronization

Trigger:
- Object: Shipment
- When a record is updated
- Run: After save

Decision:
- Status = Out for Delivery -> Tracking status = Out for Delivery
- Status = Delivered -> Tracking status = Delivered
- Status = Cancelled -> optionally create an exception/update status based on your business rule.

## Demo

Create a Shipment from the LWC. Then show the Flow automatically creating/updating Tracking data.

This is the part that demonstrates "process automation".
