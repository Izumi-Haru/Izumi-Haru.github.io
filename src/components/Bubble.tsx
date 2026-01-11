import React from 'react';
import styles from './Bubble.module.css';

interface BubbleProps {
    text: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
}

const Bubble: React.FC<BubbleProps> = ({ text, top, left, right, bottom }) => {
    return (
        <div className={styles.bubble} style={{ top, left, right, bottom }}>
            {text}
        </div>
    );
};

export default Bubble;
