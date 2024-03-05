import classNames from 'classnames';
import styles from './organisations.module.scss';

export interface OrganisationsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Organisations = ({ className }: OrganisationsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h2 className={styles.heading}>
                Our team's expertise in innovation and automation has streamlined business processes, saving millions in man-hours.
            </h2>
            <div className={styles.imageCloud}>
                <img src="src/assets/logos/logo1.png" alt="Logo 1" />
                <img src="src/assets/logos/logo2.png" alt="Logo 2" />
                <img src="src/assets/logos/logo3.png" alt="Logo 3" />
                <img src="src/assets/logos/logo4.png" alt="Logo 4" />
                <img src="src/assets/logos/logo5.png" alt="Logo 5" />
            </div>
        </div>
    );
};
