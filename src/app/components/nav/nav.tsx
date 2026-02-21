"use client"
import React from 'react'
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
export default function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full dark:bg-black/40 bg-primary/10 backdrop-blur-[5px] border-b-0 border-b-[#482336]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div className="flex gap-1.5 ">
              <h2 className="text-slate-900 dark:text-white sm:text-2xl text-lg font-extrabold tracking-tight">Vihaan 26</h2>
              <span className='lg:hidden'>
                <h2 className="text-[10px] -mt-1.5 text-transparent bg-clip-text font-bold bg-linear-to-r from-primary to-secondary-accent">Organised By RGI</h2>
              </span>
              <span className='hidden lg:flex'>
                <h2 className="text-[15px] -mt-2 text-transparent bg-clip-text font-bold bg-linear-to-r from-primary to-secondary-accent">Organised By Radharaman Group of Institutes</h2>
              </span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link className="text-slate-800 dark:text-slate-200 hover:text-primary transition-colors text-sm font-bold" href="/">Home</Link>
            <Link className="text-slate-800 dark:text-slate-200 hover:text-primary transition-colors text-sm font-bold" href="/events">Events</Link>
            <Link className="text-slate-800 dark:text-slate-200 hover:text-primary transition-colors text-sm font-bold" href="/gallery">Gallery</Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/register" className="hidden sm:flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(238,43,140,0.4)] hover:shadow-[0_0_25px_rgba(238,43,140,0.6)]">
              Register Now
            </Link>
            <button className="md:hidden text-slate-800 dark:text-white p-2">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
