import {
  Home as HomeIcon,
  Search,
  LibraryBig,
  ChevronLeft,
  ChevronRight,
  Play,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize,
} from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-4">
            <a
              href=""
              className="flex items-center gap-3 font-semibold text-sm text-zinc-200 "
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 font-semibold text-sm text-zinc-200 "
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 font-semibold text-sm text-zinc-200 "
            >
              <LibraryBig />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Relaxing Evening
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Morning Motivation
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Focus & Study
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Road Trip Hits
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Feel-Good Indie
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Workout Pump
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Dinner Party
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Summer Vibes
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Throwback Classics
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Chill Acoustic
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Latin Rhythms
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Jazz & Blues
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Electronic Beats
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rock Anthems
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Lofi Hip Hop
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full p-2 bg-black/40 hover:text-white hover:bg-black/80">
              <ChevronLeft />
            </button>
            <button className="rounded-full p-2 bg-black/40 hover:text-white hover:bg-black/80">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl text-zinc-100 mt-10">
            Good afternoon!
          </h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white/10 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/Abbey_Road.jpg" width={104} height={104} alt="Album" />
              <strong>Abbey Road</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="currentColor" />
              </button>
            </div>
            <div className="bg-white/10 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/Abbey_Road.jpg" width={104} height={104} alt="Album" />
              <strong>Abbey Road</strong>
              <button className="p-2 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible">
                <Play fill="currentColor"/>
              </button>
            </div>
            <div className="bg-white/10 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/Abbey_Road.jpg" width={104} height={104} alt="Album" />
              <strong>Abbey Road</strong>
              <button className="p-2 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible">
                <Play fill="currentColor"/>
              </button>
            </div>
            <div className="bg-white/10 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/Abbey_Road.jpg" width={104} height={104} alt="Album" />
              <strong>Abbey Road</strong>
              <button className="p-2 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible">
                <Play fill="currentColor"/>
              </button>
            </div>
            <div className="bg-white/10 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/Abbey_Road.jpg" width={104} height={104} alt="Album" />
              <strong>Abbey Road</strong>
              <button className="p-2 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible">
                <Play fill="currentColor"/>
              </button>
            </div>
            <div className="bg-white/10 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/Abbey_Road.jpg" width={104} height={104} alt="Album" />
              <strong>Abbey Road</strong>
              <button className="p-2 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible">
                <Play fill="currentColor"/>
              </button>
            </div>
            <div className="bg-white/10 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/Abbey_Road.jpg" width={104} height={104} alt="Album" />
              <strong>Abbey Road</strong>
              <button className="p-2 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible">
                <Play fill="currentColor"/>
              </button>
            </div>
            <div className="bg-white/10 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/Abbey_Road.jpg" width={104} height={104} alt="Album" />
              <strong>Abbey Road</strong>
              <button className="p-2 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible">
                <Play fill="currentColor"/>
              </button>
            </div>
            <div className="bg-white/10 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/Abbey_Road.jpg" width={104} height={104} alt="Album" />
              <strong>Abbey Road</strong>
              <button className="p-2 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible">
                <Play fill="currentColor"/>
              </button>
            </div>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Ângelo Bezerra
          </h2>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <a className="bg-white/5 p-4 rounded-md flex flex-col hover:bg-white/10">
              <img
                src="/Abbey_Road.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Album"
              />
              <strong className="font-semibold mt-4">Daily Mix 1</strong>
              <span className="text-sm mt-2 text-zinc-500">
                The Beatles, Rubel and more
              </span>
            </a>
            <a className="bg-white/5 p-4 rounded-md flex flex-col hover:bg-white/10">
              <img
                src="/Abbey_Road.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Album"
              />
              <strong className="font-semibold mt-4">Daily Mix 1</strong>
              <span className="text-sm mt-2 text-zinc-500">
                The Beatles, Rubel and more
              </span>
            </a>
            <a className="bg-white/5 p-4 rounded-md flex flex-col hover:bg-white/10">
              <img
                src="/Abbey_Road.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Album"
              />
              <strong className="font-semibold mt-4">Daily Mix 1</strong>
              <span className="text-sm mt-2 text-zinc-500">
                The Beatles, Rubel and more
              </span>
            </a>
            <a className="bg-white/5 p-4 rounded-md flex flex-col hover:bg-white/10">
              <img
                src="/Abbey_Road.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Album"
              />
              <strong className="font-semibold mt-4">Daily Mix 1</strong>
              <span className="text-sm mt-2 text-zinc-500">
                The Beatles, Rubel and more
              </span>
            </a>
            <a className="bg-white/5 p-4 rounded-md flex flex-col hover:bg-white/10">
              <img
                src="/Abbey_Road.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Album"
              />
              <strong className="font-semibold mt-4">Daily Mix 1</strong>
              <span className="text-sm mt-2 text-zinc-500">
                The Beatles, Rubel and more
              </span>
            </a>
            <a className="bg-white/5 p-4 rounded-md flex flex-col hover:bg-white/10">
              <img
                src="/Abbey_Road.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Album"
              />
              <strong className="font-semibold mt-4">Daily Mix 1</strong>
              <span className="text-sm mt-2 text-zinc-500">
                The Beatles, Rubel and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div>
          <img src="/Abbey_Road.jpg" width={56} height={56} alt="Album" />
          <div className="flex flex-col gap-1">
            <div className="font-normaL mt-1">The Beatles</div>
            <span className="text-sm text-zinc-400">Let it be</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-300" />
            <SkipBack size={20} className="text-zinc-300" />
            <button className="p-2 rounded-full bg-white text-black">
              <Play fill="currentColor"/>
            </button>
            <SkipForward size={20} className="text-zinc-300" />
            <Repeat size={20} className="text-zinc-300" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 text-xs">0:31</span>
            <div className="h-1 w-96 rounded-full bg-zinc-600">
              <div className="h-1 w-40 rounded-full bg-zinc-200"></div>
            </div>
            <span className="text-zinc-400 text-xs">5:21</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 w-24 rounded-full bg-zinc-600">
              <div className="h-1 w-10 rounded-full bg-zinc-200"></div>
            </div>
          </div>
          <Maximize size={20} />
        </div>
      </footer>
    </div>
  );
}
