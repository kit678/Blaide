import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './home-page.module.scss';
import { ServiceSection } from '../service-section/service-section';
import { Organisations } from '../organisations/organisations';
import { Cta } from '../cta/cta';

import videoBackground from '../../assets/background.mp4'; // Adjust the import path as necessary
export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <video autoPlay loop muted playsInline className={styles.videoBackground}>
                <source src={videoBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={styles.herodiv}
            >
                <button className={styles.button}>Learn more</button>
            </motion.div>
            <ServiceSection className={styles.servicesection} />
            <Organisations />
            <Cta />
        </div>
    );
};
