# Setting Up Formspree for Contact Form

## Step 1: Create a Formspree Account

1. Go to [formspree.io](https://formspree.io/) and sign up for a free account
2. After signing in, click on "New Form" to create a form
3. Give your form a name (e.g., "Portfolio Contact Form")
4. Choose a form type (recommended: "Contact Form")
5. Click "Create Form"

## Step 2: Get Your Form ID

1. After creating your form, you'll be given a form ID (it will look something like "xzblwpjl")
2. Copy this form ID - you'll need it for your code

## Step 3: Update Your Contact Component

1. Open the `Contact.tsx` file in your project
2. Look for this line:
   ```tsx
   const FORM_ID = "mwpblpay";
   ```
3. Replace `"mwpblpay"` with your own form ID that you copied from Formspree

## Step 4: Test Your Form

1. Start your development server (if it's not already running) with `npm run dev`
2. Navigate to the contact form section of your portfolio website
3. Fill out the form with test data and submit it
4. You should be redirected to a success page or back to your website
5. Check your Formspree dashboard to see if the submission was received
6. You should also receive a notification email from Formspree

## Important Notes

- The free tier of Formspree allows up to 50 submissions per month
- You can upgrade to a paid plan if you need more submissions
- The current implementation uses a simple HTML form approach which is more reliable than JavaScript-based solutions
- The form includes a honeypot field (`_gotcha`) to help prevent spam submissions

## Troubleshooting

If your form is not working:

1. Check that you've correctly entered your form ID in the code
2. Make sure you're using the correct format for the Formspree URL (https://formspree.io/f/YOUR_FORM_ID)
3. Try disabling any ad blockers or privacy extensions that might be blocking the form submission
4. Check your browser's developer console for any errors during form submission
5. Verify your form is working by testing it in an incognito/private browsing window

For more help, consult the [official Formspree documentation](https://help.formspree.io/).
