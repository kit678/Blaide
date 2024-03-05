import React, { useState, FormEvent } from 'react';
import classNames from 'classnames';
import styles from './cta.module.scss';

// Removed the placeholder sendEmail function and imported sendTestEmail from emailService.js

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


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('Query:', query, 'Phone Number:', phoneNumber, 'Email:', email);
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
                    type="text"
                    placeholder="Your phone number (optional)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};
