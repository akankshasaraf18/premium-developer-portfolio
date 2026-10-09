import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Experience from './components/Experience';
import ProjectShowcase from './components/ProjectShowcase';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialModal from './components/SocialModal';

export default function App() {
  const [socialModalPlatform, setSocialModalPlatform] = useState(null);

  const handleOpenSocialModal = (platform) => {
    setSocialModalPlatform(platform);
  };

  const handleCloseSocialModal = () => {
    setSocialModalPlatform(null);
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-[#f1f5f9] selection:bg-electric-500/30 selection:text-white">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Futuristic Background System */}
      <Background />

      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenSocialModal={handleOpenSocialModal} />
        <About />
        <Stats />
        <Experience />
        <ProjectShowcase onOpenPlaceholder={handleOpenSocialModal} />
        <Skills />
        <Achievements />
        <Education />
        <ResumeSection />
        <Contact onOpenSocialModal={handleOpenSocialModal} />
      </main>

      {/* Footer */}
      <Footer onOpenSocialModal={handleOpenSocialModal} />

      {/* Social / Link Placeholder Guidance Modal */}
      <SocialModal
        platform={socialModalPlatform}
        isOpen={!!socialModalPlatform}
        onClose={handleCloseSocialModal}
      />
    </div>
  );
}
