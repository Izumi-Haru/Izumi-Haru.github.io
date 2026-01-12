"use client";

import React, { useState } from 'react';
import MainMenu from '@/components/MainMenu';
import RoomDisplay from '@/components/RoomDisplay';
import SubMenuContent from '@/components/SubMenuContent';
import styles from './page.module.css';
import menuStyles from '@/components/MainMenu.module.css';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<'profile' | 'sns' | null>(null);
  const [isCatsOpen, setIsCatsOpen] = useState(false);

  const handleProfileSelect = (imagePath: string | null) => {
    setSelectedImage(imagePath);
  };

  const handleCloseProfile = () => {
    setSelectedImage(null);
  };

  const handleItemSelect = (action?: () => void) => {
    if (action) action();
  };

  const handleCatsToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCatsOpen(!isCatsOpen);
  };

  return (
    <main className={styles.mainContainer}>
      <aside className={styles.leftColumn}>
        <MainMenu
          onProfileSelect={handleProfileSelect}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          isCatsOpen={isCatsOpen}
          setIsCatsOpen={setIsCatsOpen}
        />
      </aside>
      <section className={styles.rightColumn}>
        <div className={styles.roomFrame}>
          <RoomDisplay overlayImage={selectedImage} onClose={handleCloseProfile} />
        </div>

        {/* Mobile Submenu Content */}
        <div className={styles.mobileOnly}>
          {activeMenu && (
            <div className={menuStyles.mobileSubmenuContainer}>
              <SubMenuContent
                type={activeMenu}
                isCatsOpen={isCatsOpen}
                onCatsToggle={handleCatsToggle}
                onItemSelect={handleItemSelect}
                onProfileSelect={handleProfileSelect}
                isMobile={true}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
