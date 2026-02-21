import React from 'react'

export default function page() {
  return (
    <>
  <div className="bg-background-light dark:bg-background-dark bg-linear-to-tr from-primary/15 to-primary/5 text-slate-900 dark:text-slate-100 min-h-screen">
{/* <!-- Header Section --> */}
<header className="fixed top-0 w-full z-50 backdrop-blur-3xl glass-card  border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-primary/20 rounded-lg">
<span className="material-symbols-outlined text-white text-3xl">account_balance</span>
</div>
<div>
<h1 className="text-xl font-extrabold tracking-tight text-white">RADHARAMAN</h1>
<p className="text-[10px] tracking-[0.2em] uppercase text-white font-bold">Group of Institute</p>
</div>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Vihaan Festival</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Guidelines</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Schedule</a>
<button className="bg-primary hover:bg-primary/80 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">Live Updates</button>
</nav>
</div>
</header>
<main className="pt-32 pb-20 px-4">
<div className="max-w-4xl mx-auto">
{/* <!-- Welcome Header --> */}
<div className="text-center mb-12">
<h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-white via-primary to-accent-blue bg-clip-text text-transparent"> Vihaan 2K26 Registration</h2>
<p className="text-slate-400 max-w-lg mx-auto">Ignite your passion and showcase your talent. Join the biggest cultural extravaganza of the year.</p>
</div>
{/* <!-- Progress Stepper --> */}
<div className="mb-12 relative">
<div className="flex justify-between items-center relative z-10">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-slate-900 glass-card border-2 border-primary flex items-center justify-center text-primary font-bold shadow-[0_0_15px_rgba(238,43,140,0.4)]">1</div>
<span className="text-xs font-bold text-primary">IDENTITY</span>
</div>
<div className="flex flex-col items-center gap-2 opacity-50">
<div className="w-12 h-12 rounded-full glass-card border-2 border-white/20 flex items-center justify-center text-white font-bold">2</div>
<span className="text-xs font-bold">EVENTS</span>
</div>
<div className="flex flex-col items-center gap-2 opacity-50">
<div className="w-12 h-12 rounded-full glass-card border-2 border-white/20 flex items-center justify-center text-white font-bold">3</div>
<span className="text-xs font-bold">TEAM</span>
</div>
<div className="flex flex-col items-center gap-2 opacity-50">
<div className="w-12 h-12 rounded-full glass-card border-2 border-white/20 flex items-center justify-center text-white font-bold">4</div>
<span className="text-xs font-bold">CONFIRM</span>
</div>
</div>
{/* <!-- Progress Line --> */}
<div className="absolute top-6 left-0 w-full h-0.5 bg-white/10 -z-0">
<div className="h-full bg-primary w-[12.5%] rounded-full shadow-[0_0_10px_#ee2b8c]"></div>
</div>
</div>
{/* <!-- Form Container --> */}
<div className="glass-card rounded-xl p-8 md:p-12 shadow-2xl border-white/5">
<form className="space-y-10">
{/* <!-- Step 1: Personal Details Section --> */}
<div className="space-y-8">
<div className="flex items-center gap-3 border-l-4 border-primary pl-4">
<h3 className="text-2xl font-bold">Personal Details</h3>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-300 ml-1">Full Name</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary">person</span>
<input className="w-full bg-background-dark/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-600" placeholder="John Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary">mail</span>
<input className="w-full bg-background-dark/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-600" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-300 ml-1">Student ID / Roll No</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary">badge</span>
<input className="w-full bg-background-dark/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-600" placeholder="RGI-2024-XXXX" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-300 ml-1">Department</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary">account_tree</span>
<select className="w-full bg-background-dark/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-200 appearance-none cursor-pointer">
<option>Select Department</option>
<option>Computer Science</option>
<option>Mechanical Engineering</option>
<option>Civil Engineering</option>
<option>Electrical Engineering</option>
<option>Electronics And Communication Engineering</option>
</select>
</div>
</div>
</div>
</div>
{/* <!-- Step 2: Event Selection (Preview) --> */}
<div className="space-y-8">
<div className="flex items-center gap-3 border-l-4 border-accent-blue pl-4">
<h3 className="text-2xl font-bold">Select Your Event</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass-card p-4 rounded-xl border border-white/10 hover:border-primary cursor-pointer transition-all group active:scale-95 bg-primary/5">
<div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white">music_note</span>
</div>
<h4 className="font-bold text-sm">Music</h4>
<p className="text-[10px] text-slate-400">Solo/Band</p>
</div>
<div className="glass-card p-4 rounded-xl border border-white/10 hover:border-accent-blue cursor-pointer transition-all group active:scale-95">
<div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center mb-3 group-hover:bg-accent-blue transition-colors">
<span className="material-symbols-outlined text-accent-blue group-hover:text-white">settings_accessibility</span>
</div>
<h4 className="font-bold text-sm">Dance</h4>
<p className="text-[10px] text-slate-400">classNameical/Pop</p>
</div>
<div className="glass-card p-4 rounded-xl border border-white/10 hover:border-purple-500 cursor-pointer transition-all group active:scale-95">
<div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3 group-hover:bg-purple-500 transition-colors">
<span className="material-symbols-outlined text-purple-500 group-hover:text-white">sports_basketball</span>
</div>
<h4 className="font-bold text-sm">Sports</h4>
<p className="text-[10px] text-slate-400">Indoor/Outdoor</p>
</div>
<div className="glass-card p-4 rounded-xl border border-white/10 hover:border-yellow-500 cursor-pointer transition-all group active:scale-95">
<div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-3 group-hover:bg-yellow-500 transition-colors">
<span className="material-symbols-outlined text-yellow-500 group-hover:text-white">record_voice_over</span>
</div>
<h4 className="font-bold text-sm">Debate</h4>
<p className="text-[10px] text-slate-400">English/Hindi</p>
</div>
</div>
</div>
{/* <!-- Step 3: Team Section --> */}
<div className="space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 border-l-4 border-secondary pl-4">
<h3 className="text-2xl font-bold">Add Team Members</h3>
</div>
<button className="text-primary flex items-center gap-1 font-bold text-sm hover:underline cursor-pointer" type="button">
<span className="material-symbols-outlined text-sm">add_circle</span> Add Member</button>
</div>
<div className="space-y-4">
{/* <!-- Team Member Row --> */}
<div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
<div className="flex-1 grid md:grid-cols-2 gap-4">
<input className="bg-transparent border-b border-white/20 py-2 focus:border-primary focus:ring-0 outline-none text-sm transition-all" placeholder="Member Name" type="text"/>
<input className="bg-transparent border-b border-white/20 py-2 focus:border-primary focus:ring-0 outline-none text-sm transition-all" placeholder="Member ID" type="text"/>
</div>
<button className="p-2 hover:bg-red-500/10 rounded-lg text-slate-500 hover:text-red-500 transition-colors cursor-pointer" type="button">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>
</div>
{/* <!-- Submit Area --> */}
<div className="pt-10 flex flex-col md:flex-row gap-4 items-center justify-between border-t border-white/10">
<div className="flex items-center gap-2 text-slate-400 text-sm">
<span className="material-symbols-outlined text-primary">verified</span>
<span>All fields are mandatory for individual events.</span>
</div>
<div className="flex gap-4 w-full md:w-auto">
<button className="flex-1 md:flex-none border border-white/10 hover:bg-white/5 px-10 py-4 rounded-full font-bold transition-all cursor-pointer" type="button">Save Draft</button>
<button className="flex-1 md:flex-none bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(238,43,140,0.3)] transition-all transform hover:-translate-y-1 cursor-pointer" type="submit">Next Step</button>
</div>
</div>
</form>
</div>
{/* <!-- Footer Meta --> */}
<div className="mt-12 text-center text-slate-500 text-sm space-y-4">
<p>© 2024 Radharaman Group of Institute. All Rights Reserved.</p>
<div className="flex justify-center gap-6">
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary transition-colors" href="#">Festival Terms</a>
<a className="hover:text-primary transition-colors" href="#">Technical Support</a>
</div>
</div>
</div>
</main>
{/* <!-- Background Elements --> */}
<div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]"></div>
</div>
</div>
</>
  )
}
