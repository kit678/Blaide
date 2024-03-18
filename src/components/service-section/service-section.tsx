import classNames from 'classnames';
import { ServiceCardR } from '../service-card-r/service-card-r';
import { ServiceCardL } from '../service-card-l/service-card-l'; // Assuming this component exists
import services from '../../assets/services.json';
import styles from './service-section.module.scss';
import { useState } from 'react';

export interface ServiceSectionProps {
    className?: string;
}

export const ServiceSection = ({ className }: ServiceSectionProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const serviceCards = services.map((service, index) => {
        const ServiceCardComponent = index % 2 === 0 ? ServiceCardL : ServiceCardR;
        return <ServiceCardComponent key={service.id} heading={service.title} description={service.description} img={service.image} />;
    });

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : serviceCards.length - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < serviceCards.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div id="servicesection" className={classNames(styles.root, className)}>
            <div className={styles.carousel}>
                {serviceCards[currentIndex]}
            </div>
            <div className={styles.carouselControls}>
                <button onClick={handlePrevClick} className={styles.carouselControlPrev}>&lt;</button>
                <button onClick={handleNextClick} className={styles.carouselControlNext}>&gt;</button>
            </div>
        </div>
    );
};
    }