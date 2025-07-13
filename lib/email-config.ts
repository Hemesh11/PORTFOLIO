// Email service configuration
// Uncomment and configure the service you want to use

// Option 1: Resend (Recommended for Next.js)
// npm install resend
// export const emailConfig = {
//   service: 'resend',
//   apiKey: process.env.RESEND_API_KEY!,
//   from: 'noreply@yourdomain.com',
// }

// Option 2: SendGrid
// npm install @sendgrid/mail
// export const emailConfig = {
//   service: 'sendgrid',
//   apiKey: process.env.SENDGRID_API_KEY!,
//   from: 'noreply@yourdomain.com',
// }

// Option 3: Nodemailer with Gmail
// npm install nodemailer
// export const emailConfig = {
//   service: 'gmail',
//   user: process.env.GMAIL_USER!,
//   pass: process.env.GMAIL_APP_PASSWORD!,
//   from: process.env.GMAIL_USER!,
// }

// Option 4: Custom SMTP
// export const emailConfig = {
//   service: 'smtp',
//   host: process.env.SMTP_HOST!,
//   port: parseInt(process.env.SMTP_PORT!),
//   secure: process.env.SMTP_SECURE === 'true',
//   user: process.env.SMTP_USER!,
//   pass: process.env.SMTP_PASS!,
//   from: process.env.SMTP_FROM!,
// }

export const emailConfig = {
  service: "mock", // Currently using mock service
  to: "hemesh2005r@gmail.com",
}
