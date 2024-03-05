import nodemailer from 'nodemailer';

export interface EmailServiceParams {
    query: string;
    phoneNumber: string;
    email: string;
}

const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    secure: false,
    auth: {
        user: 'test@example.com',
        pass: 'test'
    }
});

export function sendTestEmail({ query, phoneNumber, email }: EmailServiceParams): void {
    const mailOptions = {
        from: '"Test Server" <test@example.com>',
        to: email,
        subject: 'Hello from MailHog!',
        text: `Query: ${query}\nPhone Number: ${phoneNumber}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
    transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
        if (error !== null) {
            console.error('Error sending test email:', error);
        } else {
            console.log('Test email sent:', info.response);
        }
    });
}
