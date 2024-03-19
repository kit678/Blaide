import classNames from 'classnames';
import styles from './footer.module.scss';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as TwitterxIcon } from '../../assets/twitterx.svg';
import { ReactComponent as DiscordIcon } from '../../assets/discord.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';
import { ReactComponent as MediumIcon } from '../../assets/medium.svg';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.details}>
                <div>Contact: info@blaidelabs.com Phone:(929) 228 7526</div>
            </div>
            <div className={styles.social}>
                <a href="/">
                    <TwitterxIcon className={styles.icon} />
                </a>
                <a href="/">
                    <FacebookIcon className={styles.icon} />
                </a>
                <a href="/">
                    <DiscordIcon className={styles.icon} />
                </a>
                <a href="/">
                    <YoutubeIcon className={styles.icon} />
                </a>
                <a href="/">
                    <MediumIcon className={styles.icon} />
                </a>
                <a href="/">
                    <GithubIcon className={styles.icon} />
                </a>
            </div>
        </div>
    );
};
