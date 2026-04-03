"use client";

import React from 'react';
import Image from 'next/image';
import styles from './MainMenu.module.css';

interface SubMenuContentProps {
    type: 'profile' | 'sns' | null;
    isCatsOpen: boolean;
    onCatsToggle: (e: React.MouseEvent) => void;
    onItemSelect: (action?: () => void) => void;
    onProfileSelect: (path: string | null) => void;
    isMobile?: boolean;
}

const SubMenuContent: React.FC<SubMenuContentProps> = ({
    type,
    isCatsOpen,
    onCatsToggle,
    onItemSelect,
    onProfileSelect,
    isMobile
}) => {
    const catIcon = isMobile ? '/cat2.png' : '/cat.png';

    if (!type) return null;

    if (type === 'profile') {
        return (
            <ul className={styles.submenu}>
                <li>
                    <button
                        className={styles.submenuButton}
                        onClick={() => onItemSelect(() => onProfileSelect('/owner.png'))}
                    >
                        <Image src={catIcon} alt="icon" width={20} height={20} />
                        Owner
                    </button>
                </li>
                <li>
                    <button
                        className={styles.submenuButton}
                        onClick={onCatsToggle}
                    >
                        <Image src={catIcon} alt="icon" width={20} height={20} />
                        Cats
                    </button>
                    {isCatsOpen && (
                        <ul className={styles.submenu}>
                            <li>
                                <button
                                    className={styles.submenuButton}
                                    onClick={() => onItemSelect(() => onProfileSelect('/kyotaro.png'))}
                                >
                                    Kyotaro
                                </button>
                            </li>
                            <li>
                                <button
                                    className={styles.submenuButton}
                                    onClick={() => onItemSelect(() => onProfileSelect('/mei.png'))}
                                >
                                    Mei
                                </button>
                            </li>
                            <li>
                                <button
                                    className={styles.submenuButton}
                                    onClick={() => onItemSelect(() => onProfileSelect('/yukinosuke.png'))}
                                >
                                    Yukinosuke
                                </button>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        );
    }

    if (type === 'sns') {
        return (
            <ul className={styles.submenu}>
                <li>
                    <a
                        href="https://www.youtube.com/@%E6%B3%89%E6%B0%B4%E6%98%A5-r6f"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.submenuButton}
                        onClick={() => onItemSelect()}
                    >
                        <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
                        Youtube (Game)
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/@%E3%81%84%E3%81%9A%E3%81%BF%E5%AE%B6%E3%81%AE%E3%81%AB%E3%82%83%E3%82%93%E3%81%93"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.submenuButton}
                        onClick={() => onItemSelect()}
                    >
                        <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
                        Youtube (Cats)
                    </a>
                </li>
                <li>
                    <a
                        href="https://bsky.app/profile/haruizumi.bsky.social"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.submenuButton}
                        onClick={() => onItemSelect()}
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
                        onClick={() => onItemSelect()}
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
                        onClick={() => onItemSelect()}
                    >
                        <Image src="/tumblr.png" alt="Tumblr" width={24} height={24} />
                        Tumblr
                    </a>
                </li>
            </ul>
        );
    }

    return null;
};

export default SubMenuContent;
