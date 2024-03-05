const nodemailer = require('nodemailer');

// Create a transporter for nodemailer using MailHog's default SMTP settings
const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    secure: false, // MailHog does not require a secure connection
    auth: {
        user: 'test@example.com', // MailHog does not require authentication, but you can set it if needed
        pass: 'test' // MailHog does not require authentication, but you can set it if needed
    }
});

// Function to send a test email
function sendTestEmail() {
    // Email options
    const mailOptions = {
        from: '"Test Server" <test@example.com>', // Sender address
        to: 'recipient@example.com', // List of recipients
        subject: 'Hello from MailHog!', // Subject line
        text: 'This is a test email sent using MailHog.', // Plain text body
        html: '<b>This is a test email sent using MailHog.</b>' // HTML body
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending test email:', error);
        } else {
            console.log('Test email sent:', info.response);
        }
    });
}

// Export the sendTestEmail function
module.exports = { sendTestEmail };
