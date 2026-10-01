# Swift Ship Tracker — Architecture

## Frontend

Lightning Web Components use:
- HTML for structure
- CSS for design
- JavaScript for interaction

Components:
- `swiftShipDashboard`
- `shipmentBooking`
- `shipmentTracking`
- `swiftShipAssistant`

## Salesforce platform

### Data model

Customer__c
  -> Shipment__c
     -> Tracking__c
     -> Delivery_Preference__c

### Automation

Flow Builder should be used for:
1. When a Shipment is created, create a Tracking record with status `Booked`.
2. When Shipment Status changes to `Out for Delivery`, update the related Tracking record.
3. When Shipment Status becomes `Delivered`, update Tracking status to `Delivered`.

### Security

The project uses private sharing on the custom objects and a permission set. In an org with external/customer users, configure sharing rules or Experience Cloud sharing carefully so a customer can access only their own shipment records.

## Why Salesforce connection?

Salesforce is not only being used as a database. It is the platform that provides:
- Data model and record relationships
- Access/security controls
- Flow automation
- Agentforce
- Prompt Builder
- Deployment and metadata management

VS Code is the development workspace; Salesforce is the target platform/org.
