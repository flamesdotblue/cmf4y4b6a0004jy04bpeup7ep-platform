import React from 'react';
import { Star } from 'lucide-react';

const mentors = [
  {
    name: 'Manas Kumar Verma',
    title: 'Legendary Instructor • AlgoUniversity',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=900&q=60',
    bio: 'Known for surgical clarity in algorithms and interview prep. Has mentored thousands into FAANG+ roles.'
  },
  {
    name: 'Aisha Rahman',
    title: 'Senior Engineer • Stripe',
    img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=900&q=60',
    bio: 'Payment systems specialist. Passionate about distributed systems, code quality, and mentoring.'
  },
  {
    name: 'Rohit Menon',
    title: 'Hiring Manager • Microsoft',
    img: 'https://images.unsplash.com/photo-1547425260-4efcba2a6c98?auto=format&fit=crop&w=900&q=60',
    bio: 'Leads teams building developer tooling. Champions signal over noise in hiring.'
  },
  {
    name: 'Elena García',
    title: 'Staff Engineer • Netflix',
    img: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?auto=format&fit=crop&w=900&q=60',
    bio: 'Specializes in large-scale content systems. Brings practical interview frameworks that work.'
  },
];

export default function Mentors() {
  return (
    <section className="relative py-20 bg-[#0b0b12]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-10 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <h3 className="text-3xl sm:text-5xl font-bold">World-class Mentors</h3>
            <p className="mt-3 text-white/70 max-w-2xl">A masterclass-grade faculty to sharpen your edge and open doors. This is your unfair advantage.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m) => (
            <article key={m.name} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={m.img} alt={m.name} className="h-56 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-1 text-amber-300">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h4 className="mt-2 text-lg font-semibold">{m.name}</h4>
                <p className="text-white/60 text-sm">{m.title}</p>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
