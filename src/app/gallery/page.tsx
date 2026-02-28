"use client"
import React from 'react'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import GetPhoto from '../admin/getPhoto'
import { useState } from 'react'

export default function Gallery() {
  const [photo, setPhoto] = useState()
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col transition-colors duration-300">
      <Nav />
      <main className="grow flex justify-center items-center">
        <h1 className="text-4xl font-bold">Gallery</h1>

      </main>
      <Footer />
    </div>
  )
}
