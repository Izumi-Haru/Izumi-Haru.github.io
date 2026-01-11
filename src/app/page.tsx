"use client";

import React from 'react';
import MainMenu from '@/components/MainMenu';
import RoomDisplay from '@/components/RoomDisplay';
import styles from './page.module.css';

export default function Home() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleProfileSelect = (imagePath: string | null) => {
    setSelectedImage(imagePath);
  };

  const handleCloseProfile = () => {
    setSelectedImage(null);
  };

  return (
    <main className={styles.mainContainer}>
      <aside className={styles.leftColumn}>
        <MainMenu onProfileSelect={handleProfileSelect} />
      </aside>
      <section className={styles.rightColumn}>
        <div className={styles.roomFrame}>
          <RoomDisplay overlayImage={selectedImage} onClose={handleCloseProfile} />
        </div>
      </section>
    </main>
  );
}
