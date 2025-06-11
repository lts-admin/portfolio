'use client';

import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        // You can replace this with actual form handling logic
    };

    return (
        <section id="contact" className="min-h-screen bg-[#f5f5f2] w-full text-[#1c1c1c] px-8 flex flex-col items-center justify-center text-center">
            <div className="max-w-2xl w-full">

                <h2 className="text-4xl font-bold mb-6">Contact</h2>
                <p className="text-lg mb-8 max-w-xl">Interested in working together or just want to say hi? Fill out the form below or email me directly.</p>

                <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
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
