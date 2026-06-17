import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  FileLock2, 
  Mail, 
  MapPin, 
  Globe, 
  Send, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  Award, 
  Building 
} from "lucide-react";

interface ViewProps {
  onBackToHome: () => void;
  onOpenModal: (service?: string) => void;
}

/* ==========================================
   1. PRIVACY POLICY VIEW
   ========================================== */
export function PrivacyPolicyView({ onBackToHome }: ViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <button onClick={onBackToHome} className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
          &larr; BACK TO PORTFOLIO
        </button>
      </div>

      <div className="space-y-8 bg-neutral-900/60 border border-white/[0.05] rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="border-b border-white/[0.04] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-3">
            <ShieldCheck size={12} />
            LEGAL REQUIREMENT & COMPLIANCE
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-gray-500 mt-2">Last Updated: June 17, 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-sans">
          <p>
            At <strong>Xentriq Studio</strong>, accessible from <a href="https://xentriq.studio" className="text-emerald-400 hover:underline">https://xentriq.studio</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Xentriq Studio and how we use it.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">1. Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">2. Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly via our inquiry form, we may receive additional information about you such as your name, email address, phone number, organization or company name, the contents of the message, and any other information you may choose to provide.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">3. How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide, operate, and maintain our website and software.</li>
            <li>Improve, personalize, and expand our platform experiences.</li>
            <li>Understand and analyze how you navigate our interfaces.</li>
            <li>Develop new custom software solutions, features, and workflow capabilities.</li>
            <li>Communicate with you regarding inquiry tickets, updates, and maintenance schedules.</li>
            <li>Send professional digital transformation resources or consultation invitations.</li>
            <li>Detect and prevent security system breaches or network failures.</li>
          </ul>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">4. Log Files</h2>
          <p>
            Xentriq Studio follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">5. Cookies and Google AdSense / DoubleClick</h2>
          <p>
            Like any other website, Xentriq Studio uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.
          </p>
          <p>
            Google is one of our third-party vendors. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">https://policies.google.com/technologies/ads</a>.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">6. CCPA & GDPR Data Protection Rights</h2>
          <p>We want to ensure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>The right to access</strong> – You have the right to request copies of your personal data stored on our cloud systems.</li>
            <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
            <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data under certain conditions.</li>
            <li><strong>The right to restrict or object to processing</strong> – You have the right to request that we restrict or stop processing your data.</li>
            <li><strong>The right to data portability</strong> – You have the right to request that we transfer the collected data to another organization.</li>
          </ul>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">7. Contact Information</h2>
          <p>
            If you have any questions or queries regarding our privacy protocols, or wish to submit an erasure request, please contact our privacy compliance officer directly at <a href="mailto:xentriqin@gmail.com" className="text-emerald-400 hover:underline font-mono">xentriqin@gmail.com</a>.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================
   2. TERMS AND CONDITIONS VIEW
   ========================================== */
export function TermsConditionsView({ onBackToHome }: ViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <button onClick={onBackToHome} className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
          &larr; BACK TO PORTFOLIO
        </button>
      </div>

      <div className="space-y-8 bg-neutral-900/60 border border-white/[0.05] rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="border-b border-white/[0.04] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-3">
            <FileText size={12} />
            AGREEMENT & TERMS OF SERVICE
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs font-mono text-gray-500 mt-2">Last Updated: June 17, 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-sans">
          <p>
            Welcome to <strong>Xentriq Studio</strong>. These Terms and Conditions outline the rules and regulations for the use of Xentriq Studio's Web and Mobile Application development services.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">1. Terms of Use</h2>
          <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Xentriq Studio's platforms if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">2. License & Intellectual Property</h2>
          <p>
            Unless otherwise stated, Xentriq Studio and/or its licensors own the intellectual property rights for all material, layouts, media, graphics, and code on Xentriq Studio. All intellectual property rights are reserved. You must not:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Republish material, assets, or software code from Xentriq Studio.</li>
            <li>Sell, rent, or sub-license system modules from Xentriq Studio.</li>
            <li>Reproduce, duplicate, or copy files or layouts for plagiarism.</li>
            <li>Redistribute content from Xentriq Studio without written developer consent.</li>
          </ul>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">3. Project Inquiries & Form Submissions</h2>
          <p>
            When utilizing our dynamic inquiry forms or consulting interfaces, you agree to provide complete, current, and accurate legal name, company coordinates, and digital contact vectors (email addresses). We reserve the absolute right to block or terminate communication routes originating from mock, spam, or abusive form engines.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">4. Limitation of Liability</h2>
          <p>
            In no event shall Xentriq Studio, nor any of its developers, officers, or engineers, be held liable for any secondary, consequential, special, or indirect damages arising out of or in any way connected with your use of our custom website structures or third-party web application setups.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">5. Governing Law</h2>
          <p>
            These Terms and Conditions will be governed by and interpreted in accordance with the laws of the State of Tamil Nadu, India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any legal disputes.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================
   3. COOKIE POLICY VIEW
   ========================================== */
export function CookiePolicyView({ onBackToHome }: ViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <button onClick={onBackToHome} className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
          &larr; BACK TO PORTFOLIO
        </button>
      </div>

      <div className="space-y-8 bg-neutral-900/60 border border-white/[0.05] rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="border-b border-white/[0.04] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-3">
            <FileLock2 size={12} />
            COOKIES & PREFERENCE COOKIES
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs font-mono text-gray-500 mt-2">Last Updated: June 17, 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-sans">
          <p>
            This is the Cookie Policy for <strong>Xentriq Studio</strong>, accessible from <a href="https://xentriq.studio" className="text-emerald-400 hover:underline">https://xentriq.studio</a>.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">1. What Are Cookies</h2>
          <p>
            As is common practice with almost all professional websites, this site uses cookies, which are tiny files downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored; however, this may downgrade or break certain elements of the site's functionality.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">2. How We Use Cookies</h2>
          <p>
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">3. The Cookies We Set</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Site Prefs Cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. To remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page.
            </li>
            <li>
              <strong>Forms Related Cookies:</strong> When you submit data through a form such as those found on contact pages or inquiry modals, cookies may be set to remember your user details for future correspondence.
            </li>
          </ul>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">4. Third-Party Cookies (Google Analytics, AdSense)</h2>
          <p>
            In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              This site might use <strong>Google Analytics</strong> which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your user experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
            </li>
            <li>
              The <strong>Google AdSense service</strong> we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you. For more information on Google AdSense see the official Google AdSense privacy FAQ.
            </li>
          </ul>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">5. Disabling Cookies</h2>
          <p>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore, it is recommended that you do not disable cookies.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================
   4. DISCLAIMER VIEW
   ========================================== */
export function DisclaimerView({ onBackToHome }: ViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <button onClick={onBackToHome} className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
          &larr; BACK TO PORTFOLIO
        </button>
      </div>

      <div className="space-y-8 bg-neutral-900/60 border border-white/[0.05] rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="border-b border-white/[0.04] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-3">
            <AlertTriangle size={12} />
            WARRANTY & PERFORMANCE DISCLAIMER
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
            Disclaimer
          </h1>
          <p className="text-xs font-mono text-gray-500 mt-2">Last Updated: June 17, 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-sans">
          <p>
            If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <a href="mailto:xentriqin@gmail.com" className="text-emerald-400 hover:underline font-mono">xentriqin@gmail.com</a>.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">1. Disclaimers for Xentriq Studio</h2>
          <p>
            All the information on this website — <a href="https://xentriq.studio" className="text-emerald-400 hover:underline">https://xentriq.studio</a> — is published in good faith and for general information purpose only. Xentriq Studio does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website (Xentriq Studio), is strictly at your own risk. Xentriq Studio will not be liable for any losses and/or damages in connection with the use of our website.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">2. External Links Liability</h2>
          <p>
            From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
          </p>
          <p>
            Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their &ldquo;Terms of Service&rdquo; before engaging in any business or uploading any information.
          </p>

          <h2 className="text-lg font-display font-medium text-white pt-2 border-b border-white/[0.03] pb-1">3. Update</h2>
          <p>
            Should we update, amend, or make any changes to this document, those changes will be prominently posted here.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================
   5. CONTACT US PAGE VIEW
   ========================================== */
export function ContactUsView({ onOpenModal }: ViewProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    interest: "Website Development",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto py-12 px-4 sm:px-6 scroll-mt-20"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Info Sidebar left */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-emerald-500" />
            <span className="text-xs font-mono font-medium tracking-widest text-emerald-400 uppercase">DIRECT CHANNELS</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
            Contact Us
          </h1>

          <p className="text-gray-300 text-sm leading-relaxed">
            Interested in starting a project? We would love to collaborate. Drop your message or consult with a lead engineer at Xentriq Studio.
          </p>

          <div className="space-y-4 pt-4 border-t border-white/[0.05]">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Building size={18} />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500">BUSINESS NAME</p>
                <p className="text-sm font-semibold text-white">Xentriq Studio</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500">EMAIL SUPPORT</p>
                <a href="mailto:xentriqin@gmail.com" className="text-sm font-semibold text-emerald-400 hover:underline font-mono">
                  xentriqin@gmail.com
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500">HEADQUARTERS</p>
                <p className="text-sm text-gray-300">Tamil Nadu, India</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Globe size={18} />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500">GLOBAL DELIVERY</p>
                <p className="text-sm text-gray-300">Worldwide (Remote Handled)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form right */}
        <div className="lg:col-span-7 bg-neutral-900/60 border border-white/[0.05] rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="contact-form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-emerald-500 text-sm placeholder-gray-600 text-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-medium">
                    Your Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-emerald-500 text-sm placeholder-gray-600 text-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-medium">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    placeholder="e.g. My Startup Ltd"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-emerald-500 text-sm placeholder-gray-600 text-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-medium">
                    Core Target Specialty
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/[0.08] focus:border-emerald-500 text-sm text-gray-300 outline-none transition-all"
                  >
                    <option>Website Development</option>
                    <option>Web Application Development</option>
                    <option>Android App Development</option>
                    <option>Mobile App Development</option>
                    <option>E-Commerce Development</option>
                    <option>AI Automation Services</option>
                    <option>AI Chatbot Development</option>
                    <option>Custom Software Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-medium">
                    Outline Your Goals
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello! We are looking to develop a secure mobile app with Firestore integration..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-emerald-500 text-sm placeholder-gray-600 text-white outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Clock size={16} className="animate-spin text-white" />
                        <span>Connecting secure nodes...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="submission-success"
                className="text-center py-12 px-4 space-y-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} className="animate-bounce" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-white">Inquiry Received Successfully!</h3>
                  <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                    Thank you <span className="text-white font-medium">{formData.name}</span>! Our professional software developers have received your request for <span className="text-emerald-400 font-medium">{formData.interest}</span>.
                  </p>
                  <p className="text-xs text-gray-500 font-mono italic">
                    We will analyze your parameters and connect relative support paths back to you within 2-4 hours.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", org: "", interest: "Website Development", message: "" });
                    }}
                    className="text-xs bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/30 text-emerald-300 font-mono py-2 px-4 rounded-xl cursor-pointer"
                  >
                    Submit Another Ticket &rarr;
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}

/* ==========================================
   6. ABOUT US PAGE VIEW
   ========================================== */
export function AboutUsView({ onBackToHome, onOpenModal }: ViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto py-12 px-4 sm:px-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <button onClick={onBackToHome} className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
          &larr; BACK TO PORTFOLIO
        </button>
      </div>

      <div className="space-y-12">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-emerald-500" />
              <span className="text-xs font-mono font-medium tracking-widest text-emerald-400 uppercase">THE ARCHITECTS</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
              About Xentriq Studio
            </h1>
            <p className="text-sm font-mono text-emerald-300">
              Leading Web/App Development & Professional AI Automation Partner
            </p>
          </div>
          
          <div className="lg:col-span-7 bg-white/[0.01] border border-white/[0.05] p-6 rounded-2xl text-gray-300 text-sm leading-relaxed space-y-4">
            <p>
              At <strong>Xentriq Studio</strong>, we are committed to constructing state-of-the-art technological infrastructures designed to scale. Based in **Tamil Nadu, India**, we operate as a specialized team of professional website developers, frontend masters, backend engineers, and AI practitioners.
            </p>
            <p>
              We eliminate technical debt by ensuring all system layers we write use modern framework modules and secure database engines. We help startups and mature business models launch custom e-commerce experiences, native Android apps, and responsive corporate systems optimized to load instantly.
            </p>
          </div>
        </div>

        {/* Our Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Users size={18} />
            </div>
            <h4 className="text-base font-display font-semibold text-white">Client-Centricity</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              We focus deep resources on translating client workflows into fluid software modules, ensuring 100% architectural transparency.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Award size={18} />
            </div>
            <h4 className="text-base font-display font-semibold text-white">Engineering Rigor</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              We enforce strict type safety, modular file extraction, dynamic security rules, and responsive grid layouts on every launch.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Sparkles size={18} />
            </div>
            <h4 className="text-base font-display font-semibold text-white">AI-Powered Workflow</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              We integrate deep-learning intelligence nodes, semantic models, and autonomous scraping features directly into legacy infrastructures.
            </p>
          </div>
        </div>

        {/* Dynamic Location Map Section */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-neutral-950/40 to-neutral-900/60 border border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-3 max-w-md relative z-10">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono tracking-widest uppercase">
              REGIONAL PRESENCE (TAMIL NADU, INDIA)
            </span>
            <h3 className="text-xl font-display font-medium text-white">Serving Globally From South India</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Our engineering center leverages the high-speed dev culture of India's Silicon ecosystem to construct systems for brands globally.
            </p>
          </div>

          <div className="flex-shrink-0 text-center relative z-10">
            <button
              onClick={() => onOpenModal("South India Core Consultation")}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs font-mono transition-all uppercase tracking-wider"
            >
              Consult Local Team
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
