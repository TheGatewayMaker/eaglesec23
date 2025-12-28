import {
  Shield,
  Users,
  Truck,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Services() {
  return (
    <div className="bg-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background via-background to-background/95 text-foreground relative overflow-hidden py-10 sm:py-14 md:py-20 lg:py-32 transition-colors duration-300">
        {/* Decorative Background Elements - Hero Section */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-40"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="servicesHeroGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.4 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z"
            fill="url(#servicesHeroGradient)"
            opacity="0.6"
          />
          <path
            d="M0,400 Q200,350 400,400 T800,400 Q1000,450 1200,400 L1200,600 L0,600 Z"
            fill="var(--accent)"
            opacity="0.08"
          />
          <circle
            cx="100"
            cy="150"
            r="80"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.3"
          />
          <circle
            cx="1100"
            cy="500"
            r="120"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <line
            x1="200"
            y1="300"
            x2="400"
            y2="350"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.25"
          />
          <line
            x1="900"
            y1="200"
            x2="1050"
            y2="300"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 md:mb-6">
            <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-accent rounded-full flex-shrink-0"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-3 sm:mb-4 md:mb-6 text-foreground leading-tight">
            Our Security Services
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
            Comprehensive security solutions designed to protect what matters
            most to you
          </p>
        </div>
      </section>

      {/* Services Overview - Professional Grid Layout */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 bg-gradient-to-b from-background via-background to-background/95 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background Elements - Services Section */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-35"
          viewBox="0 0 600 800"
          preserveAspectRatio="xMaxYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="servicesGridGradient"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.5 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M600,100 Q500,150 400,100 Q300,50 200,100 Q100,150 0,100 L0,300 Q150,250 300,300 Q450,350 600,300 Z"
            fill="url(#servicesGridGradient)"
          />
          <circle
            cx="500"
            cy="200"
            r="60"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.25"
          />
          <circle
            cx="100"
            cy="400"
            r="40"
            fill="var(--accent)"
            opacity="0.08"
          />
          <circle
            cx="400"
            cy="600"
            r="50"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <path
            d="M50,500 L200,450 M150,550 L350,500 M200,650 L450,600"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.25"
            fill="none"
          />
        </svg>
        <svg
          className="absolute bottom-0 -left-32 w-1/3 h-1/2 opacity-30"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMinYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,200 Q100,100 200,150 Q300,200 400,100 L400,400 L0,400 Z"
            fill="var(--accent)"
            opacity="0.06"
          />
          <circle
            cx="50"
            cy="300"
            r="70"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.2"
            strokeDasharray="5,5"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Static Security Guards - Card Style */}
            <div className="group overflow-hidden transition-all duration-300 animate-fade-in">
              <div className="bg-card border border-border/50 overflow-hidden transition-all duration-300 h-full flex flex-col hover:border-accent/30 hover:shadow-lg">
                <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 aspect-video">
                  <img
                    src="https://i.ibb.co/Dg43BJC0/Screenshot-2025-12-27-at-10-23-30-PM.png"
                    alt="Professional security guards with tactical gear"
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <button className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-3.5 font-black text-xs sm:text-sm lg:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg">
                      Get a Quote
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                    <Shield className="w-7 sm:w-9 md:w-10 lg:w-12 h-7 sm:h-9 md:h-10 lg:h-12 text-accent flex-shrink-0" />
                    <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
                      Static Security Guards
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                    Eagle Security Guards draws its main pool of manpower from
                    armed forces of Pakistan and imparts training to meet critical
                    security requirements reliably and efficiently.
                  </p>
                  <ul className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Comprehensive personal data screening and vetting process
                      </span>
                    </li>
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Database verification to ensure no blacklisted guards join
                        ranks
                      </span>
                    </li>
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Professional training in security protocols and procedures
                      </span>
                    </li>
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Reliable and efficient protection for premises
                      </span>
                    </li>
                  </ul>
                  <div className="mt-auto pt-4 sm:pt-6 md:pt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg"
                    >
                      Get a Quote Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bodyguards - Card Style */}
            <div className="group overflow-hidden transition-all duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="bg-card border border-border/50 overflow-hidden transition-all duration-300 h-full flex flex-col hover:border-accent/30 hover:shadow-lg">
                <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 aspect-video">
                  <img
                    src="https://i.ibb.co/MxQRyL7x/Screenshot-2025-12-27-at-10-19-22-PM.png"
                    alt="Elite security professional in uniform"
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <button className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-3.5 font-black text-xs sm:text-sm lg:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg">
                      Get a Quote
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                    <Users className="w-7 sm:w-9 md:w-10 lg:w-12 h-7 sm:h-9 md:h-10 lg:h-12 text-accent flex-shrink-0" />
                    <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
                      Bodyguards
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                    Our bodyguards are mainly drawn from Special Service Group
                    (SSG) of Pakistan Army, an elite force trained to use all
                    available means to survive the worst security hazards.
                  </p>
                  <ul className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Elite personnel from Special Service Group (SSG)
                      </span>
                    </li>
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Cream of handpicked men dedicated to difficult missions
                      </span>
                    </li>
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Advanced threat assessment and response training
                      </span>
                    </li>
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Protection in high-risk security scenarios
                      </span>
                    </li>
                  </ul>
                  <div className="mt-auto pt-4 sm:pt-6 md:pt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg"
                    >
                      Get a Quote Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Escorts - Card Style */}
            <div className="group overflow-hidden transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="bg-card border border-border/50 overflow-hidden transition-all duration-300 h-full flex flex-col hover:border-accent/30 hover:shadow-lg">
                <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 aspect-video">
                  <img
                    src="https://i.ibb.co/zhQrVk6Q/Screenshot-2025-12-27-at-10-24-55-PM.png"
                    alt="Mobile security escort team"
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <button className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-3.5 font-black text-xs sm:text-sm lg:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg">
                      Get a Quote
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                    <Truck className="w-7 sm:w-9 md:w-10 lg:w-12 h-7 sm:h-9 md:h-10 lg:h-12 text-accent flex-shrink-0" />
                    <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
                      Mobile Escort Services
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                    Mobile escort services are provided by ESG to protect
                    personnel during movement. Our escort teams are fully trained
                    in defensive measures to meet any eventuality.
                  </p>
                  <ul className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Protection during personnel movement and transit
                      </span>
                    </li>
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Fully trained teams in defensive measures
                      </span>
                    </li>
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Emergency response protocols for any situation
                      </span>
                    </li>
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Discrete and professional protection services
                      </span>
                    </li>
                  </ul>
                  <div className="mt-auto pt-4 sm:pt-6 md:pt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg"
                    >
                      Get a Quote Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Equipment - Card Style */}
            <div className="group overflow-hidden transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="bg-card border border-border/50 overflow-hidden transition-all duration-300 h-full flex flex-col hover:border-accent/30 hover:shadow-lg">
                <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 aspect-video">
                  <img
                    src="https://i.ibb.co/1JG05cV5/Screenshot-2025-12-27-at-10-24-10-PM.png"
                    alt="Professional security equipment and surveillance"
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <button className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-3.5 font-black text-xs sm:text-sm lg:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg">
                      Get a Quote
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                    <Lock className="w-7 sm:w-9 md:w-10 lg:w-12 h-7 sm:h-9 md:h-10 lg:h-12 text-accent flex-shrink-0" />
                    <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
                      Security Equipment
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                    ESG specialises in providing all security equipment needed to
                    safeguard your premises with cutting-edge technology and
                    proven solutions.
                  </p>
                  <ul className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        CCTV Cameras
                      </span>
                    </li>
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Walkthrough Gates
                      </span>
                    </li>
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Wireless Communication Devices
                      </span>
                    </li>
                    <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                      <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                      <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                        Barbed Wire Protection
                      </span>
                    </li>
                  </ul>
                  <div className="mt-auto pt-4 sm:pt-6 md:pt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg"
                    >
                      Get a Quote Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background via-background to-background/95 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background Elements - Value Section */}
        <svg
          className="absolute top-1/4 left-1/2 w-2/3 h-3/4 -translate-x-1/2 opacity-40"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="servicesValueGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.4 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.05 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,150 Q200,50 400,150 Q600,250 800,150 L800,0 L0,0 Z"
            fill="url(#servicesValueGradient)"
          />
          <path
            d="M0,350 Q150,300 300,350 Q450,400 600,350 Q700,330 800,350 L800,600 L0,600 Z"
            fill="var(--accent)"
            opacity="0.05"
          />
          <circle
            cx="400"
            cy="300"
            r="100"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.3"
          />
          <circle
            cx="400"
            cy="300"
            r="150"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0.15"
            strokeDasharray="10,5"
          />
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="400"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <line
            x1="600"
            y1="200"
            x2="600"
            y2="400"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24">
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-accent rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Why Our Services Excel
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Comprehensive security solutions designed with precision and professionalism
            </p>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-xl p-6 sm:p-8 md:p-10 lg:p-14">
            <div className="absolute -right-20 -top-20 w-52 h-52 bg-accent/5 rounded-full"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accent/5 rounded-full"></div>
            <div className="relative z-10">
              <p className="text-xs font-black text-accent uppercase tracking-widest mb-3 sm:mb-4">
                Professional Security
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-6 text-foreground max-w-3xl">
                Complete Protection Backed by Military Expertise
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-2xl leading-relaxed mb-6 sm:mb-8">
                From comprehensive threat assessment to rapid response protocols, we provide world-class security solutions backed by over 30 years of proven success and military-trained personnel.
              </p>
              <WhatsAppButton
                size="md"
                message="I'm interested in learning more about Eagle Security's professional security services."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Final Call to Action */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background to-background/98 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background Elements - CTA Section */}
        <svg
          className="absolute top-1/4 left-1/2 w-2/3 h-3/4 -translate-x-1/2 opacity-40"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="servicesCTAGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.4 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.05 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q200,100 400,200 Q600,300 800,200 L800,0 L0,0 Z"
            fill="url(#servicesCTAGradient)"
          />
          <path
            d="M0,400 Q150,350 300,400 Q450,450 600,400 Q700,380 800,400 L800,600 L0,600 Z"
            fill="var(--accent)"
            opacity="0.04"
          />
          <circle
            cx="400"
            cy="300"
            r="100"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="10,8"
          />
          <line
            x1="150"
            y1="250"
            x2="150"
            y2="450"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0.15"
          />
          <line
            x1="650"
            y1="250"
            x2="650"
            y2="450"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0.15"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-muted-foreground mb-6 sm:mb-8 md:mb-10 lg:mb-14 leading-relaxed">
            Contact our security experts today for a personalized consultation and discover how Eagle Security can protect what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap">
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 lg:py-5 font-black text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block rounded-lg"
            >
              Get a Quote Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-accent text-accent px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 lg:py-5 font-black text-xs sm:text-sm md:text-base lg:text-lg text-center hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-300 inline-block rounded-lg"
            >
              Schedule Consultation
            </Link>
            <WhatsAppButton size="md" />
          </div>
        </div>
      </section>
    </div>
  );
}
