# Agentforce + Prompt Builder

Agentforce configuration is org-specific and should be created in the Salesforce Setup UI after Agentforce is enabled/licensed in the org.

## Agent

Create an Agentforce agent such as:

**Name:** Swift Ship Assistant

Purpose:
- Help customers book shipments.
- Track shipments.
- Explain shipment status.
- Help with delivery preferences.

## Topics / intents

Recommended topics:
1. Shipment Booking
2. Shipment Tracking
3. Delivery Preference
4. General Shipment Help

## Actions

Recommended actions:
- Find shipment by Shipment Number.
- Create shipment.
- Find tracking record.
- Update delivery preference.

These actions can be implemented using Flow/Apex actions according to the org's enabled Agentforce features.

## Prompt Builder

Create a prompt template for shipment status responses.

Example prompt:

You are Swift Ship Assistant, a shipment support assistant.

Use only the shipment and tracking information provided in the context.

Return:
- Shipment number
- Current status
- Current location when available
- Expected delivery date when available

Do not expose information belonging to another customer.
If required information is missing, ask for the shipment number.
Keep the answer concise and helpful.

## Important

Do not hard-code Salesforce usernames, passwords, access tokens or secrets in this project.

Agentforce and Prompt Builder availability/configuration varies by Salesforce org and license, so the final agent/action setup must be completed inside the target Salesforce org.
