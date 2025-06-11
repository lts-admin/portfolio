"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter();
    return (
        <section className="min-h-screen bg-[#f5f5f2] text-[#1c1c1c] px-8 flex flex-col justify-between py-10">
            <header className="flex justify-between text-lg text-gray-600 mb-8">
                <div>Full Stack Engineer • Builder of Lean, Launch-Ready Products</div>
                <nav className="space-x-6">
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <div className="flex flex-col gap-8">
                <h1 className="text-9xl font-bold leading-none tracking-tight text-left w-full">
                    SATYA VINJAMURI
                </h1>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <p className="text-lg mt-6 max-w-md">
                            Open to contract and full-time roles. I build polished, scalable software platforms and mobile apps that solve real-world problems.
                        </p>
                        <button
                            onClick={() => router.push("/contact")}
                            className="mt-6 inline-block border border-black px-6 py-3 text-sm rounded-full hover:bg-black hover:text-white transition"
                        >
                            CONTACT ↗
                        </button>
                    </div>

                    <div className="flex-1">
                        <img
                            src="/your-profile-or-project-image.jpg"
                            alt="Preview"
                            className="rounded-lg shadow-md object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-10 text-right text-xl uppercase text-gray-500">
                Available for work — {new Date().toLocaleString('default', { month: 'short' })}'{new Date().getFullYear().toString().slice(-2)}
            </div>
        </section>
    );
}
