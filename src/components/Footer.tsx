import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} My Personal Website. All rights reserved.</p>
                <div className={styles.links}>
                    <a href="#" className={styles.link}>Twitter</a>
                    <a href="#" className={styles.link}>GitHub</a>
                    <a href="#" className={styles.link}>LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
