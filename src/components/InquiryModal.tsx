import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle, Sparkles } from "lucide-react";
import { InquiryFormData } from "../types";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const servicesList = [
  "Website Development",
  "Web Application Development",
  "Mobile App Development",
  "Android App Development",
  "E-Commerce Websites",
  "AI Chatbots",
  "AI Automation",
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Firebase Integration",
  "Custom Software Solutions",
  "Other / Custom Consultation"
];

export default function InquiryModal({ isOpen, onClose, defaultService = "" }: InquiryModalProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: "",
    email: "",
    companyName: "",
    serviceRequired: defaultService || servicesList[0],
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Partial<InquiryFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync default service when modal is targeted with specific requests
  React.useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceRequired: defaultService }));
    }
  }, [defaultService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof InquiryFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Partial<InquiryFormData> = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please provide a valid email structure";
    }
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      companyName: "",
      serviceRequired: defaultService || servicesList[0],
      message: ""
    });
    setFormErrors({});
    setIsSuccess(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="inquiry-modal-portal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Glass Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-full max-w-lg rounded-2xl glass-premium border border-emerald-500/30 overflow-hidden shadow-2xl relative z-10 p-6 md:p-8"
          >
            {/* Top Close Indicator */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Modal Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="text-emerald-400" size={15} />
                    <span className="text-[10px] font-mono font-medium tracking-widest text-emerald-400 uppercase">
                      XENTRIQ STUDIO INQUIRY
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-medium text-white">Let&apos;s Build Together</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Tell us about your digital goals. We typically respond within 4 hours.
                  </p>
                </div>

                {/* Form fields */}
                <div className="space-y-3">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Liam Vance"
                      className={`w-full bg-[#000000] border ${
                        formErrors.fullName ? "border-red-500/50" : "border-white/[0.08] focus:border-emerald-500/45"
                      } rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500/20 placeholder-gray-600 transition-colors`}
                    />
                    {formErrors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Email & Company Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. liam@company.com"
                        className={`w-full bg-[#000000] border ${
                          formErrors.email ? "border-red-500/50" : "border-white/[0.08] focus:border-emerald-500/45"
                        } rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500/20 placeholder-gray-600 transition-colors`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-red-400 mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Optional"
                        className="w-full bg-[#000000] border border-white/[0.08] focus:border-emerald-500/45 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500/20 placeholder-gray-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service needed select */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1">Service Required</label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full bg-[#000000] border border-white/[0.08] focus:border-emerald-500/45 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-colors"
                    >
                      {servicesList.map((service) => (
                        <option key={service} value={service} className="bg-neutral-950 text-gray-200">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us a bit about your idea, timeline, or requirements..."
                      className={`w-full bg-[#000000] border ${
                        formErrors.message ? "border-red-500/50" : "border-white/[0.08] focus:border-emerald-500/45"
                      } rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500/20 placeholder-gray-600 transition-colors resize-none`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.message}</p>
                    )}
                  </div>
                </div>

                {/* Form CTA Actions */}
                <div className="flex gap-3 pt-4 border-t border-white/[0.05]">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-3 px-4 rounded-xl border border-white/[0.05] hover:bg-white/5 text-gray-300 text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-350 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success Screen Card */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 bg-emerald-950/40 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={32} className="text-emerald-400" />
                </div>

                <div>
                  <h4 className="text-xl font-display font-medium text-white">Inquiry Received Successfully!</h4>
                  <p className="text-sm text-gray-400 mt-2 max-w-sm mx-auto">
                    Thank you for reaching out to Xentriq Studio. Our systems have processed your inquiry relative to{" "}
                    <span className="text-emerald-400 font-medium">{formData.serviceRequired}</span>.
                  </p>
                  <p className="text-xs text-emerald-400/80 font-mono mt-4">
                    Reference ID: XS-{Math.floor(Math.random() * 90000 + 10000)}
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2 max-w-xs mx-auto">
                  <button
                    onClick={handleReset}
                    className="text-xs font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4 cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                  <button
                    onClick={onClose}
                    className="mt-2 py-2.5 px-6 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white text-sm font-medium transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
