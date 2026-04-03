import React, { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // ページの読み込み完了の代わりとして、一定時間（例：1.5秒）後に消える
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.box}>
        <div className={styles.liquidLoader}>
          <div className={styles.liquidWave}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
