"use client";

import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
            className="px-6 sm:px-12 py-20 pb-20 bg-[#f5f5f2] text-[#1c1c1c]"
        >
            <h2 className="text-4xl font-bold mb-16 text-center">My Projects</h2>

            <div className="space-y-12">
                {projects.map((proj) => (
                    <div
                        key={proj.title}
                        className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                    >
                        <h3 className="text-2xl font-bold text-[#1c1c1c] mb-1">
                            <a
                                href={proj.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {proj.title}
                            </a>
                        </h3>

                        <p className="text-sm italic text-gray-500 mb-2">{proj.role}</p>
                        <p className="text-gray-700 mb-4">{proj.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {proj.tech.map((t) => (
                                <span
                                    key={t}
                                    className="bg-gray-100 text-gray-800 px-3 py-1 text-xs rounded-full border border-gray-300"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
