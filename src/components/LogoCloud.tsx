'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LogoCloud() {
  const containerRef = useRef(null)

  useEffect(() => {
    const logos = containerRef.current?.querySelectorAll('.logo-item')
    if (logos) {
      gsap.from(logos, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
      })
    }
  }, [])

  const brands = [
    { name: 'ENOSEAS', color: 'from-cyan-accent to-teal-accent' },
    { name: 'ARGO NAVIS', color: 'from-emerald-accent to-cyan-accent' },
    { name: 'SEA CROSS', color: 'from-cyan-accent to-emerald-accent' },
    { name: 'VELA ELECTRIC', color: 'from-teal-accent to-cyan-accent' },
  ]

  return (
    <section className="py-20 bg-navy-dark border-t border-b border-cyan-accent/20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-slate-400 text-sm font-semibold tracking-widest mb-12 uppercase">
          Corporate Group Entities
        </h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="logo-item group flex items-center justify-center p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700/50 hover:border-cyan-accent/50 transition-all"
            >
              <div className={`text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${brand.color} group-hover:bg-clip-text transition`}>
                <div className="text-white group-hover:text-cyan-accent transition text-lg font-bold">
                  {brand.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
