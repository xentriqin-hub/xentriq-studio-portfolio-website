import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProcessStep } from "../types";
import { Search, Compass, Paintbrush, Code, ShieldCheck, Rocket, HeartHandshake } from "lucide-react";

const steps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Discovery",
    description: "Deep dive workshops to explore your business goals, target users, and technical scope.",
    details: "We start by analyzing your unique requirements and target audience. Through detailed target-market audits and user persona mapping, we build a comprehensive roadmap of user pain points, functional needs, and project parameters to eliminate assumptions."
  },
  {
    stepNumber: 2,
    title: "Planning",
    description: "Creating a solid blueprint, wireframes, database schemas, and selecting technical stacks.",
    details: "We map out high-level modular system architectures. From deciding the best databases to wireframing layouts and creating complete feature specs, we plan for optimal scaling and development velocity."
  },
  {
    stepNumber: 3,
    title: "Design",
    description: "Crafting a premium UI/UX design with responsive layouts and interactive prototypes.",
    details: "Our UI/UX specialists craft pixel-perfect, clean mockups centered around modern typography, high contrast dark layouts, and intuitive user flows. We iterate with interactive prototypes so you see and feel the exact application interaction prior to coding."
  },
  {
    stepNumber: 4,
    title: "Development",
    description: "Writing high-quality, type-safe clean code to build the backend and client-side modules.",
    details: "Our developers translate designs into robust, performant products using modern, state-of-the-art tech. We build interactive responsive clients with secure server-side APIs, structured cloud connections, and clean local persistence state engines."
  },
  {
    stepNumber: 5,
    title: "Testing",
    description: "Thorough quality assurance testing across browsers, platforms, and network conditions.",
    details: "Your app undergoes rigorous quality assessments. We test responsiveness, load speeds, performance bottlenecks, cross-browser compatibility, and edge cases to guarantee everything functions flawlessy under peak user loads."
  },
  {
    stepNumber: 6,
    title: "Launch",
    description: "Deploying production-ready modules securely to scalable Cloud Run environments.",
    details: "We handle server provisioning, DNS configurations, database schema initializations, and deploy the production-ready build to ultra-fast servers (like Vercel or Cloud Run) for instant availability across the globe with zero downtime."
  },
  {
    stepNumber: 7,
    title: "Support",
    description: "Ongoing systems maintenance, feature updates, performance auditing, and support.",
    details: "Our commitment won't stop at launch. We monitor web telemetry performance metrics, perform security rule audits, roll out feature updates, and offer active support to adapt your application as your customer base expands."
  }
];

const icons = [Search, Compass, Paintbrush, Code, ShieldCheck, Rocket, HeartHandshake];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const ActiveIcon = icons[activeStep - 1];

  return (
    <div id="process-timeline-container" className="w-full">
      {/* Horizontal Steps Stepper - Desktop Only */}
      <div className="hidden lg:flex items-center justify-between relative mb-12 px-4">
        {/* Continuous Connecting Track line */}
        <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-white/[0.04] -translate-y-1/2 z-0" />
        
        {/* Dynamic Green Progress Line */}
        <motion.div 
          className="absolute top-1/2 left-8 h-[2px] bg-gradient-to-r from-emerald-500 through-green-400 to-emerald-300 -translate-y-1/2 z-0"
          initial={false}
          animate={{
            width: `${((activeStep - 1) / (steps.length - 1)) * 90}%`
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {steps.map((step, idx) => {
          const StepIcon = icons[idx];
          const isCompleted = step.stepNumber <= activeStep;
          const isActive = step.stepNumber === activeStep;

          return (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(step.stepNumber)}
              className="relative z-10 flex flex-col items-center group focus:outline-none"
            >
              {/* Outer Capsule Ring */}
              <motion.div
                animate={{
                  scale: isActive ? 1.15 : 1,
                  borderColor: isActive 
                    ? "#10b981" 
                    : isCompleted 
                    ? "#047857" 
                    : "rgba(255,255,255,0.08)",
                  backgroundColor: isActive 
                    ? "#061f12" 
                    : isCompleted 
                    ? "#021109" 
                    : "#000000"
                }}
                className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isActive ? "cursor-default" : "cursor-pointer hover:border-emerald-500/30"
                }`}
              >
                {/* White Icons as requested */}
                <StepIcon 
                  size={19} 
                  className="text-white" 
                />
              </motion.div>
              
              {/* Node index */}
              <span className={`absolute -top-6 text-[10px] font-mono font-medium tracking-widest ${
                isActive ? "text-emerald-400" : "text-gray-500"
              }`}>
                0{step.stepNumber}
              </span>

              {/* Title label */}
              <span className={`mt-3 text-xs font-display font-medium transition-colors ${
                isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"
              }`}>
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid selector - Mobile / Tablet */}
      <div className="lg:hidden grid grid-cols-4 sm:grid-cols-7 gap-2 mb-8">
        {steps.map((step, idx) => {
          const isActive = step.stepNumber === activeStep;
          return (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(step.stepNumber)}
              className={`py-3 px-1 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                isActive 
                  ? "bg-emerald-950/20 border-emerald-500 text-emerald-300" 
                  : "bg-white/[0.02] border-white/[0.05] text-gray-400 hover:bg-white/[0.04]"
              }`}
            >
              <span className="text-[10px] font-mono opacity-65">0{step.stepNumber}</span>
              <span className="text-xs font-medium font-display truncate max-w-full px-1">{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Structured Detailed Viewport Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl glass-premium p-6 md:p-10 border border-emerald-500/25 relative overflow-hidden"
        >
          {/* Subtle green ambient light flare */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            {/* Lead text */}
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded bg-emerald-950/45 border border-emerald-500/20 text-xs font-mono font-medium text-emerald-400 tracking-wider">
                  PHASE 0{activeStep}
                </span>
                <span className="text-gray-500 text-xs font-mono">• Interactive Flow</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-4">
                {steps[activeStep - 1].title}
              </h3>
              
              <p className="text-base text-gray-300 mb-4 font-normal leading-relaxed">
                {steps[activeStep - 1].description}
              </p>
              
              <p className="text-sm text-gray-400 leading-relaxed">
                {steps[activeStep - 1].details}
              </p>
            </div>

            {/* Graphic Container with White Icon */}
            <div className="md:w-1/3 flex justify-center items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-neutral-900 border border-emerald-500/20 flex items-center justify-center relative shadow-lg select-none group">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[4px] rounded-2xl border border-dashed border-emerald-500/10"
                />
                {/* Clean White Icon */}
                <ActiveIcon size={40} className="text-white group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
