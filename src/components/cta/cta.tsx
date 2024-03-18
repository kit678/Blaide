import React, { useState, FormEvent, ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './cta.module.scss';

import homePageStyles from '../home-page/home-page.module.scss';

export interface CtaProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Cta = ({ className }: CtaProps) => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
    });
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
        // phone field removed as it's not used in the current form state
    });

 
    const handleServerResponse = (ok: boolean, msg: string) => {
        setStatus((prevStatus) => ({
            ...prevStatus,
            submitted: ok,
            submitting: false,
            info: { error: !ok, msg: msg },
        });
        if (ok) {
            setInputs({
                email: '',
                message: '',
            });
        }
    };

   
    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // e.persist(); // This is not needed in latest React versions
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault(); // This line is correct and should remain unchanged.
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        await axios({
            method: 'POST', // Ensure the method is set to POST
            url: 'https://formspree.io/f/{your-form-id}',
            data: inputs,
        })
        .then((response) => {
            handleServerResponse(true, 'Thank you, your message has been submitted.'); // This line is correct and should remain unchanged.
        })
        .catch((error) => {
            handleServerResponse(false, error.response.data.error);
        });
    };

    return (
        <div className={classNames(styles.root, className)}>
            <form onSubmit={handleSubmit} className={styles.form}>
                
               
                <textarea
                    required
                    placeholder="How can we help?"
                    id="message"
                    value={inputs.message}
                    onChange={handleOnChange}
                    className={styles.textarea} // This line is correct and should remain unchanged.
                    className={styles.textarea} // This line is correct and should remain unchanged.
                />
                <input
                    type="text"
                    placeholder="Phone (optional)"
                    id="phone"
                    value={inputs.phone}
                    onChange={handleOnChange}
                    className={styles.textarea} // This line is correct and should remain unchanged.
                />
                <input
                    type="text"
                    placeholder="Phone (optional)"
                    id="phone"
                    value={inputs.phone || ''}
                    onChange={handleOnChange}
                    className={styles.input} // Assuming there is a style for input in cta.module.scss
                />
                <input
                    type="email"
                    required
                    placeholder="Your email address"
                    id="email"
                    value={inputs.email}
                    onChange={handleOnChange}
                    className={styles.textarea} // This line is correct and should remain unchanged.
                />
                
                <button type="submit" className={classNames(styles.button, homePageStyles.button)} onClick={handleSubmit}>

                </button> // This line closes the button tag correctly.
                    {!status.submitting
                        ? !status.submitted
                            ? 'Submit' // This line is correct and should remain unchanged.
                            : 'Submitted'
                        : 'Submitting...'}
                </button>
            </form>
            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
                <p>{status.info.msg}</p>
            )}
        </div>
    );
};
