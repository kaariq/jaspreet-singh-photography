import React from 'react';

function Shell({ title, updated, children }) {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="font-serif text-3xl sm:text-4xl text-ink mb-2">{title}</h1>
      <p className="text-xs text-muted mb-8">Last updated: {updated}</p>
      <div className="prose prose-sm sm:prose-base max-w-none text-ink/80 space-y-4 leading-relaxed">
        {children}
      </div>
    </main>
  );
}

export function PrivacyPolicy() {
  return (
    <Shell title="Privacy Policy" updated="May 2026">
      <p>At Kaariq, we respect your privacy. This policy explains what information we collect, how we use it, and the choices you have.</p>
      <h2 className="font-serif text-xl mt-6">Information we collect</h2>
      <p>Contact details (name, phone, email) you share when requesting a callback, booking, or creating an account; measurement and design preferences you submit; and basic usage data from cookies.</p>
      <h2 className="font-serif text-xl mt-6">How we use it</h2>
      <p>To respond to enquiries, process tailoring orders, schedule appointments, improve the website, and send service updates you have asked for.</p>
      <h2 className="font-serif text-xl mt-6">Sharing</h2>
      <p>We do not sell your data. We share it only with our tailoring team, logistics partners, and service providers necessary to fulfil your order.</p>
      <h2 className="font-serif text-xl mt-6">Your rights</h2>
      <p>You can request access, correction or deletion of your data at any time by writing to hello@kaariq.com.</p>
    </Shell>
  );
}

export function TermsConditions() {
  return (
    <Shell title="Terms & Conditions" updated="May 2026">
      <p>By using the Kaariq website and services you agree to these terms.</p>
      <h2 className="font-serif text-xl mt-6">Orders & customisation</h2>
      <p>Tailoring orders are made-to-measure based on the details you provide. Once production has begun, custom orders cannot be cancelled.</p>
      <h2 className="font-serif text-xl mt-6">Pricing</h2>
      <p>Prices on the site are indicative. Final pricing is confirmed after consultation, fabric selection and design finalisation.</p>
      <h2 className="font-serif text-xl mt-6">Delivery</h2>
      <p>Estimated delivery timelines are shared during booking. Delays caused by fabric availability, fittings, or shipping partners are outside our direct control.</p>
      <h2 className="font-serif text-xl mt-6">Returns</h2>
      <p>Custom-made garments are not eligible for return. Alterations to ensure correct fit are offered free within 14 days of delivery.</p>
      <h2 className="font-serif text-xl mt-6">Liability</h2>
      <p>Kaariq is not liable for indirect or consequential losses arising from use of the site or services.</p>
    </Shell>
  );
}

export function CookiePolicy() {
  return (
    <Shell title="Cookie Policy" updated="May 2026">
      <p>This site uses cookies and similar technologies to make Kaariq work, remember your preferences and understand how visitors use the site.</p>
      <h2 className="font-serif text-xl mt-6">Types of cookies</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Essential</strong> — needed for login, cart and core functionality. Always on.</li>
        <li><strong>Preference</strong> — remember your selections such as recently viewed designs.</li>
        <li><strong>Analytics</strong> — help us measure traffic and improve the experience.</li>
      </ul>
      <h2 className="font-serif text-xl mt-6">Managing cookies</h2>
      <p>You can accept or decline non-essential cookies using the banner shown on your first visit. You can also clear cookies in your browser settings at any time.</p>
      <p>For questions, write to hello@kaariq.com.</p>
    </Shell>
  );
}
