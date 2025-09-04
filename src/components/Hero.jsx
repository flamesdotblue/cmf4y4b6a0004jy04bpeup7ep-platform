import React from 'react';
import Spline from '@splinetool/react-spline';
import { Calendar, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0b0b12]/60 to-[#0b0b12] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 text-sm text-violet-300/90 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur">
          <Calendar size={16} />
          <span>21st September</span>
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
          AlgoUniversity Hiring Tournament
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/80">Learn. Code. Get Hired.</p>

        <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
          A high-intensity experience to learn a secret topic from the legendary Manas Kumar Verma, prove your skills,
          and fast-track into interviews with top tech companies. Elite, fair, and outcome-driven.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#ticket" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition-colors text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-violet-600/30">
            <Rocket size={18} />
            Get Your Tournament Pass
          </a>
          <a href="#partners" className="text-white/70 hover:text-white transition-colors underline/30 hover:underline">See Hiring Partners</a>
        </div>
      </div>
    </section>
  );
}
