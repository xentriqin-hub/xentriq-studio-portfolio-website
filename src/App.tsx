import React, { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { 
  ArrowUpRight, 
  MessageSquarePlus, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Sparkles, 
  ChevronRight, 
  Layers, 
  Gauge, 
  TrendingUp, 
  BrainCircuit, 
  Maximize2, 
  ShieldCheck, 
  Headphones, 
  Cpu,
  Smartphone,
  Tablet,
  ShoppingBag,
  Bot,
  Zap,
  Palette,
  LayoutGrid,
  Server,
  Flame,
  Settings,
  Globe
} from "lucide-react";

import Background3D from "./components/Background3D";
import ServiceCard from "./components/ServiceCard";
import WhyChooseCard from "./components/WhyChooseCard";
import ProcessTimeline from "./components/ProcessTimeline";
import InquiryModal from "./components/InquiryModal";
import FAQSection from "./components/FAQSection";
import { 
  PrivacyPolicyView, 
  TermsConditionsView, 
  CookiePolicyView, 
  DisclaimerView, 
  ContactUsView, 
  AboutUsView 
} from "./components/PolicyViews";

import { ServiceItem, FeatureItem } from "./types";

// List of 12 Services
const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Custom fast-loading landing pages and corporate websites featuring elegant responsive interfaces and fluid interactive storytelling.",
    iconName: "Globe"
  },
  {
    id: "web-app",
    title: "Web Application Development",
    description: "Scalable SaaS clients and multi-tenant administrative portals with precise real-time state synchronization and cloud capability.",
    iconName: "Cpu"
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description: "Immersive cross-platform applications customized for high user retention, native smoothness, and unified visual logic.",
    iconName: "Smartphone"
  },
  {
    id: "android-app",
    title: "Android App Development",
    description: "Highly optimized native Android solutions built with Jetpack Compose, emphasizing device performance and extreme memory efficiency.",
    iconName: "Tablet"
  },
  {
    id: "ecom-web",
    title: "E-Commerce Websites",
    description: "Modern commerce setups featuring secure payment gates, intelligent inventory filters, and fluid transactional paths.",
    iconName: "ShoppingBag"
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    description: "Intelligent conversational nodes powered by the latest LLMs to handle inbound inquiries, resolve context-bound tickets, and convert leads.",
    iconName: "Bot"
  },
  {
    id: "ai-auto",
    title: "AI Automation",
    description: "No-code and custom API-driven autonomous agents capable of streamlining internal procedures, scraping telemetry, and compiling files.",
    iconName: "Zap"
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    description: "Intricately drafted wireframes, click-through layouts, typography guidelines, and complete layouts structured to maximize conversions.",
    iconName: "Palette"
  },
  {
    id: "front-dev",
    title: "Frontend Development",
    description: "Component-organized, lightning-fast web applications authored using robust frameworks and high-contrast client standards.",
    iconName: "LayoutGrid"
  },
  {
    id: "back-dev",
    title: "Backend Development",
    description: "Robust type-safe endpoints, custom server routing networks, balanced horizontal architectures, and database scalability.",
    iconName: "Server"
  },
  {
    id: "firebase-int",
    title: "Firebase Integration",
    description: "Serverless setup, dynamic Firestore modeling, secure database rulesets, cloud operations, and real-time document sockets.",
    iconName: "Flame"
  },
  {
    id: "custom-soft",
    title: "Custom Software Solutions",
    description: "Bespoke custom software engines designed around specific workflows to transform unique challenges into fluid competitive edges.",
    iconName: "Settings"
  }
];

// Why Choose Us list of 8 features
const featuresData: FeatureItem[] = [
  {
    id: "tech-stack",
    title: "Modern Technology Stack",
    description: "We deploy modern technologies including React, Tailwind v4, Node, and TypeScript for long-term scalability.",
    iconName: "Layers"
  },
  {
    id: "fast-perf",
    title: "Fast Performance",
    description: "Optimized server responses, code-splitting, lazy imports, and lightweight bundle volumes ensuring Instant Load times.",
    iconName: "Gauge"
  },
  {
    id: "scale-sol",
    title: "Scalable Solutions",
    description: "System structures engineered to comfortably absorb spike traffic and growing datastore loads without failing.",
    iconName: "TrendingUp"
  },
  {
    id: "ai-innovation",
    title: "AI-Powered Innovation",
    description: "Integrating LLM microservices, predictive algorithms, and semantic workflows directly into your operational flows.",
    iconName: "BrainCircuit"
  },
  {
    id: "mobile-first",
    title: "Mobile-First Design",
    description: "Adaptive grid structures ensuring stunning high-fidelity visual displays on small mobile frames and large ultra-wides.",
    iconName: "Maximize2"
  },
  {
    id: "secure-dev",
    title: "Secure Development",
    description: "Encrypting credentials, validation strategies, and writing secure database access rules to bulletproof systems.",
    iconName: "ShieldCheck"
  },
  {
    id: "reliable-support",
    title: "Reliable Support",
    description: "Direct and rapid engineer-to-client messaging channels, feature iterations, and continuous active maintenance.",
    iconName: "Headphones"
  },
  {
    id: "pro-uiux",
    title: "Professional UI/UX",
    description: "Every single interface we design features gorgeous typeface curves, generous spacing, high contrast, and tactile feedback.",
    iconName: "Sparkles"
  }
];

// Specialized List (13 Items)
const specializations = [
  "Website Development",
  "Web Application Development",
  "Android App Development",
  "Mobile App Development",
  "E-Commerce Solutions",
  "AI Automation",
  "AI Chatbots",
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "Firebase Integration",
  "Cloud Solutions",
  "Custom Software Development"
];

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [currentPage, setCurrentPage] = useState<"home" | "privacy" | "terms" | "cookies" | "disclaimer" | "contact" | "about">("home");

  React.useEffect(() => {
    const handleRouting = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);
      const p = params.get("page") || hash.replace("#", "");

      // Dynamic Title & State Handling
      if (p === "privacy" || p === "privacy-policy") {
        setCurrentPage("privacy");
        window.scrollTo(0, 0);
        document.title = "Privacy Policy — Xentriq Studio Compliance";
      } else if (p === "terms" || p === "terms-and-conditions") {
        setCurrentPage("terms");
        window.scrollTo(0, 0);
        document.title = "Terms and Conditions — Xentriq Studio Agreement";
      } else if (p === "cookies" || p === "cookie-policy") {
        setCurrentPage("cookies");
        window.scrollTo(0, 0);
        document.title = "Cookie Policy — Xentriq Studio Preferences";
      } else if (p === "disclaimer") {
        setCurrentPage("disclaimer");
        window.scrollTo(0, 0);
        document.title = "Professional Disclaimer — Xentriq Studio Statement";
      } else if (p === "contact" || p === "contact-us") {
        setCurrentPage("contact");
        window.scrollTo(0, 0);
        document.title = "Contact Us — Connect with Xentriq Studio Developers";
      } else if (p === "about" || p === "about-us") {
        setCurrentPage("about");
        window.scrollTo(0, 0);
        document.title = "About Us — Xentriq Studio Team & Values";
      } else {
        setCurrentPage("home");
        document.title = "Xentriq Studio — Premium Website & Mobile App Development Company";
        if (hash) {
          try {
            const target = document.querySelector(hash);
            if (target) {
              setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }
          } catch (e) {
            // invalid selector
          }
        }
      }
    };

    window.addEventListener("hashchange", handleRouting);
    handleRouting();

    return () => {
      window.removeEventListener("hashchange", handleRouting);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpenModal = (servicePreset = "") => {
    setSelectedService(servicePreset);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="xentriq-studio-app" className="relative min-h-screen text-gray-200 select-none bg-[#000000]">
      {/* 3D Interactive background */}
      <Background3D />

      {/* Top Reading Linear Progress Indicator Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-300 origin-[0%] z-55"
        style={{ scaleX }}
      />

      {/* Primary Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-black/60 backdrop-blur-md border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Brand Title with requested logo attachment link */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co/DHpH9tqC/Whats-App-Image-2026-06-17-at-1-14-32-PM.jpg" 
              alt="Xentriq Studio Logo" 
              referrerPolicy="no-referrer"
              className="w-10 h-10 object-cover rounded-xl border border-white/[0.08]"
            />
            <span className="font-display font-bold text-xl tracking-tight text-white transition-colors">
              Xentriq <span className="text-emerald-400">Studio</span>
            </span>
          </a>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#why-choose-us" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Benefits</a>
            <a href="#process" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Process</a>
            <a href="#coming-soon" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              COMING SOON
            </a>
          </nav>

          {/* Quick Trigger Button */}
          <div>
            <button
              onClick={() => handleOpenModal("")}
              className="py-2.5 px-5 rounded-xl bg-white/[0.03] hover:bg-emerald-950/15 border border-white/[0.08] hover:border-emerald-500/30 text-white text-sm font-medium transition-all duration-300 flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 pb-20">

        {currentPage === "privacy" && <PrivacyPolicyView onBackToHome={() => window.location.hash = ""} onOpenModal={handleOpenModal} />}
        {currentPage === "terms" && <TermsConditionsView onBackToHome={() => window.location.hash = ""} onOpenModal={handleOpenModal} />}
        {currentPage === "cookies" && <CookiePolicyView onBackToHome={() => window.location.hash = ""} onOpenModal={handleOpenModal} />}
        {currentPage === "disclaimer" && <DisclaimerView onBackToHome={() => window.location.hash = ""} onOpenModal={handleOpenModal} />}
        {currentPage === "contact" && <ContactUsView onBackToHome={() => window.location.hash = ""} onOpenModal={handleOpenModal} />}
        {currentPage === "about" && <AboutUsView onBackToHome={() => window.location.hash = ""} onOpenModal={handleOpenModal} />}

        {currentPage === "home" && (
          <>
            {/* HERO SECTION */}
            <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-center text-center py-12 md:py-24 relative overflow-hidden">
          {/* Subtle Ambient green Light behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 max-w-4xl"
          >
            {/* Slogan Mini Headline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] shadow-md bg-black">
              <Sparkles size={14} className="text-emerald-400" />
              <span className="text-xs font-mono font-semibold tracking-wider text-emerald-300 uppercase">
                Premium Next-Gen Software solutions
              </span>
            </div>

            {/* Main Interactive Headline markup */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-medium text-white tracking-tight leading-[1.1] pb-1">
              Welcome To <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                Xentriq Studio
              </span> Portfolio
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-normal">
              <span className="text-white font-medium">Xentriq Studio</span> is a modern digital studio transforming ambitious concepts into high-end web, mobile, and custom AI software.
            </p>

            {/* Brand/Slogan Hook phrase */}
            <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
              • High-Speed Performance • Durable Cloud Databases • Seamless AI Solutions
            </p>

            {/* CTA Buttons - featuring "a very green gradient" */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              {/* Primary Green Gradient Button */}
              <button
                onClick={() => handleOpenModal("General Solutions")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-md"
              >
                <span>Get Started Now</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Translucent Button */}
              <button
                onClick={() => handleOpenModal("Consultation Invitation")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-emerald-500/30 text-white font-medium text-base transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact Us</span>
                <MessageSquarePlus size={18} className="text-white" />
              </button>
            </div>
          </motion.div>
        </section>


        {/* ABOUT SECTION */}
        <section id="about" className="py-20 md:py-28 border-t border-white/[0.03] scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Context Statement */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-emerald-500" />
                <span className="text-xs font-mono font-medium tracking-widest text-emerald-400 uppercase">ABOUT THE STUDIO</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
                About Xentriq Studio
              </h2>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Xentriq Studio is a modern digital solutions company focused on delivering high-quality software products and innovative technology solutions. We help startups, businesses, creators, and organizations transform their ideas into powerful digital experiences.
              </p>
              <div className="p-5 rounded-2xl glass border border-emerald-500/15">
                <p className="text-sm font-mono text-emerald-300 leading-relaxed">
                  &ldquo;We architect fast, reliable, secure software engineered to handle intense workloads so you can concentrate purely on scalability.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Specializations Badges */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-lg font-display font-medium text-white tracking-wide">
                We specialize in:
              </h3>
              
              {/* Interactive Grid Matrix of specialties in clean green highlights */}
              <div className="flex flex-wrap gap-2.5">
                {specializations.map((spec, index) => (
                  <motion.button
                    key={spec}
                    onClick={() => handleOpenModal(spec)}
                    initial={{ opacity: 0, scale: 0.93 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.04 }}
                    className="px-4 py-2 rounded-full bg-white/[0.02] hover:bg-emerald-950/15 border border-white/[0.08] hover:border-emerald-500/30 text-xs sm:text-sm font-medium text-white cursor-pointer transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{spec}</span>
                    <ArrowUpRight size={12} className="text-emerald-300" />
                  </motion.button>
                ))}
              </div>

              <p className="text-xs text-gray-500 font-mono mt-2">
                * Click on any specialty to prefill your inquiry modal directly.
              </p>
            </div>

          </div>
        </section>


        {/* SERVICES SECTION */}
        <section id="services" className="py-20 md:py-28 border-t border-white/[0.03] scroll-mt-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.08]">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400">ENGINEERING CAPABILITIES</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
              Our Professional Services
            </h2>
            
            <p className="text-sm sm:text-base text-gray-400">
              Explore the full technological suite engineered here. We construct robust architectures, beautiful clients, and highly optimized automation layers.
            </p>
          </div>

          {/* Grid of 12 beautiful cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, idx) => (
              <div 
                key={service.id} 
                onClick={() => handleOpenModal(service.title)}
                className="cursor-pointer"
                title={`Request ${service.title}`}
              >
                <ServiceCard service={service} index={idx} />
              </div>
            ))}
          </div>
        </section>


        {/* WHY CHOOSE US SECTION */}
        <section id="why-choose-us" className="py-20 md:py-28 border-t border-white/[0.03] scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-emerald-500" />
                <span className="text-xs font-mono font-medium tracking-widest text-emerald-400 uppercase">OUR PROMISES</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
                Why Choose Us
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                We believe in writing beautiful, secure code and designing interfaces that feel natural. We focus on these key structural standards so your applications launch safely and stay highly performant forever.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => handleOpenModal("Strategic Development Consultation")}
                  className="px-6 py-3 rounded-xl bg-white/[0.02] hover:bg-emerald-950/15 border border-white/[0.08] hover:border-emerald-500/30 text-white text-sm font-semibold transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Consult An Architect</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Features Cards Grid (8 Cards with White Icons) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuresData.map((feature, idx) => (
                <WhyChooseCard key={feature.id} feature={feature} index={idx} />
              ))}
            </div>

          </div>
        </section>


        {/* OUR PROCESS SECTION */}
        <section id="process" className="py-20 md:py-28 border-t border-white/[0.03] scroll-mt-20">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.08]">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">SYSTEMATIC LIFECYCLE</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
              Our Professional Process
            </h2>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              We eliminate guesswork with an structured sequence of collaborative checkpoints. Tap through our phases to see our development trajectory.
            </p>
          </div>

          {/* Interactive Stepper */}
          <ProcessTimeline />
        </section>


        {/* DYNAMIC FAQ ACCORDION SECTION */}
        <FAQSection />


        {/* UPCOMING PRODUCT SECTION - rebranded to TN Today */}
        <section id="coming-soon" className="py-20 md:py-28 border-t border-white/[0.03] scroll-mt-20 relative">
          
          <div className="rounded-3xl glass-premium border border-emerald-500/20 overflow-hidden p-8 md:p-14 relative">
            {/* Background lights */}
            <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-10 top-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Text Highlights Info left */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Coming Soon custom Badge */}
                <span className="px-4 py-1.5 rounded bg-[#000000] border border-emerald-500/25 text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">
                  COMING SOON
                </span>
                
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                    TN Today
                  </h3>
                  <p className="text-sm font-mono text-emerald-300">
                    Next-Generation Verified Content Reader
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  TN Today is currently developing its own modern news platform designed to deliver verified, fast, and user-friendly news experiences. Built with modern technologies and AI-powered workflows, the platform focuses on performance, reliability, and simplicity.
                </p>

                {/* Bullet Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Daily News Updates",
                    "Fast Loading Experience",
                    "Modern User Interface",
                    "AI-Powered Content Processing",
                    "Real-Time Notifications",
                    "Secure Cloud Infrastructure",
                    "Mobile-First Experience"
                  ].map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Inquiry hook button */}
                <div className="pt-4">
                  <button
                    onClick={() => handleOpenModal("TN Today Inquiry")}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-md"
                  >
                    <span>Inquire About Launch</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>

              {/* Graphical Preview Monitor Card right */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[340px] rounded-2xl border border-white/[0.08] bg-[#000000] p-5 shadow-2xl relative">
                  
                  {/* Status header with local datetime */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 border-b border-white/[0.04] pb-3 mb-4">
                    <span>LAUNCH STATUS: ACTIVE</span>
                    <span>v0.8.4_beta</span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-6 w-24 bg-white/[0.03] rounded" />
                    <div className="h-10 w-full bg-gradient-to-r from-emerald-950/20 to-green-950/20 border border-emerald-500/10 rounded-lg flex items-center px-3 gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-mono text-gray-300 truncate">Synthesizing Verified News Feed...</span>
                    </div>
                    
                    <div className="space-y-2 pt-2">
                      <div className="h-[2px] w-full bg-white/[0.04]" />
                      <div className="h-4 w-full bg-white/[0.02] rounded" />
                      <div className="h-4 w-5/6 bg-white/[0.02] rounded" />
                      <div className="h-4 w-2/3 bg-white/[0.02] rounded" />
                    </div>

                    <div className="pt-4">
                      <div className="p-3 rounded-lg bg-neutral-950 border border-white/[0.04] flex items-center justify-between">
                        <span className="text-xs text-white font-medium">Real-time alerts</span>
                        <span className="text-[10px] font-mono text-emerald-400 bg-neutral-900 px-2 py-0.5 rounded border border-emerald-800/10">ENABLED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

          </>
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.04] bg-black/80 relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pb-12">
            
            {/* Branding Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="https://i.ibb.co/DHpH9tqC/Whats-App-Image-2026-06-17-at-1-14-32-PM.jpg" 
                  alt="Xentriq Studio Logo" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 object-cover rounded-lg border border-white/[0.08]"
                />
                <span className="font-display font-bold text-lg tracking-tight text-white">
                  Xentriq Studio
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Premium digital products and AI automated workflows designed for maximum scaling. Based in Tamil Nadu, India.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home Portfolio</a></li>
                <li><a href="#about-us" className="text-gray-400 hover:text-white transition-colors">About Us Page</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Core Services</a></li>
                <li><a href="#contact-us" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Trust & FAQ</a></li>
              </ul>
            </div>

            {/* Policies & Legal Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Policies & Legal</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>

            {/* Social Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Social Places</h4>
              <div className="flex gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/[0.05]" title="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/[0.05]" title="Twitter/X">
                  <Twitter size={17} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/[0.05]" title="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
              <p className="text-[10px] text-gray-500 font-mono">
                Connect directly on major developer hubs.
              </p>
            </div>

            {/* Direct Contact Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Direct Connect</h4>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-emerald-400 mb-0.5" />
                  <a href="mailto:xentriqin@gmail.com" className="hover:text-white transition-colors font-mono">xentriqin@gmail.com</a>
                </div>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  Headquartered in Tamil Nadu, India. Operating globally.
                </p>
                <div className="pt-1">
                  <button
                    onClick={() => handleOpenModal("Footer Consultation Call")}
                    className="text-[10px] bg-white/[0.02] hover:bg-emerald-950/15 border border-white/[0.08] text-emerald-300 font-mono py-1.5 px-3 rounded-lg cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Instant Inquiry</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Core copyright footer bottom bar */}
          <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
            <span>© 2026 Xentriq Studio. All rights reserved.</span>
            <span>Synthesized with extreme care</span>
          </div>

        </div>
      </footer>

      {/* Inquiry Popup modal panel */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultService={selectedService}
      />
    </div>
  );
}
