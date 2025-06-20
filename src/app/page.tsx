// === src/app/page.tsx ===
'use client';

import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function HomePage() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll bg-[#f5f5f2] text-[#1c1c1c] font-sans scroll-smooth">
      <section className="snap-start">
        <Hero />
      </section>

      <section className="snap-start scroll-mt-10 md:pb-35" id="projects">
        <Projects />
      </section>

      <section className="snap-start py-40 pb-30" id="experience">
        <Experience />
      </section>

      <section className="snap-start" id="contact">
        <Contact />
      </section>
    </main>
  );
}
