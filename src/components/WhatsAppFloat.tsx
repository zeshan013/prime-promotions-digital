import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-glow transition-transform hover:scale-110"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
