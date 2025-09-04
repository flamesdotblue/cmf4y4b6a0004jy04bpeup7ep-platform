import React from 'react';

const logos = [
  { name: 'Google', url: 'https://brandlogos.net/wp-content/uploads/2016/06/Google-logo-1.png' },
  { name: 'Amazon', url: 'https://brandlogos.net/wp-content/uploads/2016/06/amazon-logo-1.png' },
  { name: 'Microsoft', url: 'https://brandlogos.net/wp-content/uploads/2016/06/microsoft-logo.png' },
  { name: 'Netflix', url: 'https://brandlogos.net/wp-content/uploads/2022/02/netflix_brandlogo.net_.png' },
  { name: 'Uber', url: 'https://brandlogos.net/wp-content/uploads/2021/11/uber-brandlogo.net_.png' },
  { name: 'Airbnb', url: 'https://brandlogos.net/wp-content/uploads/2016/10/Airbnb-logo.png' },
  { name: 'Adobe', url: 'https://brandlogos.net/wp-content/uploads/2015/09/Adobe-logo.png' },
  { name: 'PayPal', url: 'https://brandlogos.net/wp-content/uploads/2015/09/paypal-logo.png' },
  { name: 'Stripe', url: 'https://brandlogos.net/wp-content/uploads/2016/12/stripe-logo.png' },
  { name: 'Shopify', url: 'https://brandlogos.net/wp-content/uploads/2016/10/shopify-logo.png' },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-16 bg-[#0b0b12]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">Hiring Partners</h3>
            <p className="mt-2 text-white/70">A growing network of product companies and startups joining the tournament.</p>
          </div>
        </div>

        <div className="relative mt-8 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0b12] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0b12] to-transparent pointer-events-none" />
          <div className="flex items-center gap-12 py-8" style={{ width: '200%', animation: 'marquee 25s linear infinite' }}>
            {[...logos, ...logos].map((logo, idx) => (
              <div key={logo.name + idx} className="shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                <img src={logo.url} alt={logo.name} className="h-10 sm:h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
