import React from 'react';
import { Wand2, Subtitles, Waves, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'Script to video',
    desc: 'Paste your script and instantly generate scenes, B-roll, and timing.'
  },
  {
    icon: Waves,
    title: 'Ultra-realistic AI voices',
    desc: 'Choose from natural voices with emotion, emphasis, and pacing controls.'
  },
  {
    icon: Subtitles,
    title: 'Auto captions & branding',
    desc: 'On-brand fonts, colors, and animations with burned-in captions.'
  },
  {
    icon: Sparkles,
    title: 'Faceless templates',
    desc: 'Modern layouts optimized for TikTok, Reels, YouTube Shorts.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Everything you need to ship videos fast</h2>
          <p className="mt-3 text-white/70">Streamlined tools to go from idea to publish-ready output in minutes.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 text-black">
                <Icon size={20} className="text-black" />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
