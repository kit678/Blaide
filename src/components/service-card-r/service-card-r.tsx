import classNames from 'classnames';
import styles from './service-card-r.module.scss';

export interface ServiceCardRProps {
    className?: string;
    heading: string;
    description: string;
    img: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ServiceCardR = ({ className, heading, description, img }: ServiceCardRProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.servicecard}>
                <h1>{heading}</h1>
                <textarea defaultValue={description} />
                <img src={img} alt={heading} />
            </div>
        </div>
    );
};
