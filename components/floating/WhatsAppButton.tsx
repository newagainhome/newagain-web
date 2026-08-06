import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-green-500/40
      "
    >
      <MessageCircle size={32} />
    </a>
  );
}