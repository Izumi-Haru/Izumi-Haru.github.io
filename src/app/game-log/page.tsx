import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function GameLog() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '60px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Section>
                    <h1>Game Log</h1>
                    <p>This page will track my gaming history and achievements.</p>
                    <p style={{ marginTop: '2rem', color: '#888' }}>Coming Soon...</p>
                </Section>
            </main>
            <Footer />
        </>
    );
}
