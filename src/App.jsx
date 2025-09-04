import React from 'react';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Partners from './components/Partners';
import Mentors from './components/Mentors';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white font-inter">
      <Hero />
      <Steps />
      <Partners />
      <Mentors />
    </div>
  );
}
