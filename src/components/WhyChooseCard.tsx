import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { FeatureItem } from "../types";

interface WhyChooseCardProps {
  feature: FeatureItem;
  index: number;
  key?: React.Key;
}

export default function WhyChooseCard({ feature, index }: WhyChooseCardProps) {
  const IconComponent = (Icons as any)[feature.iconName] || Icons.Cpu;

  return (
    <motion.div
      id={`feature-card-${feature.id}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-2xl glass hover:bg-emerald-950/10 hover:border-emerald-500/25 transition-all duration-300 flex items-start gap-4 border border-white/[0.04]"
    >
      {/* Icon Frame - White and clean as requested */}
      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white">
        <IconComponent size={18} />
      </div>
      <div>
        <h4 className="text-base font-display font-medium text-white mb-1">
          {feature.title}
        </h4>
        <p className="text-sm text-gray-400 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
