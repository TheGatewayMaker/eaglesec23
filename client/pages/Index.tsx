import { Link } from "react-router-dom";
import { Shield, Users, Truck, Lock, CheckCircle2, Zap, Award, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Image Right, Text Left */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 md:order-1">
              <p className="text-sm font-semibold text-primary mb-6 uppercase tracking-wider">
                Professional Security Since 1992
              </p>
              <h1 className="text-5xl md:text-6xl font-black text-primary mb-8 leading-tight">
                Elite Security Services
              </h1>
              <p className="text-xl text-foreground font-semibold mb-12 leading-relaxed">
                Drawn from the armed forces of Pakistan, our personnel deliver world-class security with precision, discipline, and unwavering commitment to your safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-primary text-primary-foreground px-8 py-4 font-black text-center rounded-lg hover:shadow-lg transition-all duration-300 inline-block"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-primary text-primary px-8 py-4 font-black text-center rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-block"
                >
                  Request Consultation
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 md:order-2 relative">
              <div className="bg-slate-200 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                <Shield className="w-32 h-32 text-primary opacity-20" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
                <p className="font-black text-lg">30+</p>
                <p className="text-sm font-semibold">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xl md:text-3xl font-black leading-relaxed mb-8">
              We believe that in a world where security has become critical, a personalized approach is key to ensuring you get the protection you deserve.
            </p>
            <p className="text-lg font-semibold opacity-90">
              From static guards and elite bodyguards to mobile escorts and advanced security equipment, we provide comprehensive solutions tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview - Color Blocked */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-16">
            Our Security Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Static Guards - Large Featured Card */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-12 rounded-2xl overflow-hidden relative group">
              <div className="relative z-10">
                <Shield className="w-12 h-12 mb-6 text-accent" />
                <h3 className="text-3xl font-black mb-4">Static Security Guards</h3>
                <p className="text-lg font-semibold opacity-90 mb-6">
                  Vetted, trained professionals providing reliable on-site protection
                </p>
                <Link to="/services" className="inline-block text-accent font-black hover:opacity-70">
                  Learn More →
                </Link>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-accent opacity-10 rounded-full"></div>
            </div>

            {/* Bodyguards Card */}
            <div className="bg-sky-500 text-white p-12 rounded-2xl overflow-hidden relative group">
              <div className="relative z-10">
                <Users className="w-12 h-12 mb-6 text-accent" />
                <h3 className="text-2xl font-black mb-4">Elite Bodyguards</h3>
                <p className="text-base font-semibold opacity-90 mb-6">
                  SSG trained specialists
                </p>
                <Link to="/services" className="inline-block text-accent font-black hover:opacity-70">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Mobile Escorts Card */}
            <div className="bg-amber-600 text-white p-12 rounded-2xl overflow-hidden relative group">
              <div className="relative z-10">
                <Truck className="w-12 h-12 mb-6 text-white" />
                <h3 className="text-2xl font-black mb-4">Mobile Escorts</h3>
                <p className="text-base font-semibold opacity-90 mb-6">
                  Professional movement protection
                </p>
                <Link to="/services" className="inline-block text-white font-black hover:opacity-70">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Security Equipment Card */}
            <div className="bg-slate-600 text-white p-12 rounded-2xl overflow-hidden relative group">
              <div className="relative z-10">
                <Lock className="w-12 h-12 mb-6 text-accent" />
                <h3 className="text-2xl font-black mb-4">Security Equipment</h3>
                <p className="text-base font-semibold opacity-90 mb-6">
                  Advanced surveillance systems
                </p>
                <Link to="/services" className="inline-block text-accent font-black hover:opacity-70">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Feature Grid */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Why Choose Eagle
          </h2>
          <p className="text-xl font-semibold text-foreground mb-16 max-w-2xl">
            Established excellence since 1992
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Military Excellence", desc: "Armed forces trained personnel" },
              { icon: CheckCircle2, title: "Thorough Vetting", desc: "Comprehensive screening process" },
              { icon: Zap, title: "24/7 Availability", desc: "Round-the-clock support" },
              { icon: Target, title: "Customized Solutions", desc: "Tailored to your needs" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-black text-primary mb-3">{item.title}</h3>
                <p className="text-foreground font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            National Presence
          </h2>
          <p className="text-lg font-semibold text-foreground mb-16 max-w-2xl">
            Offices across Pakistan ensuring local expertise and reliable coverage
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-xl border border-border">
              <p className="text-accent font-black text-sm mb-2">HEAD OFFICE</p>
              <h3 className="text-3xl font-black text-primary mb-2">Islamabad</h3>
              <p className="text-foreground font-semibold">Central coordination hub</p>
            </div>

            <div className="p-8 bg-slate-50 rounded-xl border border-border">
              <p className="text-accent font-black text-sm mb-2">REGIONAL</p>
              <h3 className="text-2xl font-black text-primary mb-3">5+ Offices</h3>
              <div className="text-sm font-semibold text-foreground space-y-1">
                <p>Lahore • Karachi</p>
                <p>Multan • Peshawar</p>
              </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-xl border border-border">
              <p className="text-accent font-black text-sm mb-2">COVERAGE</p>
              <h3 className="text-2xl font-black text-primary mb-3">Nationwide</h3>
              <div className="text-sm font-semibold text-foreground space-y-1">
                <p>Including AJK</p>
                <p>Sub-offices countrywide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-black mb-12">Trusted by Leading Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "ARY News",
              "Meezan Bank",
              "DESCON",
              "National Bank",
              "PARCO",
              "UNDP",
              "Imtiaz",
              "State Life",
              "Allied Schools",
              "Shifa Hospitals"
            ].map((client) => (
              <div key={client} className="p-4 border border-primary-foreground rounded-lg text-center">
                <p className="font-semibold text-sm">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-primary mb-8">
            Ready to Protect What Matters?
          </h2>
          <p className="text-xl font-semibold text-foreground mb-12 max-w-2xl mx-auto">
            Contact our security experts today for a personalized consultation
          </p>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-10 py-5 font-black text-lg rounded-lg hover:shadow-lg transition-all duration-300 inline-block"
          >
            Start Your Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-black text-lg mb-4">Eagle Security</h4>
              <p className="text-sm font-semibold opacity-80">Professional security services since 1992</p>
            </div>
            <div>
              <h5 className="font-black mb-4">Services</h5>
              <ul className="space-y-2 text-sm font-semibold opacity-80">
                <li><Link to="/services" className="hover:text-accent">Static Guards</Link></li>
                <li><Link to="/services" className="hover:text-accent">Bodyguards</Link></li>
                <li><Link to="/services" className="hover:text-accent">Mobile Escorts</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black mb-4">Company</h5>
              <ul className="space-y-2 text-sm font-semibold opacity-80">
                <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
                <li><Link to="/why-choose-us" className="hover:text-accent">Why Choose Us</Link></li>
                <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black mb-4">Contact</h5>
              <p className="text-sm font-semibold opacity-80">Islamabad, Pakistan</p>
              <p className="text-sm font-semibold opacity-80 mt-2">Available 24/7</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-center text-sm font-semibold opacity-60">© 2024 Eagle Security Guards. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
