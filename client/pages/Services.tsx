import {
  Shield,
  Users,
  Truck,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Services() {
  return (
    <div className="text-foreground" style={{
      background:
        "linear-gradient(to bottom, #f9f9f9 0%, #f3f3f3 40%, #efefef 100%)",
    }}>
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
              id="heroWaveGradient"
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
            fill="url(#heroWaveGradient)"
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

        {/* Hero Background Image - Right Half Only */}
        <div
          className="hidden md:block absolute right-8 lg:right-12 top-4 lg:top-8 w-[calc(50%+2rem)] h-full -mr-6"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/Dg43BJC0/Screenshot-2025-12-27-at-10-23-30-PM.png')",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-background/10 to-transparent"></div>
        </div>

        {/* Company Logo - Hero Section */}
        <div className="hidden lg:flex absolute right-12 bottom-16 flex-col items-center justify-center z-20">
          <img
            src="https://i.ibb.co/s954vR34/eaglesecurityoriginallogo-1-copy.png"
            alt="Eagle Security Guards Logo"
            className="w-40 h-40 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          />
          <div className="mt-4 text-center">
            <p className="text-sm font-black text-accent tracking-widest">
              TRUSTED SINCE 1992
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                <div className="w-1 h-8 sm:h-10 lg:h-12 bg-accent rounded-full flex-shrink-0"></div>
                <p className="text-xs font-black text-accent uppercase tracking-widest">
                  Comprehensive Security Solutions
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight text-foreground">
                Elite Security Services Tailored For You
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground font-bold mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl">
                From static guards to mobile escorts, our comprehensive security portfolio delivers world-class protection with military precision and professional excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 flex-wrap">
                <Link
                  to="/contact"
                  className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block rounded-lg"
                >
                  Get a Quote Now
                </Link>
                <Link
                  to="/#services"
                  className="border-2 border-accent text-accent px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-300 inline-block rounded-lg"
                >
                  Explore Services
                </Link>
                <WhatsAppButton size="md" />
              </div>
            </div>

            {/* Right Visual - Empty for background image */}
            <div className="hidden md:block md:col-span-5"></div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
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
              id="servicesGradient"
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
            fill="url(#servicesGradient)"
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

        <div className="container mx-auto px-4 sm:px-6 w-full relative z-10">
          {/* Section Title */}
          <div id="services" className="mb-8 sm:mb-12 md:mb-16 lg:mb-24">
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-accent rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Our Security Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Comprehensive solutions designed to protect what matters most to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Service 1 - Static Security Guards */}
            <div className="group overflow-hidden transition-all duration-300">
              <div className="bg-card border border-border/50 overflow-hidden transition-colors duration-300 h-full flex flex-col hover:border-accent/30">
                <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 aspect-video">
                  <img
                    src="https://i.ibb.co/Dg43BJC0/Screenshot-2025-12-27-at-10-23-30-PM.png"
                    alt="Professional security guards with tactical gear"
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <Link
                      to="/contact"
                      className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-3.5 font-black text-xs sm:text-sm lg:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                    <Shield className="w-5 sm:w-7 h-5 sm:w-7 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-3 leading-tight text-foreground">
                    Static Security Guards
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground mb-4 sm:mb-6 flex-grow">
                    Our vetted security professionals drawn from armed forces provide round-the-clock on-site protection with military discipline and precision. Each guard undergoes comprehensive background screening and professional training.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-accent font-black text-xs sm:text-sm lg:text-base hover:text-accent-foreground transition-colors duration-300 w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 - Bodyguards */}
            <div className="group overflow-hidden transition-all duration-300">
              <div className="bg-card border border-border/50 overflow-hidden transition-colors duration-300 h-full flex flex-col hover:border-accent/30">
                <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 aspect-video">
                  <img
                    src="https://i.ibb.co/MxQRyL7x/Screenshot-2025-12-27-at-10-19-22-PM.png"
                    alt="Elite security professional in uniform"
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <Link
                      to="/contact"
                      className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-3.5 font-black text-xs sm:text-sm lg:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                    <Users className="w-5 sm:w-7 h-5 sm:w-7 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-3 leading-tight text-foreground">
                    Elite Bodyguards
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground mb-4 sm:mb-6 flex-grow">
                    Our SSG-trained specialists deliver executive-level protection with tactical expertise and discretion. Every bodyguard undergoes rigorous military training and psychological evaluation for high-risk scenarios.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-accent font-black text-xs sm:text-sm lg:text-base hover:text-accent-foreground transition-colors duration-300 w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 - Mobile Escorts */}
            <div className="group overflow-hidden transition-all duration-300">
              <div className="bg-card border border-border/50 overflow-hidden transition-colors duration-300 h-full flex flex-col hover:border-accent/30">
                <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 aspect-video">
                  <img
                    src="https://i.ibb.co/zhQrVk6Q/Screenshot-2025-12-27-at-10-24-55-PM.png"
                    alt="Mobile security escort team"
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <Link
                      to="/contact"
                      className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-3.5 font-black text-xs sm:text-sm lg:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                    <Truck className="w-5 sm:w-7 h-5 sm:w-7 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-3 leading-tight text-foreground">
                    Mobile Escorts
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground mb-4 sm:mb-6 flex-grow">
                    Our mobile escort teams provide seamless protection during transit and travel. We offer route planning, threat assessment, and coordinated security response with fully trained defensive personnel.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-accent font-black text-xs sm:text-sm lg:text-base hover:text-accent-foreground transition-colors duration-300 w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 4 - Security Equipment */}
            <div className="group overflow-hidden transition-all duration-300">
              <div className="bg-card border border-border/50 overflow-hidden transition-colors duration-300 h-full flex flex-col hover:border-accent/30">
                <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 aspect-video">
                  <img
                    src="https://i.ibb.co/1JG05cV5/Screenshot-2025-12-27-at-10-24-10-PM.png"
                    alt="Professional security equipment and surveillance"
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <Link
                      to="/contact"
                      className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-3.5 font-black text-xs sm:text-sm lg:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                    <Lock className="w-5 sm:w-7 h-5 sm:w-7 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-3 leading-tight text-foreground">
                    Security Equipment
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground mb-4 sm:mb-6 flex-grow">
                    We deploy state-of-the-art surveillance, access control, and security monitoring systems. From CCTV networks to integrated platforms, every solution is tailored to your facility's unique requirements.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-accent font-black text-xs sm:text-sm lg:text-base hover:text-accent-foreground transition-colors duration-300 w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Professional Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background/95 via-background to-background transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <svg
          className="absolute top-1/3 -right-40 w-1/2 h-2/3 opacity-35"
          viewBox="0 0 500 600"
          preserveAspectRatio="xMaxYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="whyGradient"
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
                style={{ stopColor: "var(--accent)", stopOpacity: 0.08 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M500,100 Q400,150 300,100 Q200,50 100,100 Q0,150 0,250 L500,250 Z"
            fill="url(#whyGradient)"
          />
          <path
            d="M0,400 Q125,350 250,400 Q375,450 500,400 L500,600 L0,600 Z"
            fill="var(--accent)"
            opacity="0.05"
          />
          <circle
            cx="400"
            cy="200"
            r="70"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.25"
          />
        </svg>
        <svg
          className="absolute bottom-0 -left-32 w-2/5 h-1/2 opacity-25"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMinYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 Q100,50 200,100 Q300,150 400,100 L400,300 L0,300 Z"
            fill="var(--accent)"
            opacity="0.07"
          />
          <circle
            cx="100"
            cy="200"
            r="50"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="4,4"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 w-full relative z-10">
          {/* Section Title */}
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24">
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-accent rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Why Choose Eagle Security
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Three decades of trusted expertise and professional excellence
            </p>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-xl p-6 sm:p-8 md:p-10 lg:p-14">
            <div className="absolute -right-20 -top-20 w-52 h-52 bg-accent/5 rounded-full"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accent/5 rounded-full"></div>
            <div className="relative z-10">
              <p className="text-xs font-black text-accent uppercase tracking-widest mb-3 sm:mb-4">
                Professional Advantage
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-6 text-foreground max-w-3xl">
                Military-Trained Personnel & Advanced Solutions
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-2xl leading-relaxed mb-6 sm:mb-8">
                From comprehensive threat assessment to rapid response protocols, our personnel deliver world-class security backed by military expertise, rigorous training standards, and proven track record spanning over 30 years of trusted service to Pakistan's leading organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 flex-wrap">
                <Link
                  to="/contact"
                  className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block rounded-lg"
                >
                  Request Consultation
                </Link>
                <WhatsAppButton
                  size="md"
                  message="I'm interested in learning more about Eagle Security's professional security services."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background to-background/98 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <svg
          className="absolute top-1/4 left-1/2 w-2/3 h-3/4 -translate-x-1/2 opacity-40"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="ctaGradient"
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
            fill="url(#ctaGradient)"
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
        </svg>

        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
            Ready to Secure Your Organization?
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
