import { Link } from "react-router-dom";
import { Shield, Users, Truck, Lock, ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import CompanyWiseDeployments from "@/components/CompanyWiseDeployments";
import GuardsByRegion from "@/components/GuardsByRegion";
import LogoCarousel from "@/components/LogoCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  AnimatedFadeInUp,
  AnimatedFadeInDown,
  AnimatedFadeInLeft,
  AnimatedFadeInRight,
  AnimatedScaleInUp,
  AnimatedSlideInFromBottom,
  AnimationWrapper,
  AnimatedBounceIn,
} from "@/components/AnimationWrappers";

export default function Home() {
  return (
    <div
      className="text-foreground"
      style={{
        background:
          "linear-gradient(to bottom, #f9f9f9 0%, #f3f3f3 40%, #efefef 100%)",
      }}
    >
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
          className="hidden md:block absolute right-0 lg:right-2 top-4 lg:top-8 w-[calc(50%+2rem)] h-full -mr-6"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets%2Fefd74c09605244708143d8415fd15fc4%2Fbde89591a5894a43a7003a9d6c471bea?format=webp&width=800')",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-background/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-12 items-center">
            {/* Left Content - Expanded to use more space */}
            <AnimatedFadeInLeft className="md:col-span-7" threshold={0.2}>
              <AnimatedFadeInDown delay={0} duration="normal">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                  <div className="w-1 h-8 sm:h-10 lg:h-12 bg-accent rounded-full flex-shrink-0"></div>
                  <p className="text-xs font-black text-accent uppercase tracking-widest">
                    Professional Security Since 1992
                  </p>
                </div>
              </AnimatedFadeInDown>
              <AnimatedFadeInDown delay={100} duration="normal">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight text-foreground">
                  Elite Security Services For Your Peace of Mind
                </h1>
              </AnimatedFadeInDown>
              <AnimatedFadeInDown delay={200} duration="normal">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground font-bold mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl">
                  Drawn from the armed forces of Pakistan, our personnel deliver
                  world-class security with precision, discipline, and
                  unwavering commitment to your safety.
                </p>
              </AnimatedFadeInDown>
              <AnimatedFadeInUp delay={300} duration="normal">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 flex-wrap">
                  <Link
                    to="/services"
                    className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block rounded-lg"
                  >
                    Explore Services
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-accent text-accent px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-300 inline-block rounded-lg"
                  >
                    Get a Quote Now
                  </Link>
                  <WhatsAppButton size="md" />
                </div>
              </AnimatedFadeInUp>
            </AnimatedFadeInLeft>

            {/* Right Visual - Empty for background image */}
            <div className="hidden md:block md:col-span-5"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
          {/* Section Title with Visual Styling */}
          <AnimatedFadeInUp
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-24"
            threshold={0.2}
          >
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Our Security Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Comprehensive solutions designed to protect what matters most to
              you
            </p>
          </AnimatedFadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Service 1 - Bodyguards */}
            <AnimatedScaleInUp delay={0} threshold={0.2}>
              <div className="group overflow-hidden transition-all duration-300">
                <div className="bg-card border border-border/50 overflow-hidden transition-colors duration-300 h-full flex flex-col hover:border-accent/30">
                  <div className="relative overflow-hidden bg-gradient-to-br from-pk-green-main/10 to-accent/10 aspect-video">
                    <img
                      src="https://i.ibb.co/1fF8J0kc/Screenshot-2025-12-27-at-10-18-51-PM.png"
                      alt="Elite bodyguard protection services"
                      className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <Link
                        to="/services"
                        className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-3.5 font-black text-xs sm:text-sm lg:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                      <Users className="w-5 sm:w-7 h-5 sm:h-7 text-accent" />
                    </div>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-3 leading-tight text-foreground">
                      Elite Bodyguards
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground mb-4 sm:mb-6 flex-grow">
                      Our SSG-trained specialists deliver executive-level
                      protection with tactical expertise and discretion. Every
                      bodyguard undergoes rigorous military training and
                      psychological evaluation.
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-accent font-black text-xs sm:text-sm lg:text-base hover:text-accent-foreground transition-colors duration-300 w-fit"
                    >
                      Learn More
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedScaleInUp>

            {/* Service 2 - Static Guards */}
            <AnimatedScaleInUp delay={100} threshold={0.2}>
              <div className="group overflow-hidden transition-all duration-300">
                <div className="bg-card border border-border/50 overflow-hidden transition-colors duration-300 h-full flex flex-col hover:border-accent/30">
                  <div className="relative overflow-hidden bg-gradient-to-br from-pk-green-main/10 to-accent/10 aspect-video">
                    <img
                      src="https://i.ibb.co/xK0H4mRY/Screenshot-2025-12-27-at-10-17-59-PM.png"
                      alt="Professional security guards with tactical gear"
                      className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <Link
                        to="/services"
                        className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-3.5 font-black text-xs sm:text-sm lg:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                      <Shield className="w-5 sm:w-7 h-5 sm:h-7 text-accent" />
                    </div>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-3 leading-tight text-foreground">
                      Static Security Guards
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground mb-4 sm:mb-6 flex-grow">
                      Our vetted security professionals provide round-the-clock
                      on-site protection with military discipline and precision.
                      Each guard undergoes comprehensive background screening.
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-accent font-black text-xs sm:text-sm lg:text-base hover:text-accent-foreground transition-colors duration-300 w-fit"
                    >
                      Learn More
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedScaleInUp>

            {/* Service 3 - Mobile Escorts */}
            <AnimatedScaleInUp delay={200} threshold={0.2}>
              <div className="group overflow-hidden transition-all duration-300">
                <div className="bg-card border border-border/50 overflow-hidden transition-colors duration-300 h-full flex flex-col hover:border-accent/30">
                  <div className="relative overflow-hidden bg-gradient-to-br from-pk-green-main/10 to-accent/10 aspect-video">
                    <img
                      src="https://i.ibb.co/MxQRyL7x/Screenshot-2025-12-27-at-10-19-22-PM.png"
                      alt="Professional mobile escort security services"
                      className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <Link
                        to="/services"
                        className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-3.5 font-black text-xs sm:text-sm lg:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                      <Truck className="w-5 sm:w-7 h-5 sm:h-7 text-accent" />
                    </div>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-3 leading-tight text-foreground">
                      Mobile Escorts
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground mb-4 sm:mb-6 flex-grow">
                      Our mobile escort teams provide seamless protection during
                      transit and travel. We offer route planning, threat
                      assessment, and coordinated security response.
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-accent font-black text-xs sm:text-sm lg:text-base hover:text-accent-foreground transition-colors duration-300 w-fit"
                    >
                      Learn More
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedScaleInUp>

            {/* Service 4 - Security Equipment */}
            <AnimatedScaleInUp delay={300} threshold={0.2}>
              <div className="group overflow-hidden transition-all duration-300">
                <div className="bg-card border border-border/50 overflow-hidden transition-colors duration-300 h-full flex flex-col hover:border-accent/30">
                  <div className="relative overflow-hidden bg-gradient-to-br from-pk-green-main/10 to-accent/10 aspect-video">
                    <img
                      src="https://i.ibb.co/1fHGWYGz/Screenshot-2025-12-27-at-10-20-06-PM.png"
                      alt="Advanced security equipment and surveillance systems"
                      className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <Link
                        to="/services"
                        className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-3.5 font-black text-xs sm:text-sm lg:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                      <Lock className="w-5 sm:w-7 h-5 sm:h-7 text-accent" />
                    </div>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-3 leading-tight text-foreground">
                      Security Equipment
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground mb-4 sm:mb-6 flex-grow">
                      We deploy state-of-the-art surveillance, access control,
                      and security monitoring systems tailored to your facility.
                      From CCTV networks to integrated platforms.
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-accent font-black text-xs sm:text-sm lg:text-base hover:text-accent-foreground transition-colors duration-300 w-fit"
                    >
                      Learn More
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedScaleInUp>
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
              id="valueGradient"
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
            fill="url(#valueGradient)"
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

        <div className="container mx-auto px-4 sm:px-6 w-full relative z-10">
          {/* Section Header */}
          <AnimatedFadeInUp
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-24"
            threshold={0.2}
          >
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Why Professional Security Matters
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              In a world where threats evolve constantly, professional security
              isn't just an option—it's essential
            </p>
          </AnimatedFadeInUp>

          {/* Key Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            {/* Reason 1 */}
            <AnimatedFadeInUp delay={0} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                    <span className="text-lg sm:text-xl lg:text-2xl font-black text-accent">
                      01
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black leading-tight mb-2 sm:mb-3 lg:mb-4 text-foreground">
                    Expert Threat Assessment
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground">
                    Our trained professionals identify vulnerabilities and
                    create customized strategies to address your specific
                    security needs.
                  </p>
                </div>
              </div>
            </AnimatedFadeInUp>

            {/* Reason 2 */}
            <AnimatedFadeInUp delay={100} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                    <span className="text-lg sm:text-xl lg:text-2xl font-black text-accent">
                      02
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black leading-tight mb-2 sm:mb-3 lg:mb-4 text-foreground">
                    Rapid Response Capability
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground">
                    24/7 monitoring and immediate action protocols ensure
                    threats are addressed swiftly and effectively when
                    situations arise.
                  </p>
                </div>
              </div>
            </AnimatedFadeInUp>

            {/* Reason 3 */}
            <AnimatedFadeInUp delay={200} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                    <span className="text-lg sm:text-xl lg:text-2xl font-black text-accent">
                      03
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black leading-tight mb-2 sm:mb-3 lg:mb-4 text-foreground">
                    Advanced Training & Standards
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground">
                    Military-backed personnel with rigorous training ensure
                    compliance with international security protocols and
                    standards.
                  </p>
                </div>
              </div>
            </AnimatedFadeInUp>

            {/* Reason 4 */}
            <AnimatedFadeInUp delay={300} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                    <span className="text-lg sm:text-xl lg:text-2xl font-black text-accent">
                      04
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black leading-tight mb-2 sm:mb-3 lg:mb-4 text-foreground">
                    Legal & Compliance Protection
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground">
                    Professional security protocols ensure your organization
                    stays compliant with national and international security
                    regulations.
                  </p>
                </div>
              </div>
            </AnimatedFadeInUp>

            {/* Reason 5 */}
            <AnimatedFadeInUp delay={400} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                    <span className="text-lg sm:text-xl lg:text-2xl font-black text-accent">
                      05
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black leading-tight mb-2 sm:mb-3 lg:mb-4 text-foreground">
                    Peace of Mind & Confidence
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground">
                    Knowing professionals protect what matters most allows you
                    to focus on your business and personal growth without worry.
                  </p>
                </div>
              </div>
            </AnimatedFadeInUp>

            {/* Reason 6 */}
            <AnimatedFadeInUp delay={500} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                    <span className="text-lg sm:text-xl lg:text-2xl font-black text-accent">
                      06
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black leading-tight mb-2 sm:mb-3 lg:mb-4 text-foreground">
                    Proven Track Record
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed text-muted-foreground">
                    Three decades of protecting Pakistan's leading organizations
                    with zero compromise on quality and professionalism.
                  </p>
                </div>
              </div>
            </AnimatedFadeInUp>
          </div>

          {/* Summary Banner */}
          <AnimatedSlideInFromBottom threshold={0.2}>
            <div className="relative overflow-hidden bg-gradient-to-r from-pk-green-main/10 to-accent/10 border border-pk-green-main/30 rounded-xl p-6 sm:p-8 md:p-10 lg:p-14">
              <div className="absolute -right-20 -top-20 w-52 h-52 bg-accent/5 rounded-full"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-pk-green-main/5 rounded-full"></div>
              <div className="relative z-10">
                <p className="text-xs font-black text-accent uppercase tracking-widest mb-3 sm:mb-4">
                  Our Commitment
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-6 text-foreground max-w-3xl">
                  Professional Security Is An Investment In Your Future
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-2xl leading-relaxed mb-6 sm:mb-8">
                  From comprehensive threat assessment to rapid response
                  protocols, we provide complete protection backed by military
                  expertise and decades of proven success.
                </p>
                <WhatsAppButton
                  size="md"
                  message="I'm interested in learning more about Eagle Security's professional security services."
                />
              </div>
            </div>
          </AnimatedSlideInFromBottom>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 bg-gradient-to-b from-background to-background/95 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background Elements - Stats Section */}
        <svg
          className="absolute top-0 left-0 w-1/3 h-1/2 opacity-35"
          viewBox="0 0 300 300"
          preserveAspectRatio="xMinYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="statsGradient"
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
                style={{ stopColor: "var(--accent)", stopOpacity: 0.08 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q75,0 150,50 Q225,100 300,50 L300,0 L0,0 Z"
            fill="url(#statsGradient)"
          />
          <circle
            cx="150"
            cy="150"
            r="80"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="5,3"
          />
          <line
            x1="30"
            y1="100"
            x2="270"
            y2="100"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0.15"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-2/5 h-3/5 opacity-30"
          viewBox="0 0 500 400"
          preserveAspectRatio="xMaxYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M500,100 Q400,50 300,100 Q200,150 100,100 Q0,50 0,200 L500,200 Z"
            fill="var(--accent)"
            opacity="0.06"
          />
          <path
            d="M0,250 Q125,200 250,250 Q375,300 500,250 L500,400 L0,400 Z"
            fill="var(--accent)"
            opacity="0.04"
          />
          <circle
            cx="400"
            cy="300"
            r="60"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.2"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 w-full relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {/* Experience Card */}
            <AnimatedBounceIn delay={0} threshold={0.2}>
              <div className="aspect-square bg-card border border-border text-foreground p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:bg-pk-green-main group cursor-pointer">
                <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 flex items-center justify-center h-10 sm:h-14 md:h-16 lg:h-20">
                  <AnimatedCounter
                    targetNumber={30}
                    suffix="+"
                    duration={2000}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black group-hover:text-white transition-colors duration-300"
                    style={{
                      color: "var(--accent)",
                    }}
                  />
                </div>
                <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-black mb-1 group-hover:text-white transition-colors duration-300">
                  Years of Experience
                </h3>
                <p className="text-xs font-black group-hover:text-white transition-colors duration-300">
                  Protecting businesses since 1992
                </p>
              </div>
            </AnimatedBounceIn>

            {/* Personnel Card */}
            <AnimatedBounceIn delay={100} threshold={0.2}>
              <div className="aspect-square bg-card border border-border text-foreground p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:bg-pk-green-main group cursor-pointer">
                <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 flex items-center justify-center h-10 sm:h-14 md:h-16 lg:h-20">
                  <AnimatedCounter
                    targetNumber={500}
                    suffix="+"
                    duration={2000}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black group-hover:text-white transition-colors duration-300"
                    style={{
                      color: "var(--accent)",
                    }}
                  />
                </div>
                <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-black mb-1 group-hover:text-white transition-colors duration-300">
                  Trained Personnel
                </h3>
                <p className="text-xs font-black group-hover:text-white transition-colors duration-300">
                  Elite security professionals
                </p>
              </div>
            </AnimatedBounceIn>

            {/* Clients Card */}
            <AnimatedBounceIn delay={200} threshold={0.2}>
              <div className="aspect-square bg-card border border-border text-foreground p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:bg-pk-green-main group cursor-pointer">
                <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 flex items-center justify-center h-10 sm:h-14 md:h-16 lg:h-20">
                  <AnimatedCounter
                    targetNumber={100}
                    suffix="+"
                    duration={2000}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black group-hover:text-white transition-colors duration-300"
                    style={{
                      color: "var(--accent)",
                    }}
                  />
                </div>
                <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-black mb-1 group-hover:text-white transition-colors duration-300">
                  Corporate Clients
                </h3>
                <p className="text-xs font-black group-hover:text-white transition-colors duration-300">
                  Trusted by leading organizations
                </p>
              </div>
            </AnimatedBounceIn>

            {/* Total Guards Deployed Card */}
            <AnimatedBounceIn delay={300} threshold={0.2}>
              <div className="aspect-square bg-card border border-border text-foreground p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:bg-pk-green-main group cursor-pointer">
                <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 flex items-center justify-center h-10 sm:h-14 md:h-16 lg:h-20">
                  <AnimatedCounter
                    targetNumber={1541}
                    suffix="+"
                    duration={2000}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black group-hover:text-white transition-colors duration-300"
                    style={{
                      color: "var(--accent)",
                    }}
                  />
                </div>
                <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-black mb-1 group-hover:text-white transition-colors duration-300">
                  Total Guards Deployed
                </h3>
                <p className="text-xs font-black group-hover:text-white transition-colors duration-300">
                  Active security personnel across Pakistan
                </p>
              </div>
            </AnimatedBounceIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Feature Grid */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background/95 via-background to-background transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background Elements - Why Choose Section */}
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
          {/* Section Title with Visual Styling */}
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24">
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Why Choose Eagle
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Three decades of trusted security excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              {
                title: "Military Excellence",
                desc: "Personnel from Pakistan's armed forces with proven expertise",
                image:
                  "https://i.ibb.co/bM3xPJ6k/Screenshot-2025-12-27-at-10-22-08-PM.png",
              },
              {
                title: "Thorough Vetting",
                desc: "Comprehensive screening and background verification process",
                image:
                  "https://i.ibb.co/JRBrY058/Screenshot-2025-12-27-at-10-21-06-PM.png",
              },
              {
                title: "24/7 Availability",
                desc: "Round-the-clock support and emergency response team",
                image:
                  "https://i.ibb.co/QvZZ1D9z/Screenshot-2025-12-27-at-10-21-43-PM.png",
              },
              {
                title: "Customized Solutions",
                desc: "Tailored security plans for your specific requirements",
                image:
                  "https://i.ibb.co/Dfm7BDgy/Screenshot-2025-12-27-at-10-20-35-PM.png",
              },
            ].map((item, i) => (
              <AnimationWrapper
                key={i}
                delay={i * 100}
                threshold={0.2}
                animation="fade-in-up"
              >
                <div className="relative aspect-square overflow-hidden border border-border transition-border duration-300 hover:border-pk-green-main/60 group">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-filter duration-300 group-hover:grayscale"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/55 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                    <h3 className="text-xl md:text-2xl font-black mb-3 text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base font-bold text-white/95 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background to-background/95 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background Elements - Presence Section */}
        <svg
          className="absolute top-1/4 left-0 w-1/3 h-3/4 -translate-x-1/4 opacity-35"
          viewBox="0 0 400 600"
          preserveAspectRatio="xMinYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="presenceGradient"
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
            d="M0,200 Q100,150 200,200 Q300,250 400,200 L400,0 L0,0 Z"
            fill="url(#presenceGradient)"
          />
          <path
            d="M0,400 Q200,350 400,400 L400,600 L0,600 Z"
            fill="var(--accent)"
            opacity="0.05"
          />
          <circle
            cx="200"
            cy="300"
            r="90"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="8,6"
          />
        </svg>
        <svg
          className="absolute bottom-0 -right-20 w-2/5 h-1/2 opacity-30"
          viewBox="0 0 500 400"
          preserveAspectRatio="xMaxYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M500,100 Q375,50 250,100 Q125,150 0,100 L0,400 L500,400 Z"
            fill="var(--accent)"
            opacity="0.06"
          />
          <circle
            cx="350"
            cy="250"
            r="80"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.2"
          />
          <line
            x1="100"
            y1="150"
            x2="400"
            y2="250"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0.15"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 w-full relative z-10">
          {/* Section Title with Visual Styling */}
          <AnimatedFadeInUp
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-24"
            threshold={0.2}
          >
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                National Presence
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Offices across Pakistan ensuring reliable coverage and local
              expertise
            </p>
          </AnimatedFadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left Side - Cities and Offices */}
            <AnimatedFadeInLeft threshold={0.2}>
              <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
                {/* Head Office */}
                <div className="bg-gradient-to-br from-pk-green-main to-[#2d6b3d] text-white p-6 sm:p-8 md:p-10 lg:p-12 border border-pk-green-main/20 flex flex-col">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 md:mb-6 gap-2 sm:gap-0">
                    <p className="font-black text-xs uppercase tracking-widest text-white">
                      Head Office
                    </p>
                    <button
                      onClick={() => {
                        const element = document.getElementById(
                          "head-office-location",
                        );
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-blue-300 font-black text-xs sm:text-sm hover:text-blue-200 transition-colors duration-300"
                    >
                      Get Directions
                    </button>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight text-white">
                    Islamabad
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-white leading-relaxed">
                    Central coordination and management hub
                  </p>
                </div>

                {/* Regional Offices with City Buttons */}
                <div>
                  <p className="text-pk-green-main font-black text-xs uppercase tracking-widest mb-3 sm:mb-4 md:mb-6">
                    Regional Offices
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {[
                      "Lahore",
                      "Karachi",
                      "Multan",
                      "Peshawar",
                      "Jhelum",
                      "Gujranwala",
                    ].map((city) => (
                      <div
                        key={city}
                        className="bg-gradient-to-br from-pk-green-main to-[#2d6b3d] text-white px-3 sm:px-4 md:px-5 py-2 text-center font-black text-xs md:text-sm leading-tight transition-all duration-300 hover:shadow-lg hover:bg-foreground group cursor-pointer border border-pk-green-main/20"
                      >
                        <span className="group-hover:text-white transition-colors duration-300">
                          {city}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-2 border-pk-green-main/30 bg-gradient-to-br from-background to-background/80 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-lg cursor-pointer group hover:bg-gradient-to-br hover:from-black hover:to-black/80">
                  <p className="text-pk-green-main font-black text-xs uppercase tracking-widest mb-3 sm:mb-4 md:mb-6 group-hover:text-white transition-colors duration-300">
                    National Coverage
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 md:mb-6 text-foreground group-hover:text-white transition-colors duration-300">
                    Nationwide
                  </h3>
                  <div className="text-xs sm:text-sm md:text-base font-black text-muted-foreground group-hover:text-white space-y-1.5 sm:space-y-2 md:space-y-3 leading-relaxed transition-colors duration-300">
                    <p>✓ Including AJK</p>
                    <p>✓ Sub-offices in major cities</p>
                    <p>✓ 24/7 availability everywhere</p>
                  </div>
                </div>
              </div>
            </AnimatedFadeInLeft>

            {/* Right Side - Pakistan Map */}
            <AnimatedFadeInRight threshold={0.2}>
              <div className="flex items-center justify-end md:ml-20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefd74c09605244708143d8415fd15fc4%2F60eb292d774d4532a0bd29f0a158fe2f?format=webp&width=800"
                  alt="Pakistan map showing Eagle Security locations"
                  className="w-full h-auto md:scale-110"
                />
              </div>
            </AnimatedFadeInRight>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 bg-gradient-to-b from-background via-background/95 to-background transition-colors duration-300 border-y border-pk-green-main/20 relative overflow-hidden">
        {/* Decorative Background Elements - Trusted By Section */}
        <svg
          className="absolute top-0 left-0 w-2/5 h-1/2 opacity-35"
          viewBox="0 0 500 300"
          preserveAspectRatio="xMinYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="trustedGradient"
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
                style={{ stopColor: "var(--accent)", stopOpacity: 0.08 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q125,50 250,100 Q375,150 500,100 L500,0 L0,0 Z"
            fill="url(#trustedGradient)"
          />
          <circle
            cx="250"
            cy="150"
            r="60"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.25"
          />
          <line
            x1="50"
            y1="200"
            x2="450"
            y2="200"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0.15"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-1/3 h-2/3 opacity-30"
          viewBox="0 0 400 500"
          preserveAspectRatio="xMaxYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400,200 Q300,150 200,200 Q100,250 0,200 L0,500 L400,500 Z"
            fill="var(--accent)"
            opacity="0.05"
          />
          <circle
            cx="300"
            cy="350"
            r="70"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="5,5"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 w-full relative z-10">
          <AnimatedFadeInDown
            className="mb-8 sm:mb-12 md:mb-16 text-center"
            threshold={0.2}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight mb-3 sm:mb-4 md:mb-6">
              Our Trusted Clients
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground">
              Trusted by Leading Organizations
            </p>
          </AnimatedFadeInDown>
          <LogoCarousel
            logos={[
              {
                name: "ARY News",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2Ff3ebc3a4187e40bf9d7f10e440b36a7d?format=webp&width=800",
              },
              {
                name: "Meezan Bank",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2Ff9b6c26e0d234eaab072802436b782de?format=webp&width=800",
              },
              {
                name: "DESCON",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2F160a208df8f54517b77c118285460174?format=webp&width=800",
              },
              {
                name: "National Bank",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2Fe99163aae9654c5ebb7796a3ee932c96?format=webp&width=800",
              },
              {
                name: "PARCO",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2F75d82dc2864c42faa002598c66ed0672?format=webp&width=800",
              },
              {
                name: "UNDP",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2Fee2cc39d10974a14a3cd0447be5eeb67?format=webp&width=800",
              },
              {
                name: "Imtiaz",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2Fcf0a1f59b04348d08761a4950f9b32b6?format=webp&width=800",
              },
              {
                name: "State Life",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2Ff647a7c1595449f7a5f7d4de8cd24fdc?format=webp&width=800",
              },
              {
                name: "Allied Schools",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2Fe5d2393c93ba481fbc9158f95949cd46?format=webp&width=800",
              },
              {
                name: "Shifa Hospitals",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2F25eb5e60eac8489baed0173749cec55b?format=webp&width=800",
              },
              {
                name: "Government of Pakistan",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2Fca39f789c9f5477c83c7eaf27dcb75d4?format=webp&width=800",
              },
              {
                name: "The Educators",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2Fc4d1dd9cc8c6430db60dbc799d95c25e?format=webp&width=800",
              },
              {
                name: "Rousche Pakistan",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2F5f179ba3433447169838f39aa9c58dd9?format=webp&width=800",
              },
              {
                name: "Dawood Hercules",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fcdf43ef809a448fa96343145549ff6bb%2Fe87ba69b87724354bae67673530086d4?format=webp&width=800",
              },
              {
                name: "AES Lalpir Thermal Power Station",
                src: "https://cdn.builder.io/api/v1/image/assets%2Fdc75c845be364abf952cacd09ecdb1c4%2Fbb5e27fe16b3481a943bf0f055191914?format=webp&width=800",
              },
            ]}
          />
        </div>
      </section>

      {/* Guards By Region Section */}
      <GuardsByRegion />

      {/* Company Wise Deployments Section */}
      <CompanyWiseDeployments />

      {/* CTA Section */}
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
          <AnimatedFadeInDown delay={0} threshold={0.2}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
              Ready to Protect What Matters?
            </h2>
          </AnimatedFadeInDown>
          <AnimatedFadeInDown delay={100} threshold={0.2}>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-muted-foreground mb-6 sm:mb-8 md:mb-10 lg:mb-14 leading-relaxed">
              Contact our security experts today for a personalized consultation
              and secure your peace of mind
            </p>
          </AnimatedFadeInDown>
          <AnimatedFadeInUp delay={200} threshold={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap">
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 font-black text-xs sm:text-sm md:text-base lg:text-lg text-center hover:shadow-lg transition-shadow duration-300 inline-block rounded-lg"
              >
                Start Your Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-accent text-accent px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 font-black text-xs sm:text-sm md:text-base lg:text-lg text-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300 inline-block rounded-lg"
              >
                View Services
              </Link>
              <WhatsAppButton size="md" />
            </div>
          </AnimatedFadeInUp>
        </div>
      </section>

      {/* Location Section with Google Maps */}
      <section
        id="head-office-location"
        className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background/98 to-background transition-colors duration-300 relative overflow-hidden"
      >
        {/* Decorative Background Elements - Location Section */}
        <svg
          className="absolute top-0 left-0 w-2/5 h-1/2 opacity-35"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMinYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="locationGradient"
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
                style={{ stopColor: "var(--accent)", stopOpacity: 0.08 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,80 Q100,40 200,80 Q300,120 400,80 L400,0 L0,0 Z"
            fill="url(#locationGradient)"
          />
          <circle
            cx="200"
            cy="150"
            r="50"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.25"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-1/3 h-2/5 opacity-30"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMaxYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400,100 Q300,50 200,100 Q100,150 0,100 L0,300 L400,300 Z"
            fill="var(--accent)"
            opacity="0.05"
          />
          <circle
            cx="300"
            cy="200"
            r="60"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="6,4"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 w-full relative z-10">
          <AnimatedFadeInUp className="mb-8 sm:mb-12 md:mb-16" threshold={0.2}>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 md:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Our Head Office Location
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Visit us at our Islamabad headquarters for consultations and
              inquiries
            </p>
          </AnimatedFadeInUp>

          <AnimatedSlideInFromBottom threshold={0.2}>
            <div className="overflow-hidden border border-border transition-shadow duration-300 hover:shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13282.195486583572!2d72.99590472612844!3d33.66884932093898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95ff25ed8b53%3A0x7e482ec7e99bebe0!2sG-11%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1766783293705!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full sm:h-96 lg:h-[500px]"
              ></iframe>
            </div>
          </AnimatedSlideInFromBottom>
        </div>
      </section>
    </div>
  );
}
