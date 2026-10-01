# Swift Ship Tracker

A Salesforce-based shipment management project for Nam Mudhalvan.

## Project concept

Swift Ship Tracker connects a customer-facing Lightning Web Component (LWC) experience with Salesforce data, automation, security, Agentforce and Prompt Builder.

### Main concepts

1. Salesforce Data Modelling
2. Salesforce Data Security
3. Lightning Web Components
4. Flow Builder / Process Automation
5. Agentforce
6. Prompt Builder
7. VS Code + Salesforce CLI authentication and deployment

## Architecture

Customer
  -> LWC UI
  -> Apex Controller
  -> Salesforce Custom Objects
  -> Flow Automation
  -> Agentforce / Prompt Builder

## Objects

- Customer__c
- Shipment__c
- Tracking__c
- Delivery_Preference__c

Relationships:
Customer -> Shipment -> Tracking
Shipment -> Delivery Preference

## Recommended setup

### 1. Install

- Visual Studio Code
- Salesforce Extension Pack
- Salesforce CLI (`sf`)

### 2. Authenticate Salesforce from VS Code terminal

```bash
sf org login web --alias SwiftShip --set-default
```

A browser opens. Sign in to the Salesforce org and authorize the CLI.

Check authentication:

```bash
sf org list
```

### 3. Deploy the project

```bash
sf project deploy start --source-dir force-app
```

If deployment reports a validation issue because your org has a different API version, use the API version supported by your org in `sfdx-project.json`.

### 4. Open the org

```bash
sf org open
```

### 5. Create sample records

The easiest route is to create records from the Salesforce UI after deployment. A sample data guide is available at:

`docs/05-sample-data.md`

## Important Salesforce setup after deployment

Some Salesforce configuration is intentionally documented rather than hard-coded because it depends on the user's Salesforce edition/org:

- Flow activation
- Agentforce agent creation/activation
- Prompt Builder configuration
- Experience Cloud / external customer access, if required
- Sharing rules and external-user security

See `docs/` for step-by-step instructions.

## LWC components

### swiftShipDashboard
Customer summary dashboard.

### shipmentBooking
Create a new shipment.

### shipmentTracking
Track a shipment by shipment number.

### swiftShipAssistant
Conversational UI placeholder for the Agentforce integration. The actual Agentforce action/topic configuration is org-specific and is documented in `docs/04-agentforce-and-prompt-builder.md`.

## Demo flow

1. Create customer.
2. Create shipment.
3. Create/update tracking information.
4. Open Swift Ship Dashboard.
5. Search shipment from the tracking component.
6. Use the Agentforce configuration described in the docs.
7. Demonstrate Flow automation after activating the documented flow.

## Project presentation line

"Swift Ship Tracker is a Salesforce-powered shipment management solution that combines structured shipment data, automated workflows, Lightning Web Components, and an Agentforce conversational assistant to provide booking, tracking and delivery-preference services."
