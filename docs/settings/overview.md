---
id: overview
title: Settings Overview
sidebar_position: 1
---

# Settings Overview

The **Settings** area controls everything about your workspace — from billing and team access to API keys, integrations, and privacy preferences.  
Each section manages a specific part of your account or environment.

---

## 1. Plan & Billing

Shows your current subscription tier and usage limits.  
You can:
- View your current **plan type** (Solo or Workspace).  
- Manage your **payment method** and view invoices.  

Billing changes take effect immediately and are reflected in your next billing cycle.

---

## 2. Members *(Workspace plan required)*

Used to invite and manage users in your workspace.  
You can:
- **Invite members** by email.  
- Assign **roles** such as *Owner*, *Admin*, *User*, or *Viewer*.  
- Remove or deactivate members.  
- View pending invitations and their status.  

Requires an active **Workspace plan** and supports up to three members per workspace.  
Each member’s role controls what parts of the workspace they can access or modify.

---

## 3. Engine

Controls how workflows execute.  
This section includes:
- **Active workflow concurrency** — how many workflows can run at once. (Workspace plans allow more than one.)  
- **Queue controls** to cancel all pending runs.  
- **Egress Whitelist** to restrict HTTP Request nodes to approved domains.  

---

## 4. Logs

Displays workflow and event history for your workspace.  
You can:
- View **Executed Runs** to trace how each workflow executed.  
- Inspect the **Dead-Letter Queue** for runs that failed to complete.  
- Review **Blocked Egress** for HTTP Requests to non-whitelisted URLs.  
- Check **Change History** for before-and-after workflow edits.  

---

## 5. Webhooks

Displays webhook details for workflows that use a Webhook Trigger.  
You can:
- Copy webhook URLs.  
- **Regenerate tokens** if a URL is exposed.  
- View implementation examples for using each webhook.  
- Optionally configure **HMAC verification** for higher security (Workspace plan required).  

---

## 6. Secrets & API Keys

Stores encrypted credentials used by workflows.  
You can:
- Add new **secrets** (for example, API tokens or connection keys) for use in action nodes.  
- Rotate or delete existing credentials.  
- Generate **personal API keys** for programmatic access to DSentr.  

Secrets are stored securely and never exposed in plain text.  
Only Owners and Admins can view or modify them.

---

## 7. Privacy

Allows you to opt out of DSentr’s template suggestion feature.  
When disabled, your workflows will not be analyzed to generate public or suggested workflow templates.  
Disable this if your automations contain proprietary logic or confidential workflows.

---

## 8. Integrations *(Workspace plan required)*

Displays all available built-in integrations (Slack, Google, Microsoft, etc.) and any OAuth connections.  
You can:
- Connect or disconnect linked accounts.  
- View authorization scopes.  
- Refresh tokens when needed (DSentr attempts to refresh automatically).  
- Share OAuth credentials with other workspace members for team-wide use.  

---

## 9. Workflows

Lists all workflows in your workspace and allows you to delete ones that are no longer needed.  
This is also where you can verify workflow status and last modification time.

---

## 10. Danger Zone

Used for permanent account deletion.  
Closing your DSentr account is irreversible and has the following effects:

**What will be deleted**
- Workflow run history, execution logs, and queued jobs.  
- Stored API keys, personal secrets, and workspace credential caches.  
- OAuth tokens and workspace integrations tied to your account.  
- Pending invitations and member audit entries.  
- Webhook replay buffers and scheduling metadata.  

**Impact on workspace members (Workspace plan)**  
- Collaborators lose access to workflows owned by this workspace.  
- Active and scheduled automations stop immediately.  
- Shared workspace credentials and integrations are revoked.  
- Active subscriptions tied to this user are cancelled.  

> DSentr does not provide pro-rata refunds for early account closures.

---

The **Settings** area centralizes everything needed to manage your workspace — users, billing, integrations, and data — giving you complete administrative control without leaving the app.
