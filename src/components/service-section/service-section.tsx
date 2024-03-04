import classNames from 'classnames';
import styles from './service-section.module.scss';

export interface ServiceSectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ServiceSection = ({ className }: ServiceSectionProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
