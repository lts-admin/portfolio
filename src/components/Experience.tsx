'use client';

import { useState } from 'react';
import { experience } from '@/data/experience';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <section id="experience" className="px-6 sm:px-12 py-20 bg-[#f5f5f2] text-[#1c1c1c]">
            <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

            <ul className="space-y-6">
                {experience.map((exp, index) => (
                    <li
                        key={exp.company}
                        className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="flex justify-between items-center w-full text-left"
                        >
                            <div>
                                <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
                                <p className="text-sm italic text-gray-500">{exp.dates}</p>
                            </div>
                            <span className="text-lg">{openIndex === index ? '−' : '+'}</span>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="list-disc list-inside mt-4 pl-4 text-sm text-gray-700 space-y-1 overflow-hidden"
                                >
                                    {exp.responsibilities.map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>
        </section>
    );
}
