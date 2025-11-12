---
title: Overview
sidebar_position: 5
---

# Action Nodes

Action nodes are the components in DSentr workflows that **perform tasks**—sending messages, making API calls, writing to databases, updating spreadsheets, or anything else that happens *after* a trigger fires.  
They are what make a workflow do real work.

Each action node integrates with a specific service or function (for example, Slack, SendGrid, or HTTP Request). You can chain multiple actions together to build complex automations.

---

## How Action Nodes Work

When a workflow runs:
1. The **trigger node** starts the execution.
2. The workflow moves along connected **edges** until it reaches an action node.
3. The action node processes input data, performs its configured task, and passes results downstream.

Every action node defines:
- **Inputs** – Data received from previous nodes (for example, message text, email recipient, or spreadsheet values).  
- **Execution logic** – The actual API call or operation that runs.  
- **Outputs** – Data made available to subsequent nodes (like an API response or a status code).

---

## Authentication

Some action nodes require authentication to connect with external systems.  
They use **Secrets & API Keys** or **OAuth Integrations**, depending on the provider.  
When configuring such a node, you’ll see a **Credentials** dropdown to select an existing credential or create a new one directly from the node editor.

---

## Error Handling

If an action node fails—due to invalid credentials, API timeouts, or bad input—DSentr marks that node’s step as **failed** and logs the error in the workflow’s execution history.  
Failures don’t affect unrelated workflows; they’re isolated to that run.

You can inspect the run’s logs under **Runs → Details** to see each node’s input, output, and any returned error messages.

---

## Available Action Nodes

Action nodes cover both general-purpose and service-specific operations.  
Some of the most common include:

- **HTTP Request** – Send custom HTTP requests to external APIs.  
- **SendGrid Email** – Send transactional emails through SendGrid.  
- **Mailgun Email** – Deliver messages using your Mailgun domain.  
- **Amazon SES Email** – Send emails through AWS Simple Email Service.  
- **Slack Message** – Post formatted messages to Slack channels.  
- **Microsoft Teams Message** – Send notifications to Teams channels.  
- **Google Sheets** – Insert or update rows in a connected spreadsheet.  
- **Run Code** – Execute JavaScript inline within the workflow.  

Each of these is documented separately with configuration fields, data mappings, and example use cases.

---

Action nodes form the backbone of automation in DSentr.  
They let you transform data, communicate with other systems, and build powerful end-to-end processes without writing infrastructure code.
