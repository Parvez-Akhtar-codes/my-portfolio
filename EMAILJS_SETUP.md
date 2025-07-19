# EmailJS Setup Guide for Contact Form

Your contact form is now configured to send emails directly to your inbox! Follow these steps to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account: `parvezakhtar310@gmail.com`
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `abc123xyz`)

## Step 5: Update Contact Component
Replace these placeholders in `src/components/Contact.tsx`:

```typescript
const result = await emailjs.sendForm(
  'service_abc123',     // Your Service ID
  'template_xyz789',    // Your Template ID
  form,
  'abc123xyz'          // Your Public Key
)
```

## Step 6: Test the Form
1. Save your changes
2. Start your development server: `npm run dev`
3. Go to the contact page
4. Fill out and submit the form
5. Check your email inbox!

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Perfect for portfolio websites

## Alternative: Formspree (Even Easier)
If you prefer a simpler setup:
1. Go to [formspree.io](https://formspree.io)
2. Create account and get your form endpoint
3. Update the form action to point to your Formspree endpoint

Your contact form will now send emails directly to your inbox without opening any email client!
