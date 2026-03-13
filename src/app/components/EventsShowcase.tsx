'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const events = [
    {name: "Poster Making",poster: "/Poster/PosterMaking.jpeg" , gradient: 'from-violet-600 via-purple-500 to-fuchsia-400' },
    { name: "Kho Kho", poster: "/Poster/kho-kho.jpeg", gradient: 'from-fuchsia-600 via-pink-500 to-rose-400' },

    {name: "Model Making", poster: "/Poster/ModelMaking.jpeg", gradient: 'from-amber-500 via-yellow-500 to-lime-400' },

    {name: "Fashion", poster:"/Poster/fashion.jpeg", gradient: 'from-pink-600 via-rose-500 to-orange-400' },

    {name: "Research Paper", poster:"/Poster/researchPaper.jpeg", gradient: 'from-teal-600 via-emerald-500 to-green-400' },

    {name: "Badminton", poster:"/Poster/badminton.jpeg", gradient: 'from-indigo-600 via-blue-500 to-cyan-400'},

    {name: "Art Villa", poster:"/Poster/art-villa.jpeg", gradient: 'from-amber-500 via-yellow-500 to-lime-400' },
];

export default function EventsShowcase() {
    const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

    return (
        <section id="all-events" className="relative z-10 py-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-accent/10 border border-secondary-accent/20 mb-4">
                    <span className="material-symbols-outlined text-secondary-accent text-sm">star</span>
                    <span className="text-xs font-bold text-secondary-accent tracking-wide uppercase">All Events Posters</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-3">
                    Explore Every{' '}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary-accent to-primary">
                        Competition
                    </span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    From the stage to the field, from code to canvas — find your event and register now.
                </p>
            </div>

            {/* Poster Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                {events.map((event) => (
                    <div
                        key={event.name}
                        onClick={() => event.poster && setSelectedPoster(event.poster)}
                        className={`cursor-pointer group aspect-3/4.5 relative overflow-hidden rounded-2xl p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] bg-cover bg-top bg-no-repeat ${event.poster ? '' : `bg-linear-to-br ${event.gradient}`}`}
                        style={event.poster ? { backgroundImage: `url(${event.poster})` } : undefined}
                    >

                        {/* Register Button */}
                        <Link 
                            href={"/register"} 
                            onClick={(e) => e.stopPropagation()}
                            className="absolute right-1 top-1 bg-purple-500/50 hover:bg-purple-600/50 backdrop-blur-[3px] font-bold py-2 px-3 rounded-full transition-all active:scale-95 tracking-wide text-center"
                        >
                            <span className='material-symbols-outlined' style={{ fontVariationSettings: "'wght' 500", fontSize: "22px" }}>call_made</span>
                        </Link>
                    </div>
                ))}
            </div>
            {/* Lightbox Modal */}
            {selectedPoster && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedPoster(null)}
                >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                    <div
                        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center animate-fade-in"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedPoster(null)}
                            className="absolute -top-2 -right-2 z-10 h-10 w-10 cursor-pointer rounded-full bg-white/10 backdrop-blur-[5px] border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                            <span className="material-symbols-outlined text-xl">close</span>
                        </button>

                        {/* Image */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={selectedPoster}
                            alt="Event Poster"
                            className="max-h-[85vh] md:max-h-[75vh] lg:max-h-[70vh] w-auto max-w-[95vw] md:max-w-[60vw] lg:max-w-[45vw] xl:max-w-[35vw] object-contain rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
