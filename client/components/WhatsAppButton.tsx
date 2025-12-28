interface WhatsAppButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  size = "md",
  className = "",
  phoneNumber = "+923115555555",
  message = "Hello! I'm interested in your security services.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    message
  )}`;

  const sizeClasses = {
    sm: "px-4 sm:px-5 py-2 text-xs sm:text-xs",
    md: "px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base",
    lg: "px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-sm md:text-base lg:text-lg",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-accent text-accent-foreground inline-flex items-center gap-2 sm:gap-3 font-black transition-all duration-300 rounded-lg hover:shadow-xl ${sizeClasses[size]} ${className}`}
    >
      <svg
        className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.226l-.355.192-3.682-.964.984 3.595-.253.41a9.887 9.887 0 00-1.514 5.26c0 5.438 4.421 9.859 9.859 9.859 2.64 0 5.12-1.04 6.985-2.927 1.865-1.887 2.887-4.369 2.887-7.012 0-5.438-4.421-9.859-9.859-9.859z" />
      </svg>
      <span>Contact Via WhatsApp</span>
    </a>
  );
}
