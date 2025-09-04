import React from 'react';
import { Video, Code2, Users, Briefcase, ChevronRight } from 'lucide-react';

const StepCard = ({ icon: Icon, title, subtitle, accent, children }) => (
  <div className="group relative rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-6 hover:border-white/20 transition-colors">
    <div className={`absolute inset-0 rounded-2xl ${accent} opacity-20 blur-2xl`} />
    <div className="relative flex items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
        <Icon className="text-white/90" size={22} />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-white/60 text-sm">{subtitle}</p>
      </div>
    </div>
    <div className="relative mt-5">
      {children}
    </div>
  </div>
);

const DeviceMock = ({ children }) => (
  <div className="rounded-2xl border border-white/10 bg-[#0f0f18] overflow-hidden shadow-2xl shadow-black/40">
    <div className="flex items-center gap-1 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
    </div>
    <div className="p-5">{children}</div>
  </div>
);

export default function Steps() {
  return (
    <section id="how-it-works" className="relative py-20 bg-[#0b0b12]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold">Your 4-Step Path to an Offer</h2>
            <p className="mt-3 text-white/70 max-w-2xl">From a secret masterclass to real interviews. No fluff, just a straight line to outcomes.</p>
          </div>
          <a href="#ticket" className="inline-flex items-center gap-2 text-violet-300 hover:text-white transition-colors">
            Get Pass <ChevronRight size={18} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StepCard icon={Video} title="Live Secret Masterclass" subtitle="with Legendary Manas Kumar Verma" accent="bg-fuchsia-600">
            <DeviceMock>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-2xl font-bold">MKV</div>
                <div>
                  <h4 className="font-semibold">One Topic. One Hour. Zero Distractions.</h4>
                  <p className="text-white/70 text-sm mt-1">A laser-focused deep dive on a secret algorithmic topic. Learn the patterns, the pitfalls, and how to use it in interviews.</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/60">
                <span className="px-2 py-1 rounded bg-white/5">Code Walkthrough</span>
                <span className="px-2 py-1 rounded bg-white/5">Patterns</span>
                <span className="px-2 py-1 rounded bg-white/5">Complexity</span>
              </div>
            </DeviceMock>
          </StepCard>

          <StepCard icon={Code2} title="Online Assessment" subtitle="Prove your mastery on the spot" accent="bg-violet-600">
            <DeviceMock>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Challenge</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Live</span>
              </div>
              <div className="mt-3 rounded-xl border border-white/10 bg-black/40 p-4">
                <code className="text-white/80 text-xs sm:text-sm leading-relaxed block whitespace-pre-wrap">{`function solve(input) {\n  // Apply secret strategy from the class\n  const res = computeOptimally(input)\n  return res\n}`}</code>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-white/60">
                <span>Time: 60 min</span>
                <span>Auto-graded</span>
              </div>
            </DeviceMock>
          </StepCard>

          <StepCard icon={Users} title="Mentor/HR Pairing" subtitle="Get noticed. Get shortlisted." accent="bg-indigo-600">
            <DeviceMock>
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://images.unsplash.com/photo-15${60+i}38329847-593b36b18ba1?auto=format&fit=crop&w=80&q=60`} alt="avatar" className="w-10 h-10 rounded-full ring-2 ring-[#0f0f18] object-cover" />
                ))}
              </div>
              <p className="mt-3 text-white/70 text-sm">Top mentors and hiring partners review your performance and fast-track your profile to the right teams.</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white/70">
                <span className="px-2 py-1 rounded bg-white/5">Profile Boost</span>
                <span className="px-2 py-1 rounded bg-white/5">Skill Mapping</span>
              </div>
            </DeviceMock>
          </StepCard>

          <StepCard icon={Briefcase} title="Interview & Get Hired" subtitle="Real interviews with real teams" accent="bg-emerald-600">
            <DeviceMock>
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Final Interview</h4>
                    <p className="text-white/60 text-sm">Panel: 2 Engineers + 1 HM</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs">Fast-track</span>
                </div>
                <div className="mt-3 text-sm text-white/70">
                  Expect technical deep-dives, system thinking, and role-alignment. If you prepared — this is your moment.
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-emerald-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Offer-ready candidates prioritized
              </div>
            </DeviceMock>
          </StepCard>
        </div>

        <TicketCTA />
      </div>
    </section>
  );
}

const TicketCTA = () => (
  <div id="ticket" className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
    <div className="lg:col-span-2">
      <h3 className="text-2xl sm:text-3xl font-bold">Numbers that matter</h3>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { stat: '25k+', label: 'Learners impacted' },
          { stat: '300+', label: 'Hiring partners' },
          { stat: '92%', label: 'Assessment participation' },
          { stat: '10-30L', label: 'CTC bands' },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">{s.stat}</div>
            <div className="text-white/60 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="relative">
      <div className="absolute inset-0 -z-[0] bg-violet-600/20 blur-2xl rounded-3xl" />
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#121225] to-[#0b0b12]">
        <div className="p-5 flex items-center justify-between border-b border-dashed border-white/15">
          <div>
            <div className="text-xs text-white/50">Tournament Pass</div>
            <div className="text-xl font-semibold">AlgoUniversity Hiring Tournament</div>
            <div className="text-white/60 text-sm mt-1">21st September • Online</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">₹499</div>
            <div className="text-xs text-emerald-300">Limited Seats</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0b0b12] rounded-full border border-white/10" />
          <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0b0b12] rounded-full border border-white/10" />
          <div className="p-5">
            <ul className="text-sm text-white/80 space-y-2 list-disc list-inside">
              <li>Live class by Manas Kumar Verma</li>
              <li>Assessment + leaderboard</li>
              <li>Mentor/HR pairing & shortlisting</li>
              <li>Fast-track interviews with partners</li>
            </ul>
            <a href="#partners" className="inline-flex mt-5 w-full items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 transition-colors text-white font-semibold px-5 py-3 rounded-xl">
              Buy Ticket & Meet Partners <ChevronRight size={18} />
            </a>
            <div className="mt-3 text-[11px] text-white/50 text-center">Instant confirmation • No refunds • Seat is transferable</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);