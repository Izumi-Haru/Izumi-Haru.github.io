"use client";

import Section from "@/components/Section";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Contact() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '60px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Section className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Get in Touch</h1>
                        <p className={styles.description}>
                            Have a project in mind or just want to say hi? I'd love to hear from you.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.formContainer}>
                            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>Name</label>
                                    <input type="text" id="name" className={styles.input} placeholder="John Doe" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>Email</label>
                                    <input type="email" id="email" className={styles.input} placeholder="john@example.com" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>Message</label>
                                    <textarea id="message" className={styles.textarea} rows={5} placeholder="Tell me about your project..."></textarea>
                                </div>
                                <Button type="submit" style={{ width: '100%' }}>Send Message</Button>
                            </form>
                        </div>

                        <div className={styles.infoContainer}>
                            <Card className={styles.infoCard}>
                                <h3 className={styles.infoTitle}>Contact Information</h3>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>Email</span>
                                    <a href="mailto:hello@example.com" className={styles.infoValue}>hello@example.com</a>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>Socials</span>
                                    <div className={styles.socialLinks}>
                                        <a href="#" className={styles.socialLink}>Twitter</a>
                                        <a href="#" className={styles.socialLink}>GitHub</a>
                                        <a href="#" className={styles.socialLink}>LinkedIn</a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
