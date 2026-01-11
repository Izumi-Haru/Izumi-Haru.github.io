import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function About() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '60px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Section className={styles.container}>
                    <h1 className={styles.title}>About Me</h1>
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <p className={styles.paragraph}>
                                Hello! I'm a dedicated software engineer with a passion for building exceptional digital experiences.
                                My journey in web development began several years ago, and I've had the privilege of working on
                                a diverse range of projects, from small business websites to complex web applications.
                            </p>
                            <p className={styles.paragraph}>
                                My main focus these days is building accessible, inclusive products and digital experiences
                                for a variety of clients. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                            </p>
                            <h2 className={styles.subtitle}>Skills</h2>
                            <ul className={styles.skillsList}>
                                <li>JavaScript (ES6+)</li>
                                <li>TypeScript</li>
                                <li>React & Next.js</li>
                                <li>Node.js</li>
                                <li>CSS & UI Design</li>
                                <li>Git & Deployment</li>
                            </ul>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
