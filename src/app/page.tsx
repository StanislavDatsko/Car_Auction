import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import LogisticsSection from '@/components/landing/LogisticsSection'
import ContactFormSection from '@/components/landing/ContactFormSection'
import VideoSection from '@/components/landing/VideoSection'
import Features from '@/components/landing/Features'
import Advantages from '@/components/landing/Advantages'
import Footer from '@/components/landing/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <LogisticsSection />
            <ContactFormSection id="early-contact" />
            <VideoSection />

            {/* Advantages Block */}
            <Advantages />

            <Features />
            <ContactFormSection id="contact" />
            <Footer />
        </main>
    )
}