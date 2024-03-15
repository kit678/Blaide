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
            <h2 className={styles.heading}>TRUSTED BY</h2>
            <div className={styles.imageCloud}>
                <img src="images/logos/citrix.svg" alt="Citrix" />
                <img src="images/logos/morgan.svg" alt="Morgan Stanley" />
                <img src="images/logos/tata-logo.svg" alt="Tata" />
                <img src="images/logos/credit-suisse-1.svg" alt="Credit Suisse" />
                <img src="images/logos/delta-airlines.svg" alt="Delta Airlines" />
                <img src="images/logos/ibm.svg" alt="IBM" />
                <img src="images/logos/illinois-university-2.svg" alt="University of Illinois" />
                <img src="images/logos/manipal.webp" alt="Manipal University" />
                <img
                    src="images/logos/stevens-institute-of-technology.svg"
                    alt="Stevens Institute of Technology"
                />
                <img src="images/logos/baruch.svg" alt="Baruch College" />
            </div>
        </div>
    );
};
