import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
    return (
        <section id={id} className={`${styles.section} ${className}`}>
            {children}
        </section>
    );
};

export default Section;
