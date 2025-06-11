'use client';

import { useRouter } from 'next/navigation';

export default function HeaderClient() {
    const router = useRouter();

    return (
        <header className="flex bg-[#f5f5f2] text-[#1c1c1c] justify-between text-lg text-gray-600 pt-4">
            <div className="px-2" onClick={() => router.push("/")}>Full Stack Engineer • Builder of Lean, Launch-Ready Products</div>
            <nav className="space-x-6 px-4">
                <button
                    onClick={() => {
                        const section = document.getElementById('projects');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    Projects
                </button>
                <button
                    onClick={() => {
                        const section = document.getElementById('experience');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    Experience
                </button>
                <button
                    onClick={() => {
                        const section = document.getElementById('contact');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    Contact
                </button>
            </nav>
        </header>
    );
}
