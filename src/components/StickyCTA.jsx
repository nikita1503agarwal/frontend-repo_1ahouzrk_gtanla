import { MessageCircle } from 'lucide-react';

export default function StickyCTA() {
  const handleClick = () => {
    // Replace with actual WhatsApp or Calendly link
    window.open('https://wa.me/917834567890?text=Hey%20Dhruv%2C%20I%E2%80%99m%20ready%20to%20Activate%20FaaS.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat with Dhruv"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#00FFD1] px-5 py-3 font-semibold text-slate-900 shadow-lg transition hover:brightness-95"
    >
      <span className="inline-block h-6 w-6 overflow-hidden rounded-full bg-slate-900" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with Dhruv</span>
    </button>
  );
}
