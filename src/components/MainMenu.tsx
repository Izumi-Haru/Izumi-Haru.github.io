"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SubMenuContent from './SubMenuContent';
import styles from './MainMenu.module.css';

interface MainMenuProps {
    onProfileSelect: (path: string | null) => void;
    activeMenu: 'profile' | 'sns' | null;
    setActiveMenu: (menu: 'profile' | 'sns' | null) => void;
    isCatsOpen: boolean;
    setIsCatsOpen: (open: boolean) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({
    onProfileSelect,
    activeMenu,
    setActiveMenu,
    isCatsOpen,
    setIsCatsOpen
}) => {
    const handleProfileClick = () => {
        setActiveMenu(activeMenu === 'profile' ? null : 'profile');
    };

    const handleCatsClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsCatsOpen(!isCatsOpen);
    };

    const handleSnsClick = () => {
        setActiveMenu(activeMenu === 'sns' ? null : 'sns');
    };

    const handleItemSelect = (action?: () => void) => {
        if (action) action();
        // We don't necessarily close the menu on mobile anymore to allow seeing the result
        // But for desktop/consistency let's keep it for now or make it conditional
        // For now, let's just let the page handle it if needed.
    };

    return (
        <nav className={styles.menuContainer}>
            <ul className={styles.menuList}>
                {/* Profile Section */}
                <li className={styles.menuItem}>
                    <button
                        className={styles.menuButton}
                        onClick={handleProfileClick}
                    >
                        <Image src="/cat.png" alt="icon" width={30} height={30} className={styles.icon} />
                        Profile
                    </button>

                    <div className={styles.desktopOnly}>
                        {activeMenu === 'profile' && (
                            <SubMenuContent
                                type="profile"
                                isCatsOpen={isCatsOpen}
                                onCatsToggle={handleCatsClick}
                                onItemSelect={handleItemSelect}
                                onProfileSelect={onProfileSelect}
                            />
                        )}
                    </div>
                </li>

                {/* Game Log Section */}
                <li className={styles.menuItem}>
                    <a href="https://sizu.me/izumiharu" target="_blank" rel="noopener noreferrer" className={styles.menuButton}>
                        <Image src="/cat.png" alt="icon" width={30} height={30} className={styles.icon} />
                        Game Log
                    </a>
                </li>

                {/* SNS Section */}
                <li className={styles.menuItem}>
                    <button
                        className={styles.menuButton}
                        onClick={handleSnsClick}
                    >
                        <Image src="/cat.png" alt="icon" width={30} height={30} className={styles.icon} />
                        SNS
                    </button>

                    <div className={styles.desktopOnly}>
                        {activeMenu === 'sns' && (
                            <SubMenuContent
                                type="sns"
                                isCatsOpen={isCatsOpen}
                                onCatsToggle={handleCatsClick}
                                onItemSelect={handleItemSelect}
                                onProfileSelect={onProfileSelect}
                            />
                        )}
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
