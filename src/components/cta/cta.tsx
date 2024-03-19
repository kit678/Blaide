import React, { useRef, FormEvent } from 'react';
import classNames from 'classnames';
import styles from './cta.module.scss';
import emailjs from '@emailjs/browser';

import homePageStyles from '../home-page/home-page.module.scss';

export interface CtaProps {
    className?: string;
}

export const Cta = ({ className }: CtaProps) => {
    // Specify the type of the element that useRef is referring to
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_ewo010m', 'template_ns2g241', form.current, 'U1nb15Gy75hDrL0Qj')
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <div className={classNames(styles.root, className)}>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <input
                    type="text"
                    name="user_name"
                    className={styles.textarea}
                    placeholder="Name"
                />
                <input
                    type="email"
                    name="user_email"
                    className={styles.textarea}
                    placeholder="Email"
                />
                <input
                    type="phone"
                    name="user_phone"
                    className={styles.textarea}
                    placeholder="Phone"
                />
                <textarea
                    name="message"
                    className={styles.textarea}
                    placeholder="How can we help?"
                />
                <button
                    type="submit"
                    className={classNames(styles.button, homePageStyles.button)}
                    value="Send"> Submit</button>
                    
                    
            </form>
        </div>
    );
};
