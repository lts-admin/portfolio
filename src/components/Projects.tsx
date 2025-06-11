// src/components/Projects.tsx
import { projects } from '@/data/projects';

export default function Projects() {


    return (
        <section id="projects" className="px-8 py-20">
            <h2 className="text-4xl font-bold mb-12">Projects</h2>
            <div className="space-y-12">
                {projects.map((proj) => (
                    <div key={proj.title} className="flex flex-col md:flex-row md:items-center gap-8">
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold">
                                <a href={proj.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {proj.title}
                                </a>
                            </h3>
                            <p className="text-sm italic text-gray-600 mb-1">{proj.role}</p>
                            <p className="text-gray-800 mb-3">{proj.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {proj.tech.map((t) => (
                                    <span key={t} className="bg-gray-200 px-2 py-1 text-sm rounded-full">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

