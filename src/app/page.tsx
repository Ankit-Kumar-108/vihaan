'use client';

import ThemeToggle from './components/ThemeToggle';

export default function VihaanFestival() {
  return (
    <>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col transition-colors duration-300">
        {/* Navigation */}
        <header className="sticky top-0 z-40 w-full dark:bg-black/40 bg-primary/10 backdrop-blur-[5px] border-b-0 border-b-[#482336]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div className="flex gap-1.5 ">
                  <h2 className="text-slate-900 dark:text-white sm:text-2xl text-lg font-extrabold tracking-tight">Vihaan 26</h2>
                  <span  className='lg:hidden'>
                   <h2 className="text-[10px] -mt-1.5 text-transparent bg-clip-text font-bold bg-linear-to-r from-primary to-secondary-accent">Organised By RGI</h2> 
                  </span>
                  <span className='hidden lg:flex'>
                  <h2 className="text-[15px] -mt-2 text-transparent bg-clip-text font-bold bg-linear-to-r from-primary to-secondary-accent">Organised By Radharaman Group of Institutes</h2>
                  </span>
                </div>
              </div>
              <nav className="hidden md:flex gap-8 items-center">
                <a className="text-slate-800 dark:text-slate-200 hover:text-primary transition-colors text-sm font-bold" href="#">Home</a>
                <a className="text-slate-800 dark:text-slate-200 hover:text-primary transition-colors text-sm font-bold" href="#">Events</a>
                <a className="text-slate-800 dark:text-slate-200 hover:text-primary transition-colors text-sm font-bold" href="#">Gallery</a>
                </nav>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <button className="hidden sm:flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(238,43,140,0.4)] hover:shadow-[0_0_25px_rgba(238,43,140,0.6)]">
                  Register Now
                </button>
                <button className="md:hidden text-slate-800 dark:text-white p-2">
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="grow relative">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20"></div>
            <div className="absolute top-20 right-[-10%] w-125 h-125 bg-secondary-accent/20 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
            <div className="absolute bottom-0 left-[-10%] w-150 h-150 bg-primary/10 rounded-full blur-[120px] mix-blend-screen"></div>
          </div>

          {/* Hero Section */}
          <section className="relative z-10 pt-12 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-300 tracking-wide uppercase">Official Fest Landing</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-slate-900 via-slate-700 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-500 leading-[1.1] tracking-tight drop-shadow-lg">
                  UNLEASH <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary-accent to-primary">THE ENERGY</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  The ultimate fusion of art, tech, and adrenaline. Join us for the biggest college festival of the year.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <button className="flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-[0_0_20px_rgba(238,43,140,0.5)] hover:scale-105 transition-transform">
                    <span>Discover Events</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-base font-bold backdrop-blur-sm transition-colors">
                    <span>Watch Teaser</span>
                    <span className="material-symbols-outlined text-[20px]">play_circle</span>
                  </button>
                </div>

                {/* Countdown */}
                <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start pt-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-20 sm:w-20 sm:h-24 bg-linear-to-b from-slate-100 to-slate-200 dark:from-[#1a1c3a] dark:to-[#050714] border border-primary/20 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                      <span className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white z-10">04</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Days</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-20 sm:w-20 sm:h-24 bg-linear-to-b from-slate-100 to-slate-200 dark:from-[#1a1c3a] dark:to-[#050714] border border-primary/20 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                      <span className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white z-10">12</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Hours</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-20 sm:w-20 sm:h-24 bg-linear-to-b from-slate-100 to-slate-200 dark:from-[#1a1c3a] dark:to-[#050714] border border-primary/20 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                      <span className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white z-10">30</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Mins</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="flex-1 w-full max-w-150 lg:max-w-none relative group perspective-1000">
                <div className="absolute -inset-4 bg-linear-to-r from-secondary-accent via-primary to-secondary-accent rounded-[2.5rem] opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#1a0c13] aspect-4/3 rotate-y-6 hover:rotate-0 transition-all duration-500 ease-out">
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                    data-alt="Excited crowd at a night concert with colorful stage lights and confetti"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFqiaiuC90Vm6Uy0to4KaJbTIunUAo0KGe93DZ0DoVm9u2HDu2r491UlJe-peaqVlXBrtlACU-SKktCAZucutpd7beeAAEF7Bos6Ehu8-sjzZisAeR5hg1FGWFY21_Y81NdzdoDJTN6kS31pFcBJvuMrzEaCMF-YvYC3MrpvRcTE02220CziD8AoV7sZXA50gd4ZKAlrPSjI77OOicfMU9dTOB9lPvMTCQquusswlyANDhM9oMeIA2ioZgRb50ltlAG66cyTqZtTbh')" }}
                  ></div>
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="glass-panel p-4 rounded-xl flex items-center justify-between">
                      <div>
                        <p className="text-primary text-xs font-bold uppercase mb-1">Featured Event</p>
                        <h3 className="text-white font-bold text-lg">Neon Nights Concert</h3>
                      </div>
                      <button className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-slate-200 transition-colors">
                        <span className="material-symbols-outlined">arrow_outward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Category Section */}
          <section className="relative z-10 py-12 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="group relative overflow-hidden rounded-2xl h-40 bg-slate-100 dark:bg-[#1a1c3a] border border-primary/10 hover:border-primary/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-full flex flex-col items-center justify-center gap-3 p-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">music_note</span>
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">Music</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl h-40 bg-slate-100 dark:bg-[#1a1c3a] border border-primary/10 hover:border-primary/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-full flex flex-col items-center justify-center gap-3 p-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">theater_comedy</span>
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">Dance</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl h-40 bg-slate-100 dark:bg-[#1a1c3a] border border-primary/10 hover:border-primary/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-full flex flex-col items-center justify-center gap-3 p-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">sports_basketball</span>
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">Sports</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl h-40 bg-slate-100 dark:bg-[#1a1c3a] border border-primary/10 hover:border-primary/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-full flex flex-col items-center justify-center gap-3 p-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">campaign</span>
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">Debate</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights Section */}
          <section className="relative z-10 py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">Festival Highlights</h2>
                <p className="text-slate-500 dark:text-slate-400">Capturing the best moments from Vihaan '23</p>
              </div>
              <button className="hidden md:flex text-primary font-bold items-center gap-1 hover:gap-2 transition-all">
                View Full Gallery <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
              <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Close up of a guitarist performing on stage with red lighting"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7cqRk1F-_iXbiOJEV_r7O4p1pSxGkxvcSVOxcr_dpU8p1xeZzJ9lHNonrv_wE1mqyIYB0y2SphnpFelY1kLTUgkflxZV22vtEmfCLqY_gBXxxg45laoW0j4RLLGKvyJczvc1D1kXMk5mr4eHBr1KMhX1IT3l4ly9Bx_KADQ1aNs0tBNGwu0b32m74uHBIV_2vwKjVIC-Jl3aQOu38AmHJ4LKGQpIztF7Goa4gkbu9PxecPgySd9C9Kukv5zq1LGBNbbYaSrXKWTdU')" }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-md mb-2 inline-block">Pro Night</span>
                  <h3 className="text-white text-2xl font-bold">Battle of the Bands Finale</h3>
                </div>
              </div>
              <div className="md:row-span-2 relative group rounded-2xl overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Silhouette of a hip hop dancer performing a jump in the air"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAv47UrY86X6pyuwIup-4ag0ufjfK37WOkPd_hN7MZ-44BlKawb77ffXAToIjNPQOio6vfQe1ZLFRSkjscsHEQT0EdLFn-0o8LbmVQjtlyfkyuwPPoREz_dlNkaAHFI4OCr-X3XHOzMy1dfPkld0h7LSwlthDxSxRt_vfmcchjlj4j6FRV9XH04mmxg1eOTbCYKrVDpwuJmFkhQE0sni7hsbMwzNka82WWgoKUmni0DuoKh8rC6ZXlHGjScZEYjtlVPQPvpBbqx0CZF')" }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-md mb-2 inline-block">Dance</span>
                  <h3 className="text-white text-xl font-bold">Street Dance Face-off</h3>
                </div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="People sitting around tables with laptops at a hackathon event"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4VfSlGqwRvllj5W5Hv9UBxREJw20wRAU2BUO3vl-Z6sQiNk6Px7rt6n-_X-9ipVGM19ibwuvhwAX8Bp4KJWHMeVniJ5Cq2bLErY65gK7pCAYSWhjm1KqR41A8v3DrU6WQ71fiK87NAiSXAYBDPq3UGg3YQIh_aMdcxPmH95ntWtnt7VAgCvmZK7qPOsl2Jb2EkIDWOcxICC3OyNQ18SmcLa27j5IiHF42jso5xcEqhAitXsQuqF4_e7YIOOCnEtafbPatXUshYKvO')" }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-md mb-2 inline-block">Tech</span>
                  <h3 className="text-white text-lg font-bold">24H Hackathon</h3>
                </div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Colorful abstract fashion show runway with models"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKGOQX2rCTpYJ4dYF099iN6YpR3SZIsdxPkqUtqW4Hr_wUCvM7qmk80cg2mz9aVkAIzoBEpoTI9X_SHyFAOITFAF9OEMDx7yqmVGkjv1r6q0PxosMxQJGfFSRotm7dkEF1qbCLfvY1FrRDBb8JMYuspaff_kWjx45oLmRyPmN2lpnOjVo5b_k6luqsDBZ1UErLBoza7h1wmDElEWujUbd9xTxEqhP1YyqEcLLzDS8G4cRjw5lVZXPuknCBHYBkSEXhfO0RYjoYyfB5')" }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-md mb-2 inline-block">Fashion</span>
                  <h3 className="text-white text-lg font-bold">Vogue Runway</h3>
                </div>
              </div>
            </div>
            <button className="md:hidden w-full mt-6 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
              View Full Gallery
            </button>
          </section>
          {/* for photo sumission */}
          <div>

          </div>

        </main>

        {/* Footer */}
        <footer className="border-t border-primary/10 bg-slate-50 dark:bg-[#02030a] pt-12 pb-8 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-sm">bolt</span>
                  </div>
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold">Vihaan 2k26</h3>
                </div>
                <p className="text-slate-500 max-w-sm mb-6">
                  The annual cultural and technical festival that brings together the brightest minds and the wildest spirits.
                </p>
                <div className="flex gap-4">
                  <a className="h-10 w-10 rounded-full bg-slate-200 dark:bg-[#1a1c3a] flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">public</span>
                  </a>
                  <a className="h-10 w-10 rounded-full bg-slate-200 dark:bg-[#1a1c3a] flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </a>
                  <a className="h-10 w-10 rounded-full bg-slate-200 dark:bg-[#1a1c3a] flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">mail</span>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-4">Explore</h4>
                <ul className="space-y-2 text-slate-500">
                  <li><a className="hover:text-primary transition-colors" href="#">Events Schedule</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Sponsors</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Campus Ambassadors</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-slate-500">
                  <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Code of Conduct</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#2d1b24] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
              <p>© 2026 Vihaan Festival. All rights reserved.</p>
              <p className="flex items-center gap-1">Designed with <span className="material-symbols-outlined text-xs text-primary">favorite</span> by Tech Team</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}