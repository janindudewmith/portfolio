# Setting Up EmailJS for Contact Form - Simplified Version

## Step 1: Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Name your service (e.g., "portfolio-contact")
6. Save the service and note the **Service ID**

## Step 3: Create an Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Design your template with the following variables (make sure these match exactly):
   - `{{from_name}}` - Sender's name
   - `{{reply_to}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
4. Example template:

```
You received a new message from your portfolio website:

Name: {{from_name}}
Email: {{reply_to}}
Subject: {{subject}}

Message:
{{message}}
```

5. Save your template and note the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Code

Replace the placeholder values at the top of the Contact.tsx file:

```typescript
// IMPORTANT: Replace these with your actual EmailJS IDs
const SERVICE_ID = "YOUR_SERVICE_ID"; // e.g. service_abcdef
const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // e.g. template_123456
const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // e.g. abc123def456ghi789
```

## Debugging Tips

1. Open your browser's developer console (F12 or right-click > Inspect > Console)
2. Fill out the form and submit it
3. Check the console for any error messages
4. Verify that the IDs are correct and match your EmailJS account
5. Make sure your email service is properly configured

## Common Errors and Solutions

### "Service not found" or "Template not found"

- Double-check your SERVICE_ID and TEMPLATE_ID
- Copy them directly from the EmailJS dashboard

### "Invalid Public Key"

- Make sure your PUBLIC_KEY is correct
- Copy it directly from the EmailJS dashboard API Keys section

### CORS Errors

- These are usually temporary
- Try submitting the form again after a few minutes

### Missing Template Variables

- Make sure your form fields match the template variables:
  - `from_name` for the name field
  - `reply_to` for the email field
  - `subject` for the subject field
  - `message` for the message field

## Note on EmailJS Limits

- The free tier of EmailJS allows 200 emails per month
- If you exceed this limit, you'll need to upgrade to a paid plan
