import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient aura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),rgba(59,130,246,0.15)_35%,rgba(251,146,60,0.1)_60%,transparent_70%)] blur-2xl" />

      {/* Spline Animation */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh]">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-purple-400 via-blue-300 to-orange-300">
          Create faceless AI videos in minutes
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 text-base sm:text-lg">
          Turn scripts into studio-quality videos with AI voices, captions, and dynamic layouts.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90">
            Generate your first video
          </a>
          <a href="#demo" className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Watch demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
