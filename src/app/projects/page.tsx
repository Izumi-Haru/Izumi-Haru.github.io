import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured online store built with Next.js, Stripe, and a headless CMS.",
        tags: ["Next.js", "Stripe", "Tailwind"],
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A productivity tool for teams to organize and track their workflows efficiently.",
        tags: ["React", "Firebase", "Drag & Drop"],
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A personal portfolio site (like this one!) showcasing projects and skills.",
        tags: ["Next.js", "CSS Modules", "TypeScript"],
    },
    {
        id: 4,
        title: "Weather Dashboard",
        description: "Real-time weather application using open weather data APIs and data visualization.",
        tags: ["API Integration", "Chart.js", "React"],
    },
];

export default function Projects() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '60px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Section className={styles.container}>
                    <h1 className={styles.title}>Featured Projects</h1>
                    <p className={styles.description}>
                        Here are some of the projects I've worked on. Each one was a unique challenge
                        that helped me grow as a developer.
                    </p>

                    <div className={styles.grid}>
                        {projects.map((project) => (
                            <Card key={project.id} className={styles.projectCard}>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDesc}>{project.description}</p>
                                    <div className={styles.tags}>
                                        {project.tags.map(tag => (
                                            <span key={tag} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className={styles.actions}>
                                        <Link href="#">
                                            <Button variant="outline" style={{ width: '100%' }}>View Project</Button>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
