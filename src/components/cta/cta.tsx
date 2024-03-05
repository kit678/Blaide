import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './cta.module.scss';

function sendEmail(data) {
    // Placeholder function. Replace with an API call to your backend service.
    console.log('Sending email with data:', data);
    // The actual implementation would involve sending a POST request to your server.
}

export interface CtaProps {
    className?: string;
}


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Cta = ({ className }: CtaProps) => {
    const [query, setQuery] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        sendEmail({ query, phoneNumber, email });
    };

    return (
        <div className={classNames(styles.root, className)}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <textarea
                    required
                    placeholder="Your query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Your phone number (optional)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

