'use client';

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
            className="px-4 sm:px-8 py-8 bg-[#f5f5f2] text-[#1c1c1c]"
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-center">My Projects</h2>

            <div className="space-y-10">
                {projects.map((proj) => (
                    <div
                        key={proj.title}
                        className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-[#1c1c1c] mb-2">
                            {proj.url ? (
                                <a
                                    href={proj.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline inline-flex items-center gap-2"
                                >
                                    {proj.title}
                                    <span className="w-2 h-2 rounded-full bg-red-500 translate-y-[1px]" />
                                </a>
                            ) : (
                                <span>{proj.title}</span>
                            )}
                        </h3>

                        <p className="text-sm italic text-gray-500 mb-2">{proj.role}</p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4">{proj.description}</p>

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
