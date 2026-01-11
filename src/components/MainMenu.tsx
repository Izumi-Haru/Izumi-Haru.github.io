"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './MainMenu.module.css';

const MainMenu: React.FC<{ onProfileSelect: (path: string | null) => void }> = ({ onProfileSelect }) => {
    // Independent toggle states for expandable menus
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCatsOpen, setIsCatsOpen] = useState(false);
    const [isSnsOpen, setIsSnsOpen] = useState(false);

    const handleProfileClick = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleCatsClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsCatsOpen(!isCatsOpen);
    };

    const handleSnsClick = () => {
        setIsSnsOpen(!isSnsOpen);
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

                    {isProfileOpen && (
                        <ul className={styles.submenu}>
                            <li>
                                <button
                                    className={styles.submenuButton}
                                    onClick={() => onProfileSelect('/owner.png')}
                                >
                                    Owner
                                </button>
                            </li>
                            <li>
                                <button
                                    className={styles.submenuButton}
                                    onClick={handleCatsClick}
                                >
                                    Cats
                                </button>
                                {isCatsOpen && (
                                    <ul className={styles.submenu}>
                                        <li>
                                            <button
                                                className={styles.submenuButton}
                                                onClick={() => onProfileSelect('/kyotaro.png')}
                                            >
                                                Kyotaro
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className={styles.submenuButton}
                                                onClick={() => onProfileSelect('/mei.png')}
                                            >
                                                Mei
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className={styles.submenuButton}
                                                onClick={() => onProfileSelect('/yukinosuke.png')}
                                            >
                                                Yukinosuke
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    )}
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

                    {isSnsOpen && (
                        <ul className={styles.submenu}>
                            <li>
                                <a
                                    href="https://bsky.app/profile/haruizumi.bsky.social"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.submenuButton}
                                >
                                    <Image src="/bluesky.png" alt="Bluesky" width={24} height={24} />
                                    Bluesky
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://medium.com/@urahimuzi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.submenuButton}
                                >
                                    <Image src="/medium.png" alt="Medium" width={24} height={24} />
                                    Medium
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.tumblr.com/izumiharu-x-meow"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.submenuButton}
                                >
                                    <Image src="/tumblr.png" alt="Tumblr" width={24} height={24} />
                                    Tumblr
                                </a>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
