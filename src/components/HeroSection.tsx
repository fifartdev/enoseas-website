'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline()

    tl.from('.hero-title', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
    })
      .from(
        '.hero-subtitle',
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.7'
      )
      .from(
        '.hero-buttons',
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-gradient-to-b from-navy-dark via-navy-dark to-slate-900 overflow-hidden"
    >
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-accent/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-tech">
            Engineering the Future of Global Shipping
          </h1>

          <p className="hero-subtitle text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Sustainable Marine Engineering, Automation, and Decarbonization Solutions for the World's Fleet
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cyan-accent text-navy-dark font-bold rounded-lg hover:bg-teal-accent transition-all transform hover:scale-105">
              Explore Group Entities
            </button>
            <button className="px-8 py-4 border-2 border-cyan-accent text-cyan-accent font-bold rounded-lg hover:bg-cyan-accent/10 transition">
              View Technical Capabilities
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
