# Quick Contact Form Setup - Formspree (2 Minutes!)

Your contact form now uses Formspree with a mailto fallback. Super simple setup:

## Option 1: Formspree (Recommended - 2 minutes)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a new form

### Step 2: Get Your Form Endpoint
1. In Formspree dashboard, create a new form
2. Set the email to: `parvezakhtar310@gmail.com`
3. Copy your form ID (looks like: `xpznqkyz`)

### Step 3: Update Contact Form
Replace `YOUR_FORM_ID` in `src/components/Contact.tsx` with your actual form ID:

```typescript
const response = await fetch('https://formspree.io/f/xpznqkyz', {
```

### Step 4: Test It!
- Save the file
- Go to your contact form
- Send a test message
- Check your email!

## Option 2: Current Fallback (Works Now!)
If Formspree fails, the form automatically:
- Opens your visitor's email client
- Pre-fills with their message
- Sends directly to your email

## Free Plan (Perfect for Portfolio)
- 50 submissions per month
- No setup complexity
- Instant delivery

**That's it! Your contact form will work immediately once you add your Formspree form ID.**
