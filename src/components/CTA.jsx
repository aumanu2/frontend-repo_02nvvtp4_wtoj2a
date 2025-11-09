import React from 'react';

const CTA = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Start creating faceless videos today</h3>
        <p className="mt-3 text-white/70">
          No credit card required. Generate your first 3 videos for free.
        </p>
        <div className="mt-8 inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
          <a href="#" className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90">Get started</a>
          <a href="#" className="px-6 py-3 rounded-lg text-white hover:bg-white/10">Contact sales</a>
        </div>
        <p className="mt-4 text-xs text-white/50">By continuing you agree to our Terms and Privacy.</p>
      </div>
    </section>
  );
};

export default CTA;
