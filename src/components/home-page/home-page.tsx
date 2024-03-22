import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import styles from './home-page.module.scss';
import { ServiceSection } from '../service-section/service-section';
import { Organisations } from '../organisations/organisations';
import { Cta } from '../cta/cta';

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const imageVariants = {
  hidden: (direction: 'left' | 'right' | 'up' | 'down') => ({
    opacity: 0,
    x: direction === 'left' ? -100 : 100,
    y: direction === 'up' ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20 }
  },
};

export const HomePage = ({ className }: HomePageProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.infographic}>
                <motion.img
                    custom="up"
                    variants={imageVariants}
                    initial="hidden"
                    animate={controls}
                    ref={ref}
                    src="/images/photop/bain/bain-1-lg.svg"
                    alt="Infographic 1"
                />
                <motion.img
                    custom="left"
                    variants={imageVariants}
                    initial="hidden"
                    animate={controls}
                    ref={ref}
                    src="/images/photop/bain/bain-2-lg.svg"
                    alt="Infographic 2"
                />
            

                <div>
                    <img src="/images/photop/bain/bain-3-lg.svg" />
                </div>
                <div>
                    <img src="/images/photop/bain/bain-4-lg.svg" />
                </div>
                <div>
                    <img src="/images/photop/bain/bain-5-lg.svg" />
                </div>
            </div>
            <ServiceSection className={styles.servicesection} />
            <Organisations />
            <Cta />
        </div>
    );
};
