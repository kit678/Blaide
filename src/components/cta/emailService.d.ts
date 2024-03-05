declare module 'emailService' {
    export interface EmailData {
        query: string;
        phoneNumber?: string;
        email: string;
    }

    export function sendTestEmail(data: EmailData): void;
}
