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
        <div id="servicesection" className={classNames(styles.root, className)}>
            {serviceCards}
        </div>
    );
    }