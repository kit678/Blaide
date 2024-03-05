import classNames from 'classnames';
import { ServiceCardR } from '../service-card-r/service-card-r';
import { ServiceCardL } from '../service-card-l/service-card-l'; // Assuming this component exists
import services from '../../assets/services.json';
import styles from './service-section.module.scss';

export interface ServiceSectionProps {
    className?: string;
}

export const ServiceSection = ({ className }: ServiceSectionProps) => {
    const serviceCards = services.map(service => {
        const ServiceCardComponent = service.alignment === 'right' ? ServiceCardR : ServiceCardL;
        return (
            <ServiceCardComponent
                key={service.id}
                heading={service.title}
                description={service.description}
                img={service.image}
            />
        );
    });

    return (
        <div className={classNames(styles.root, className)}>
            {serviceCards}
        </div>
    );
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ServiceSection = ({ className }: ServiceSectionProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
