import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { ServiceItem } from "../types";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  // Dynamically resolve the corresponding Lucide icon
  const IconComponent = (Icons as any)[service.iconName] || Icons.Code;

  return (
    <motion.div
      id={`service-card-${service.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="relative p-6 rounded-2xl glass hover:bg-emerald-950/15 transition-all duration-300 md:p-8 flex flex-col group overflow-hidden border border-white/[0.05] hover:border-emerald-500/40"
    >
      {/* Dynamic green background light hint */}
      <span className="absolute -right-16 -top-16 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-300" />

      {/* Index badge in green accent */}
      <div className="absolute top-4 right-4 text-[11px] font-mono font-medium text-emerald-400/60 group-hover:text-emerald-400 transition-colors">
        {(index + 1).toString().padStart(2, "0")}
      </div>

      {/* Icon Frame - strictly White and clean */}
      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 text-white group-hover:border-emerald-500/30 group-hover:bg-emerald-950/20 transition-all duration-300">
        <IconComponent size={22} className="text-white group-hover:scale-105 transition-transform duration-300" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-display font-medium text-white tracking-tight mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
        {service.description}
      </p>
    </motion.div>
  );
}
