'use client';

import { experience } from '@/data/experience';

export default function Experience() {
    return (
        <section id="experience" className="px-4 sm:px-12 md:py-15 bg-[#f5f5f2] text-[#1c1c1c]">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Experience</h2>

            <ul className="space-y-6">
                {experience.map((exp) => (
                    <li
                        key={exp.company}
                        className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-1">
                                {exp.role} @ {exp.company}
                            </h3>
                            <p className="text-sm italic text-gray-500 mb-3">{exp.dates}</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {exp.responsibilities.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
