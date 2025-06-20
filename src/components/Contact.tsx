'use client';

import { useState } from 'react';
import { contact } from '@/data/contact';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', form);
    };

    return (
        <section id="contact" className="min-h-screen bg-[#f5f5f2] text-[#1c1c1c] px-8 py-20 flex items-center justify-center">
            <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl items-start">
                {/* Left side with icons */}
                <div className="space-y-6 text-left w-full md:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">Contact Info</h2>
                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-xl text-red-500" />
                        <a href={`mailto:${contact[0].email}`} className="hover:underline">
                            {contact[0].email}
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaPhoneAlt className="text-xl text-blue-500" />
                        <a href={`tel:${contact[0].phone}`} className="hover:underline">
                            {contact[0].phone}
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaLinkedin className="text-xl text-[#0e76a8]" />
                        <a href={contact[0].linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            LinkedIn Profile
                        </a>
                    </div>
                </div>

                {/* Right side with form */}
                <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Send a Message</h2>
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-left">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 mt-1 p-3 rounded focus:outline-none focus:ring focus:ring-black"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-left">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 mt-1 p-3 rounded focus:outline-none focus:ring focus:ring-black"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-left">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 mt-1 p-3 rounded focus:outline-none focus:ring focus:ring-black"
                        />
                    </div>

                    <button
                        type="submit"
                        className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
                    >
                        Send Message ↗
                    </button>
                </form>
            </div>
        </section>
    );
}
