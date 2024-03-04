import React from 'react';
import classNames from 'classnames';
import styles from './service-section.module.scss';
import { ServiceCard } from '../service-card/service-card';
import servicesData from '../../assets/services.json'; // Adjust the path as necessary to your JSON data

export interface ServiceSectionProps {
    className?: string;
}

export const ServiceSection = ({ className }: ServiceSectionProps) => {
    return (
        <div className={classNames(styles.serviceSection, className)}>
            {servicesData.map((service, index) => (
                <ServiceCard
                    key={index}
                    className={classNames({[styles.leftText]: service.alignment === 'left', [styles.rightText]: service.alignment === 'right'})}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    alignment={service.alignment as "left" | "right"}
                />
            ))}
        </div>
    );
};
