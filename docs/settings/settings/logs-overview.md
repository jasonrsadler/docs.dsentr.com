---
id: logs-overview
title: Logs Overview
sidebar_position: 4
---

# Logs Overview

The **Logs** section provides insight into your workspace’s workflow activity.  
It tracks every execution, error, blocked request, and workflow modification — giving you visibility into what ran, what failed, and what changed over time.

Logs are divided into four views:

- **Executed Runs**  
- **Dead-Letter Queue**  
- **Blocked Egress**  
- **Change History**

Each view focuses on a different aspect of your workspace’s runtime or configuration history.

---

## 1. Executed Runs

Shows all workflow runs that have executed successfully or partially completed.  
Each run entry includes the workflow name, start time, duration, and final status.

Selecting a run opens a detailed view showing:
- The **flow path** taken during execution.  
- Each **node’s input and output** values.  
- Any **errors or warnings** encountered along the way.

Use this view to understand how your workflows behave in practice and to confirm that data flows correctly between nodes.

---

## 2. Dead-Letter Queue

Displays workflows that **failed** to execute successfully.  
Each entry provides the workflow name, run time, and a brief reason for failure — such as node configuration errors, timeouts, or connection issues.

The Dead-Letter Queue helps identify recurring issues or misconfigured nodes that prevent workflows from completing.

---

## 3. Blocked Egress

Lists all workflow runs that attempted to send an HTTP Request to a domain **not included** in your Engine tab’s Egress Whitelist.  
Each entry shows the workflow name, attempted URL, and timestamp of the blocked request.

Blocked egress entries indicate that an HTTP Request node tried to access a restricted or unapproved destination.  
Review these logs when debugging failed HTTP calls or updating your whitelist.

---

## 4. Change History

Provides a chronological record of changes made to your workflows.  
Each entry includes:
- The **workflow name**.  
- The **user** who made the change.  
- A **before-and-after comparison** of the modification.  
- The **timestamp** of the change.

This view makes it easy to track workflow evolution and audit updates over time.

---

## 5. Best practices

- Review **Executed Runs** regularly to confirm workflows are running as expected.  
- Monitor the **Dead-Letter Queue** for persistent errors that need fixing.  
- Check **Blocked Egress** after adding new HTTP Request nodes or changing your whitelist.  
- Use **Change History** as part of your internal review or version control process.  

---

The **Logs** section is your workspace’s activity record — showing exactly what ran, what failed, and what changed, so you can maintain reliability and accountability across all workflows.
