---
id: templates
title: Prebuilt Workflow Templates
sidebar_position: 8
---

# Prebuilt Workflow Templates

When you open a blank workflow canvas, it can feel like a lot of empty space. Templates fix that. They’re ready-made workflow blueprints you can load into an empty grid to skip setup and start building right away.

To use one, scroll to the bottom of the **Nodes** sidebar, find the **Templates** section, and click **Show**. Pick a template to automatically place its nodes onto the canvas, then adjust the details as needed.

---

## Available Templates

### SendGrid Email
Adds a **Manual Trigger** and a **SendGrid** action node.  
Enter your API key, subject, and message body, then run the workflow to start sending emails from your SendGrid account.

![alt text]({A72722E3-8049-4BDE-AC66-AC3C8D6FC060}.png)

---

### Amazon SES Email
Adds a **Manual Trigger** and an **Amazon SES** action node.  
Connect your AWS credentials, configure message details, and you’re ready to send directly from your AWS account.

![alt text]({0EA51E07-526A-4BC6-86FC-5D91DB6DE02E}.png)

---

### Mailgun Email
Adds a **Manual Trigger** and a **Mailgun** action node.  
Link your Mailgun domain and API key, fill in your message, and send test emails in seconds.

![alt text]({D018EE1E-3CBE-453E-AFF7-BF0FBF8F720A}.png)

---

### Slack Message
Adds a **Manual Trigger** and a **Slack** action node.  
Connect your Slack account via webhook or OAuth, set a message, and send it straight to a chosen channel.

![alt text]({04C689B5-7318-45CA-91E5-7EA2FF5B905B}.png)

---

### Google Sheets
Adds a **Manual Trigger** and a **Google Sheets** action node.  
Connect your Google account, map your sheet and columns, then insert or update data with one click.

![alt text]({26B228B6-9F06-4B1F-98C0-E8CED3D894B7}.png)

---

### Run Code and Send HTTP Request
Adds a **Manual Trigger**, a **Run Code** node, and an **HTTP Request** node.  
Write JavaScript logic, define your HTTP request, and instantly test the pipeline from code to external API.

![alt text]({C20ADE3B-A3FA-4489-A27B-98076F41D3EC}.png)

---

### Branch by Condition
Adds a **Manual Trigger** and a **Condition** node.  
The **true** path connects to a **SendGrid** node; the **false** path connects to **Slack**.  
Define a comparison, fill in the message details, and test conditional execution in real time.

![alt text]({ADF182B2-234A-48F9-BC3E-BEF50AFF1838}.png)

---

Templates are practical starting points that help you understand how triggers and actions interact, how data flows, and how logic branches in a workflow.  
Each one can be customized, extended, or replaced to fit your project.  

More templates will be added over time.  
Illustrations in this section show how each template appears when added to the canvas.
