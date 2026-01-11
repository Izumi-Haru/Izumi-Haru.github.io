import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    className = '',
    children,
    ...props
}) => {
    const variantClass = styles[variant];
    return (
        <button
            className={`${styles.button} ${variantClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
