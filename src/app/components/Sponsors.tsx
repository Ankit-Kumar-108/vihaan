'use client';
import React from 'react';

const tiers = [
    {
        name: 'Platinum',
        icon: 'diamond',
        gradient: 'from-slate-300 via-white to-slate-300 dark:from-slate-400 dark:via-slate-200 dark:to-slate-400',
        border: 'border-slate-300 dark:border-slate-500',
        count: 2,
    },
    {
        name: 'Gold',
        icon: 'emoji_events',
        gradient: 'from-yellow-400 via-amber-300 to-yellow-500',
        border: 'border-yellow-400/40',
        count: 3,
    },
    {
        name: 'Silver',
        icon: 'workspace_premium',
        gradient: 'from-slate-400 via-slate-300 to-slate-400',
        border: 'border-slate-300/40 dark:border-slate-600/40',
        count: 4,
    },
];

export default function Sponsors() {
    return (
        <section id="sponsors" className="relative z-10 py-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
                    <span className="material-symbols-outlined text-amber-500 text-sm">handshake</span>
                    <span className="text-xs font-bold text-amber-500 tracking-wide uppercase">Our Partners</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-3">
                    Backed by the{' '}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-yellow-600">
                        Best
                    </span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    We&apos;re grateful to our sponsors who make Vihaan 2k26 possible.
                </p>
            </div>

            {/* Tiers */}
            <div className="space-y-10">
                {tiers.map((tier) => (
                    <div key={tier.name}>
                        <div className="flex items-center gap-3 mb-5">
                            <span className={`material-symbols-outlined text-2xl bg-linear-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                                {tier.icon}
                            </span>
                            <h3 className={`text-xl font-bold bg-linear-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                                {tier.name} Sponsors
                            </h3>
                            <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Array.from({ length: tier.count }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`glass-card rounded-2xl h-28 flex items-center justify-center ${tier.border} hover:border-primary/40 transition-all duration-300 group cursor-pointer`}
                                >
                                    <div className="text-center">
                                        <span className="material-symbols-outlined text-3xl text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">
                                            add_business
                                        </span>
                                        <p className="text-[10px] text-slate-400 dark:text-slate-600 mt-1 font-semibold">
                                            Sponsor {i + 1}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-14 text-center">
                <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl p-6 sm:p-8">
                    <div className="text-center sm:text-left">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Interested in sponsoring?</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Reach 10,000+ students across 15+ colleges</p>
                    </div>
                    <a
                        href="mailto:sponsor@vihaan.fest"
                        className="px-8 py-3 rounded-full bg-linear-to-r from-amber-500 to-yellow-500 text-white font-bold text-sm hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all"
                    >
                        Become a Sponsor
                    </a>
                </div>
            </div>
        </section>
    );
}
