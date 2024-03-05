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
                <img src="/assets/logos/baruch.svg" alt="Baruch College" />
                <img src="/assets/logos/citrix.svg" alt="Citrix" />
                <img src="/assets/logos/credit-suisse-1.svg" alt="Credit Suisse" />
                <img src="/assets/logos/delta-airlines.svg" alt="Delta Airlines" />
                <img src="/assets/logos/ibm.svg" alt="IBM" />
                <img src="/assets/logos/illinois-university.svg" alt="University of Illinois" />
                <img src="/assets/logos/illinois-university-2.svg" alt="University of Illinois" />
                <img src="/assets/logos/manipal.png" alt="Manipal University" />
                <img src="/assets/logos/morgan-stanley-new.svg" alt="Morgan Stanley" />
                <img src="/assets/logos/stevens-institute-of-technology.svg" alt="Stevens Institute of Technology" />
                <img src="/assets/logos/tata-logo.svg" alt="Tata" />
            </div>
        </div>
    );
};
