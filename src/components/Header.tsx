'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-dark/70 backdrop-blur-md border-b border-cyan-accent/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-cyan-accent">
              ENOSEAS
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#group" className="text-slate-300 hover:text-cyan-accent transition">
              Group Profile
            </Link>
            <Link href="#entities" className="text-slate-300 hover:text-cyan-accent transition">
              Member Companies
            </Link>
            <Link href="#solutions" className="text-slate-300 hover:text-cyan-accent transition">
              Solutions
            </Link>
            <Link href="#insights" className="text-slate-300 hover:text-cyan-accent transition">
              Insights
            </Link>
            <Link href="#contact" className="text-slate-300 hover:text-cyan-accent transition">
              Contact
            </Link>
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <button className="bg-cyan-accent hover:bg-teal-accent text-navy-dark font-semibold px-6 py-2 rounded-lg transition">
              Request Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cyan-accent"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              href="#group"
              className="block text-slate-300 hover:text-cyan-accent py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Group Profile
            </Link>
            <Link
              href="#entities"
              className="block text-slate-300 hover:text-cyan-accent py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Member Companies
            </Link>
            <Link
              href="#solutions"
              className="block text-slate-300 hover:text-cyan-accent py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="#insights"
              className="block text-slate-300 hover:text-cyan-accent py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="#contact"
              className="block text-slate-300 hover:text-cyan-accent py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full mt-4 bg-cyan-accent text-navy-dark font-semibold py-2 rounded-lg">
              Request Consultation
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
