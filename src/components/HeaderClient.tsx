'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function HeaderClient() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // close menu after click
        }
    };

    const navLinks = (
        <>
            <button onClick={() => scrollTo('projects')} className="hover:underline text-left">Projects</button>
            <button onClick={() => scrollTo('experience')} className="hover:underline text-left">Experience</button>
            <button onClick={() => scrollTo('contact')} className="hover:underline text-left">Contact</button>
            <button
                onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/SatyaVinjamuri.pdf';
                    link.download = 'SatyaVinjamuri.pdf';
                    link.click();
                    setIsOpen(false);
                }}
                className="hover:underline text-left"
            >
                Download CV
            </button>
        </>
    );

    return (
        <header
            className={`bg-[#f5f5f2] text-[#1c1c1c] text-lg text-gray-600 px-4 pt-4 pb-2 shadow-sm `}
        >
            <div className="flex justify-between items-center">
                {/* Mobile: Tagline + Menu Button */}
                {/* Mobile view (hamburger + tagline) */}
                <div className="flex md:hidden justify-between items-center w-full">
                    <span
                        className={`text-lg font-medium ${isOpen ? 'border-b border-gray-400 pb-1 w-full' : 'truncate'
                            }`}
                    >
                        Full Stack Engineer
                    </span>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop view (full tagline) */}
                <div className="hidden md:flex justify-between items-center w-full">
                    <span className="text-lg font-medium">
                        Full Stack Engineer • Builder of Lean, Launch-Ready Products
                    </span>
                </div>


                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 w-full justify-end">
                    {navLinks}
                </nav>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col mt-3 space-y-3">
                    {navLinks}
                </div>
            )}
        </header>
    );
}
