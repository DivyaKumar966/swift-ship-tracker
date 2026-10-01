# VS Code ↔ Salesforce Authentication

## Install

1. Install Salesforce CLI.
2. Install VS Code.
3. Install Salesforce Extension Pack.
4. Open this folder in VS Code.

Salesforce DX projects use `sfdx-project.json` and keep Salesforce source under `force-app/main/default`.

## Login

Open VS Code Terminal:

```bash
sf org login web --alias SwiftShip --set-default
```

The browser opens. Log in to the Salesforce org and approve the CLI connection.

Verify:

```bash
sf org list
```

Open the org:

```bash
sf org open
```

## Deploy

```bash
sf project deploy start --source-dir force-app
```

## Run Apex tests

```bash
sf apex run test --tests SwiftShipControllerTest --result-format human --wait 10
```

## Retrieve metadata

If you create Flow/Agentforce configuration directly in the Salesforce Setup UI and want to bring supported metadata back into VS Code:

```bash
sf project retrieve start
```

For specific metadata:

```bash
sf project retrieve start --metadata CustomObject
```

## Key idea

VS Code does not replace Salesforce. It is the local development environment.

The connection is:

VS Code
-> Salesforce CLI authentication
-> Salesforce Org
-> Deploy/retrieve metadata
-> Test and iterate
