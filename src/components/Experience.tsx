import { experience } from '@/data/experience';

export default function Experience() {
    return (
        <section id="experience" className="px-8 py-20">
            <h2 className="text-4xl font-bold mb-12">Experience</h2>
            <ul className="space-y-10">
                {experience.map((exp) => (
                    <li key={exp.company}>
                        <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
                        <p className="text-sm italic text-gray-500">{exp.dates}</p>
                        <ul className="list-disc list-inside mt-2 text-blacktext-sm space-y-1">
                            {exp.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
}