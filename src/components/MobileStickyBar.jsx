import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { clinicInfo } from '../data/siteData';
import { scrollToSection } from '../utils/hooks';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border py-2.5 px-4 shadow-[0_-4px_25px_rgba(0,0,0,0.12)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`}
          className="flex flex-col items-center justify-center w-14 h-12 rounded-xl bg-surface border border-border text-text-primary active:scale-95 transition-transform"
          aria-label="Call clinic directly"
        >
          <Phone size={18} className="text-primary" />
          <span className="text-[10px] font-semibold mt-0.5">Call</span>
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href="https://wa.me/919000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-14 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={18} className="text-[#25D366]" fill="#25D366" />
          <span className="text-[10px] font-bold mt-0.5">Chat</span>
        </a>

        {/* Primary Book Appointment Action */}
        <button
          onClick={() => scrollToSection('appointment')}
          className="flex-1 h-12 bg-primary active:bg-primary-dark text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md shadow-primary/25 active:scale-[0.98] transition-all"
        >
          <Calendar size={16} />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
}
