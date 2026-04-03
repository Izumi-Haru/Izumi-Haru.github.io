"use client";

import React from 'react';
import Image from 'next/image';
import styles from './MainMenu.module.css';

interface MainMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  onItemSelect: (action?: () => void) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  onItemSelect
}) => {
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onItemSelect(); // メニューを閉じるなどの処理
  };

  return (
    <>
      {/* 背景オーバーレイ */}
      <div 
        className={`${styles.menuOverlay} ${isMenuOpen ? styles.overlayVisible : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      <div className={styles.menuWrapper}>
        {/* 右上のカプセル型ボタン */}
        <button className={styles.toggleButton} onClick={handleToggleMenu}>
          <Image src="/cat2.png" alt="cat" width={24} height={24} className={styles.toggleIcon} />
          <span className={styles.toggleText}>{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
        </button>

        {/* ドロップダウンメニューパネル */}
        <div className={`${styles.dropdownPanel} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.logoTitle}>
            <span className={styles.logoText}>MENU</span>
          </div>

          <ul className={styles.mainList}>
            {/* Profile Section */}
            <li className={styles.listItem}>
              <button className={styles.itemButton} onClick={() => handleScrollTo('profile')}>
                <Image src="/cat2.png" alt="cat" width={20} height={20} className={styles.itemIcon} />
                PROFILE
              </button>
            </li>

            {/* Game Log Section */}
            <li className={styles.listItem}>
              <button className={styles.itemButton} onClick={() => handleScrollTo('game-log')}>
                <Image src="/cat2.png" alt="cat" width={20} height={20} className={styles.itemIcon} />
                GAME LOG
              </button>
            </li>

            {/* SNS Section */}
            <li className={styles.listItem}>
              <button className={styles.itemButton} onClick={() => handleScrollTo('sns')}>
                <Image src="/cat2.png" alt="cat" width={20} height={20} className={styles.itemIcon} />
                SNS
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
