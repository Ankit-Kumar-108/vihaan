'use client';
import Link from "next/link";
import { useRef, useEffect } from "react";

interface WinnerData {
  category: string;
  winnerName: string;
  imageUrl?: string;
}

interface WinnersCarouselProps {
  winners: WinnerData[];
}

const CATEGORIES = [
  "Gully Cricket", "Tug Of War", "Badminton", "Carrom", "Chess", "Arm Wrestling",
  "Kho Kho", "Kabbadi", "Treasure Hunt", "Slow Bike Race", "Shot Put", "Sports Parade",
  "Lemon Spoon Race", "Volleyball", "Race (100M)", "Race(200M)", "Technical Presentation",
  "Painting", "Reels", "Extempore", "Debate", "Model Presentation", "Photography",
  "LAN Gaming", "Poster Making", "Quiz (General)", "Quiz (Technical)", "Nail Painting",
  "Face Painting", "Mehndi", "Rangoli", "Singing(Solo)", "Singing(Duet)", "Dance(Solo)",
  "Dance(Duet)", "Mimicry", "Skit", "Fashion Show", "Poetry (Self Composed)"
];

function WinnerCard({ catName, winners, suffix = '' }: { catName: string; winners: WinnerData[]; suffix?: string }) {
  const href = `events/${catName.replace(/[^a-zA-Z0-9]/g, '-')}-Winner`;
  const winnerInfo = winners.find((w) => w.category === catName);

  return (
    <Link key={`${catName}${suffix}`} href={href} aria-hidden={suffix === '-copy' ? 'true' : undefined}>
      <div className="z-20 group relative rounded-2xl h-67 w-52 cursor-pointer transition-all shrink-0 duration-300 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="absolute z-10 bg-linear-to-br h-57 w-47 left-2 top-4 bg-white dark:bg-black"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img loading="lazy" src="/images/Frame.png" alt="Frame Image" className="absolute w-full h-full z-50 object-cover pointer-events-none" />
        {winnerInfo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img loading="lazy" src={winnerInfo.imageUrl} alt={`${catName} Winner`} className="absolute z-10 bg-linear-to-br h-57 w-47 left-2 top-4 object-cover rounded-2xl" />
        ) : (
          <div className="absolute z-10 text-7xl top-[30%] left-[38%] font-bold">?</div>
        )}
        <div className="absolute bottom-7 left-5 bg-black/30 w-43.75 -mt-2 pb-4 z-40">
          <div className="font-bold text-white pl-4 text-md">
            {winnerInfo ? winnerInfo.winnerName : 'To be announced'}
          </div>
          <div className="font-bold text-purple-500 pl-4 text-sm">{catName}</div>
        </div>
      </div>
    </Link>
  );
}

export default function WinnersCarousel({ winners }: WinnersCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHover = useRef<boolean>(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollInterval = setInterval(() => {
      if (!isHover.current) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    }, 20);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="relative z-10 py-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="p-3 mb-7">
        <h2 className="font-bold text-2xl md:text-5xl mb-3">Winners of Vihan 2026</h2>
        <p className="text-slate-500 dark:text-slate-400">Top of the Line</p>
      </div>
      <div
        ref={scrollRef}
        onMouseEnter={() => (isHover.current = true)}
        onMouseLeave={() => (isHover.current = false)}
        className="flex gap-7 overflow-x-scroll no-scrollbar"
      >
        {/* Block 1 */}
        {CATEGORIES.map((catName) => (
          <WinnerCard key={catName} catName={catName} winners={winners} />
        ))}
        {/* Block 2 (infinite scroll copy) */}
        {CATEGORIES.map((catName) => (
          <WinnerCard key={`${catName}-copy`} catName={catName} winners={winners} suffix="-copy" />
        ))}
      </div>
    </section>
  );
}
