"use client";

import React, { useRef } from "react";
import Image from 'next/image';

export default function Hero() {
    const ref = useRef(null);

    return (
        <section
            ref={ref}
            className="min-h-screen bg-[#f5f5f2] text-[#1c1c1c] px-4 md:px-8 flex items-center justify-center"
        >
            <div className="w-full max-w-6xl flex flex-col gap-6">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-center md:text-left whitespace-nowrap">
                    SATYA VINJAMURI
                </h1>

                <p className="text-center md:text-left text-base sm:text-lg md:text-xl uppercase text-gray-500">
                    Available for work — {`${new Date().toLocaleString('default', { month: 'short' })}’${new Date().getFullYear().toString().slice(-2)}`}
                </p>

                <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:justify-between gap-6 mt-4">
                    <div className="flex-1 max-w-md text-center md:text-left">
                        <p className="text-base sm:text-lg mt-4">
                            Open to contract and full-time roles. I build polished, scalable software platforms and mobile apps that solve real-world problems.
                        </p>
                        <button
                            onClick={() => {
                                const section = document.getElementById('contact');
                                if (section) section.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="mt-6 border border-black px-6 py-3 text-sm rounded-full animate-pulse transition duration-300 hover:scale-105 hover:bg-black hover:text-white"
                        >
                            CONTACT ↗
                        </button>
                    </div>

                    <div className="flex-1 w-full flex justify-center">
                        <Image
                            src="/profile.jpg"
                            alt="Profile Picture"
                            width={280}
                            height={280}
                            className="rounded-lg shadow-md object-cover max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
} 