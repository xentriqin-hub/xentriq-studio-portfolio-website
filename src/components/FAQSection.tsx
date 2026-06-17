import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is Xentriq Studio a premier Website Development Company in India?",
    answer: "Yes, Xentriq Studio is a premium web development company in Tamil Nadu, India. We serve as a leading technology solutions partner delivering custom website development, enterprise SaaS platforms, and digital transformation services to startups and corporations worldwide."
  },
  {
    question: "What specific Web Development Services and custom software solutions do you provide?",
    answer: "We offer end-to-end full stack software development including custom website design, web application development, frontend development (React, Next.js), backend development (Node, Firebase, SQL), and Android app development using Jetpack Compose/Kotlin. We also configure robust server networks and databases designed for scalability."
  },
  {
    question: "How do your AI Automation Services and AI Chatbot Development help businesses?",
    answer: "We specialize in modern AI business solutions. By implementing intelligent conversing AI chatbots and autonomous agents, we streamline client operations, manage inbound sales leads, resolve context-heavy inquiry tickets, and automate repetitive file-compiling runs. This boosts your internal efficiency and supports scalable digital conversion."
  },
  {
    question: "Does Xentriq Studio construct E-Commerce Website Development?",
    answer: "Absolutely. We build modern, highly secure e-commerce systems complete with frictionless checkout paths, global payment gateway integrations, rapid inventory search filters, and smooth administrative dashboards, ensuring a high retention rate and instant page loads."
  },
  {
    question: "How do you achieve fast loading times and optimized Core Web Vitals?",
    answer: "We focus heavily on performance-optimized frontend development. Using Tailwind CSS, code-splitting, static caching strategies, lean bundle-volumes, and semantic HTML structure, we build responsive website designs that target near-perfect 100/100 Lighthouse performance and SEO indexing scores."
  },
  {
    question: "Where are Xentriq Studio's professional website developers located?",
    answer: "Our core engineering studio is located in Tamil Nadu, India, but we operate a remote, cloud-native workflow that permits us to partner with clients across India, North America, Europe, and globally. You can schedule a strategy session with a lead architect directly through our contact page."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-white/[0.03] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.08]">
            <HelpCircle size={12} className="text-emerald-400" />
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
              Frequently Asked Questions (FAQ)
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
            Trust & Transparency
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Find immediate answers regarding our capabilities, tech stack, location, and optimized development lifecycle.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.02] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className="text-sm font-semibold sm:text-base text-white tracking-tight pr-4 hover:text-emerald-300 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 p-1.5 rounded-lg bg-white/[0.04] text-gray-400"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-400 leading-relaxed border-t border-white/[0.02]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Hook */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/20 to-neutral-950/50 border border-emerald-500/10 text-center space-y-3">
          <p className="text-xs font-mono text-emerald-300 flex items-center justify-center gap-1.5">
            <Sparkles size={12} className="animate-pulse" />
            STILL HAVE QUESTIONS?
          </p>
          <p className="text-sm text-gray-300">
            Our expert designers and full-stack software developers are ready to consult on your unique targets.
          </p>
          <div className="pt-1">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs text-white font-mono bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 px-4 py-2 rounded-xl transition-all"
            >
              <span>Speak to an Architect</span>
              <ChevronDown size={12} className="-rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
