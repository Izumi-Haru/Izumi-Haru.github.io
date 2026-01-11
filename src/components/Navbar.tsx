import React from 'react';
import Link from 'next/link';
import Button from './Button';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    Portfolio
                </Link>
                <nav className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/projects" className={styles.navLink}>Projects</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </nav>
                <Link href="/contact">
                    <Button variant="outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Start a Project
                    </Button>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
