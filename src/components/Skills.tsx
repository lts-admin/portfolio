// === src/components/Skills.tsx ===
import { skills } from '@/data/skills';

export default function Skills() {
    return (
        <section className="px-8 py-20">
            <h2 className="text-4xl font-bold mb-12">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="font-bold mb-2 text-lg">{category}</h3>
                        <ul className="text-sm text-blacklist-disc list-inside">
                            {items.map((skill) => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}