import classNames from 'classnames';
import styles from './service-details-modal.module.scss';

export interface ServiceDetailsModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    heading: string;
    description: string;
    img: string;
}

export const ServiceDetailsModal = ({
    className,
    isOpen,
    onClose,
    heading,
    description,
    img,
}: ServiceDetailsModalProps) => {
    if (!isOpen) return null;

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <img src={img} alt={heading} />
                <h1>{heading}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};
