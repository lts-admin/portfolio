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
                    className="hover:underline"
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
                    className="hover:underline"
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
                    className="hover:underline"
                >
                    Contact
                </button>
                <button
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/SatyaVinjamuri.pdf';
                        link.download = 'SatyaVinjamuri.pdf';
                        link.click();
                    }}
                    className="hover:underline"
                // className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
                >
                    Download CV
                </button>
            </nav>
        </header>
    );
}
