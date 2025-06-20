"use client";

import React, { useRef } from "react";
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    const router = useRouter();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    return (
        <section
            ref={ref}
            // style={{ opacity, y }}
            className="min-h-screen bg-[#f5f5f2] text-[#1c1c1c] px-8 flex flex-col justify-between py-10"
        >
            <div className="flex flex-col gap-8 py-20">
                <h1 className="text-9xl font-bold leading-none tracking-tight text-left w-full">
                    SATYA VINJAMURI
                </h1>
                <p className="text-left px-10 text-xl uppercase text-gray-500">
                    Available for work — {new Date().toLocaleString('default', { month: 'short' })}'{new Date().getFullYear().toString().slice(-2)}
                </p>
                <div className="flex flex-col px-10 md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <p className="text-lg mt-6 max-w-md">
                            Open to contract and full-time roles. I build polished, scalable software platforms and mobile apps that solve real-world problems.
                        </p>
                        <button
                            onClick={() => {
                                const section = document.getElementById('contact');
                                if (section) {
                                    section.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className=" mt-6 border border-black px-6 py-3 text-sm rounded-full animate-pulse transition-transform duration-300 hover:scale-150 hover:bg-black hover:font-bold hover:text-white"

                        >
                            CONTACT ↗
                        </button>
                    </div>

                    <div className="flex-1 items-right">

                        <Image
                            src="/profile.jpg"
                            alt="Preview"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-md object-cover"
                        />
                    </div>
                </div>
            </div>


        </section>
    );
}
