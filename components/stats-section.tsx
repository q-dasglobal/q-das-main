"use client";

import { motion } from "framer-motion";
import { FiActivity, FiLayers, FiCpu, FiGlobe } from "react-icons/fi";

export default function StatsSection() {
  const metrics = [
    {
      id: "01",
      label: "Operational Timeline",
      value: "15+",
      unit: "Years",
      icon: FiActivity,
      detail: "Consistent Growth",
    },
    {
      id: "02",
      label: "Project Velocity",
      value: "50+",
      unit: "Completed",
      icon: FiCpu,
      detail: "Across Africa",
    },
    {
      id: "03",
      label: "Core Verticals",
      value: "03",
      unit: "Divisions",
      icon: FiLayers,
      detail: "Tech • Energy • Infra",
    },
    {
      id: "04",
      label: "Regional Focus",
      value: "100%",
      unit: "Committed",
      icon: FiGlobe,
      detail: "Pan-African",
    },
  ];

  return (
    <section className="relative w-full border-y border-white/5 bg-[#0B0F19] py-24">
      {/* Technical Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#0B0F19] via-transparent to-[#0B0F19]" />

      <div className="max-w-8xl relative z-10 mx-auto px-4 sm:px-6">
        <div className="mb-16 flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-8 text-center md:flex-row md:items-end md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 inline-flex items-center gap-2 rounded bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              SYSTEM STATUS: OPTIMAL
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white md:text-5xl">
              The Q-DAS <span className="text-blue-500">Standard</span>.
            </h2>
          </div>
          <p className="max-w-md text-center font-mono text-sm text-slate-400 md:text-right">
            &gt; PRECISION ENGINEERING <br />
            &gt; SCALABLE SOLUTIONS <br />
            &gt; SUSTAINABLE IMPACT
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0B0F19] p-8 transition-colors hover:bg-[#111625]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <metric.icon className="h-6 w-6 text-slate-500 transition-colors group-hover:text-blue-400" />
                  <span className="font-mono text-xs text-slate-600">
                    {metric.id}
                  </span>
                </div>

                <div className="mb-2 flex items-baseline gap-1">
                  <span className="font-sans text-4xl font-bold text-white group-hover:text-blue-50">
                    {metric.value}
                  </span>
                  <span className="font-mono text-xs text-blue-400">
                    {metric.unit}
                  </span>
                </div>

                <h3 className="mb-1 text-sm font-medium text-slate-300">
                  {metric.label}
                </h3>
                <p className="text-xs text-slate-500">{metric.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
