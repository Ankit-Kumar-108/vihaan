'use client';
import React from 'react';

const schedule = [
    {
        day: 'Day 1',
        date: 'March 15, 2026',
        theme: 'The Ignition',
        events: [
            { time: '9:00 AM', title: 'Opening Ceremony', icon: 'flag' },
            { time: '10:30 AM', title: 'Debate — Prelims', icon: 'record_voice_over' },
            { time: '11:00 AM', title: 'Art Competition', icon: 'palette' },
            { time: '2:00 PM', title: 'Cricket — Group Stage', icon: 'sports_cricket' },
            { time: '4:00 PM', title: 'Poetry Slam', icon: 'edit_note' },
            { time: '7:00 PM', title: 'DJ Night', icon: 'headphones' },
        ],
        accent: 'from-primary to-violet-600',
    },
    {
        day: 'Day 2',
        date: 'March 16, 2026',
        theme: 'The Blaze',
        events: [
            { time: '9:00 AM', title: 'Hackathon Kickoff', icon: 'terminal' },
            { time: '10:00 AM', title: 'Badminton Tournament', icon: 'sports_tennis' },
            { time: '11:30 AM', title: 'Dance — Prelims', icon: 'settings_accessibility' },
            { time: '2:00 PM', title: 'Quiz Competition', icon: 'quiz' },
            { time: '3:30 PM', title: 'Race — Track Events', icon: 'directions_run' },
            { time: '6:00 PM', title: 'Fashion Show', icon: 'checkroom' },
        ],
        accent: 'from-secondary-accent to-rose-600',
    },
    {
        day: 'Day 3',
        date: 'March 17, 2026',
        theme: 'The Finale',
        events: [
            { time: '9:00 AM', title: 'Hackathon Judging', icon: 'terminal' },
            { time: '10:00 AM', title: 'Drama — Finals', icon: 'theater_comedy' },
            { time: '12:00 PM', title: 'Cricket — Finals', icon: 'sports_cricket' },
            { time: '2:00 PM', title: 'Music — Band Battle Finals', icon: 'music_note' },
            { time: '4:00 PM', title: 'Dance — Grand Finale', icon: 'settings_accessibility' },
            { time: '7:00 PM', title: 'Pro Night & Awards', icon: 'emoji_events' },
        ],
        accent: 'from-amber-500 to-orange-600',
    },
];

export default function Timeline() {
    return (
        <section id="schedule" className="relative z-10 py-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <span className="material-symbols-outlined text-primary text-sm">calendar_month</span>
                    <span className="text-xs font-bold text-primary tracking-wide uppercase">Festival Schedule</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-3">
                    Three Days of{' '}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary/70 to-secondary-accent/70">
                        Non-Stop Action
                    </span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    Plan your Vihaan experience — here&apos;s what&apos;s happening each day.
                </p>
            </div>

            {/* Timeline Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                {schedule.map((day) => (
                    <div key={day.day} className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                        {/* Day Header */}
                        <div className={`bg-linear-to-r ${day.accent} p-6`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-black text-white">{day.day}</h3>
                                    <p className="text-white/70 text-sm font-medium">{day.date}</p>
                                </div>
                                <span className="text-white/80 text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                    {day.theme}
                                </span>
                            </div>
                        </div>

                        {/* Events List */}
                        <div className="p-5 space-y-0">
                            {day.events.map((event, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 py-3 border-b border-slate-100 dark:border-white/5 last:border-0"
                                >
                                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary text-lg">{event.icon}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-slate-800 dark:text-white truncate">{event.title}</p>
                                    </div>
                                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 shrink-0">
                                        {event.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
