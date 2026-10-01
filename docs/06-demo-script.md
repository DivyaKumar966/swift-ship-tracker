# 5-Minute Demo Script

## 1. Start

"Swift Ship Tracker is a Salesforce-powered shipment management system."

## 2. Explain data model

Show:
Customer -> Shipment -> Tracking
Shipment -> Delivery Preference

## 3. Show frontend

Open the Salesforce Lightning App Page containing:
- Swift Ship Dashboard
- Shipment Booking
- Shipment Tracking
- Swift Ship Assistant

## 4. Book

Enter:
Chennai -> Coimbatore
5 kg

Click Book Shipment.

## 5. Automation

Show the Salesforce Flow and explain that the new shipment can automatically create/update tracking information.

## 6. Track

Enter the shipment number and retrieve it from Salesforce through Apex.

## 7. Agentforce

Open the configured Agentforce assistant and ask:

"Where is my shipment SHP-00001?"

Then explain that Agentforce uses Salesforce data/actions and Prompt Builder controls the response instructions.

## 8. Finish

"VS Code is used for local Salesforce development and deployment; Salesforce provides the data, security, automation and AI platform."
