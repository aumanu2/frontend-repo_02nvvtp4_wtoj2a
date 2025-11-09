import React from 'react';
import { Rocket, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400">
            <Rocket size={18} />
          </span>
          <span className="text-white">faceless.videos</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="text-sm text-white/80 hover:text-white">Login</button>
          <button className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">
            <User size={16} /> Start free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
