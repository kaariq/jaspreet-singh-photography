import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const KEY = 'kaariq_cookie_consent';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) {
        const t = setTimeout(() => setOpen(true), 600);
        return () => clearTimeout(t);
      }
    } catch {}
  }, []);

  const decide = (value) => {
    try { localStorage.setItem(KEY, value); } catch {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5 pointer-events-none">
      <div className="pointer-events-auto max-w-3xl mx-auto bg-white border border-ink/10 shadow-xl rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 animate-in fade-in slide-in-from-bottom-4">
        <div className="flex-1 text-sm text-ink/80 leading-relaxed">
          We use cookies to make Kaariq work, remember your preferences and understand how the site is used. Read our{' '}
          <Link to="/cookie-policy" className="underline hover:text-brand">Cookie Policy</Link>.
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={() => decide('declined')}>Decline</Button>
          <Button size="sm" onClick={() => decide('accepted')}>Accept</Button>
          <button
            aria-label="Close"
            onClick={() => decide('dismissed')}
            className="p-1 text-ink/50 hover:text-ink"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
