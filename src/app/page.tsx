"use client";

import React, { useState, useEffect, useRef } from 'react';
import MainMenu from '@/components/MainMenu';
import RoomDisplay from '@/components/RoomDisplay';
import LoadingScreen from '@/components/LoadingScreen';
import Image from 'next/image';
import styles from './page.module.css';

const PROFILE_DATA = {
  owner: {
    name: "泉水春",
    text: "猫とゲームが大好き。\n飽き性なのでいろんな事に浅く手を出しがち。\n猫は1日に10回は吸う。",
    details: [
      { label: "好きなゲーム", value: "Warframe、地球防衛軍シリーズ、DiabroⅢ" },
      { label: "好きなジャンル", value: "ローグライク、ハッシュ＆スラッシュ、ソウルライク、アドベンチャー" }
    ],
    image: "/owner.png"
  },
  kyotaro: {
    name: "京太郎",
    text: "3匹の中で1番体が大きくて1番やさしくて一番のびびり。\n知らない人が来たら真っ先に隠れちゃう。\n飼い主が抱き着いてすりすりしても受け入れて喉をごろごろ鳴らしてくれるナイスガイ。",
    details: [
      { label: "種類", value: "メインクーン" },
      { label: "誕生日", value: "2018年3月9日" },
      { label: "愛称", value: "京ちゃん" }
    ],
    image: "/kyotaro.png"
  },
  mei: {
    name: "芽生",
    text: "青い瞳がとってもきれいなお姫様。\nクイーンオブ猫のようなツンデレの性格。\nデレが出た瞬間どんな人間でも陥落させる可愛さの持ち主。\nおやつを食べるときは野獣に変化する。",
    details: [
      { label: "種類", value: "ラグドール" },
      { label: "誕生日", value: "2018年5月5日" },
      { label: "愛称", value: "めいちゃん" }
    ],
    image: "/mei.png"
  },
  yukinosuke: {
    name: "雪之助",
    text: "この世の食べ物はすべて僕のもの。\nいたずら大好きな真っ白な盗賊。\nあまりにもいたずらしすぎてめいちゃんにキレられがち。",
    details: [
      { label: "種類", value: "メインクーン" },
      { label: "誕生日", value: "2019年4月6日" },
      { label: "愛称", value: "ゆきちゃん" }
    ],
    image: "/yukinosuke.png"
  }
};

// スクロールで出現するセクション用のコンポーネント
const ScrollSection: React.FC<{
  children: React.ReactNode;
  id: string;
  direction: 'left' | 'right';
}> = ({ children, id, direction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // 少しでも画面に入ったら発火しやすくする
        rootMargin: '0px 0px -50px 0px' // 少し手前で準備
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id={id} 
      className={`${styles.contentSection} ${isVisible ? styles.visible : styles.hidden} ${direction === 'left' ? styles.fromLeft : styles.fromRight}`}
    >
      {children}
    </section>
  );
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<keyof typeof PROFILE_DATA>('owner');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 300px以上スクロールしたらボタンを表示
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseProfile = () => {
    setSelectedImage(null);
  };

  const handleItemSelect = (action?: () => void) => {
    if (action) action();
    setIsMenuOpen(false);
  };

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.mainContainer}>
      <LoadingScreen />
      
      <MainMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onItemSelect={handleItemSelect}
      />

      {/* Main Visual Section */}
      <section className={styles.roomSection} id="top">
        <div className={styles.topLogo}>
          IZUMI<br />FAMILY
        </div>
        
        <div className={styles.roomFrame}>
          <RoomDisplay overlayImage={selectedImage} onClose={handleCloseProfile} />
        </div>
        
        {/* Bouncing Arrow */}
        <button className={styles.scrollArrow} onClick={() => scrollToId('profile')}>
          <span>↓</span>
        </button>
      </section>

      {/* Profile Section */}
      <ScrollSection id="profile" direction="left">
        <div className={styles.boxContainer}>
          <h2 className={styles.sectionTitle}>
            <Image src="/cat.png" alt="cat" width={50} height={50} className={styles.titleIcon} />
            Profile
          </h2>
          
          <div className={styles.profileGrid}>
            <div className={styles.iconList}>
              {Object.entries(PROFILE_DATA).map(([key, data]) => (
                <button 
                  key={key} 
                  className={`${styles.profileIcon} ${selectedProfile === key ? styles.activeIcon : ''}`}
                  onClick={() => setSelectedProfile(key as keyof typeof PROFILE_DATA)}
                >
                  <Image src={data.image} alt={data.name} width={80} height={80} />
                </button>
              ))}
            </div>
            
            <div className={styles.profileContent} key={selectedProfile}>
              <h3 className={styles.profileName}>{PROFILE_DATA[selectedProfile].name}</h3>
              <p className={styles.profileText}>{PROFILE_DATA[selectedProfile].text}</p>
              
              <div className={styles.profileDetails}>
                {PROFILE_DATA[selectedProfile].details.map((detail, index) => (
                  <div key={index} className={styles.detailRow}>
                    <span className={styles.detailLabel}>{detail.label}</span>
                    <span className={styles.detailValue}>{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Game Log Section */}
      <ScrollSection id="game-log" direction="right">
        <div className={styles.boxContainer}>
          <h2 className={styles.sectionTitle}>
            <Image src="/cat.png" alt="cat" width={50} height={50} className={styles.titleIcon} />
            Game Log
          </h2>
          
          <div className={styles.snsList}>
            <a href="https://sizu.me/izumiharu" target="_blank" rel="noopener noreferrer" className={styles.snsButton}>
              <Image src="/siz.png" alt="siz.me" width={32} height={32} />
              <div className={styles.snsText}>
                <span className={styles.snsLabel}>sizu.me</span>
              </div>
              <svg
                className={styles.snsArrow}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
               <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
              </svg>
            </a>
            
            <a href="https://infinitebacklog.net/users/izumiharu" target="_blank" rel="noopener noreferrer" className={styles.snsButton}>
              <Image src="/infinity.png" alt="INFINITE BACKLOG" width={32} height={32} />
              <div className={styles.snsText}>
                <span className={styles.snsLabel}>INFINITEBACKLOG</span>
              </div>
              <svg
                className={styles.snsArrow}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
               <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </ScrollSection>

      {/* SNS Section */}
      <ScrollSection id="sns" direction="left">
        <div className={styles.boxContainer}>
          <h2 className={styles.sectionTitle}>
            <Image src="/cat.png" alt="cat" width={50} height={50} className={styles.titleIcon} />
            SNS
          </h2>
          
          <div className={styles.snsList}>
            <a href="https://www.youtube.com/@%E6%B3%89%E6%B0%B4%E6%98%A5-r6f" target="_blank" rel="noopener noreferrer" className={styles.snsButton}>
              <Image src="/youtube.png" alt="Youtube" width={32} height={32} />
              <div className={styles.snsText}>
                <span className={styles.snsLabel}>Youtube (Game)</span>
              </div>
              <svg
                className={styles.snsArrow}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
               <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
              </svg>
            </a>
            
            <a href="https://www.youtube.com/@%E3%81%84%E3%81%9A%E3%81%BC%E5%AE%B6%E3%81%AE%E3%81%AB%E3%82%83%E3%82%93%E3%81%93" target="_blank" rel="noopener noreferrer" className={styles.snsButton}>
              <Image src="/youtube.png" alt="Youtube" width={32} height={32} />
              <div className={styles.snsText}>
                <span className={styles.snsLabel}>Youtube (Cats)</span>
              </div>
              <svg
                className={styles.snsArrow}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
               <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="https://bsky.app/profile/haruizumi.bsky.social" target="_blank" rel="noopener noreferrer" className={styles.snsButton}>
              <Image src="/bluesky.png" alt="Bluesky" width={32} height={32} />
              <div className={styles.snsText}>
                <span className={styles.snsLabel}>Bluesky</span>
              </div>
              <svg
                className={styles.snsArrow}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
               <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="https://medium.com/@urahimuzi" target="_blank" rel="noopener noreferrer" className={styles.snsButton}>
              <Image src="/medium.png" alt="Medium" width={32} height={32} />
              <div className={styles.snsText}>
                <span className={styles.snsLabel}>Medium</span>
              </div>
              <svg
                className={styles.snsArrow}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
               <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="https://www.tumblr.com/izumiharu-x-meow" target="_blank" rel="noopener noreferrer" className={styles.snsButton}>
              <Image src="/tumblr.png" alt="Tumblr" width={32} height={32} />
              <div className={styles.snsText}>
                <span className={styles.snsLabel}>Tumblr</span>
              </div>
              <svg
                className={styles.snsArrow}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
               <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </ScrollSection>

      {/* Back to Top Button */}
      <button 
        className={`${styles.scrollTopButton} ${showScrollTop ? styles.showBtn : ''}`}
        onClick={() => scrollToId('top')}
      >
        <Image src="/cat2.png" alt="cat" width={20} height={20} className={styles.topBtnIcon} />
        UP
      </button>
    </main>
  );
}
