'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-cyan-accent/20 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-cyan-accent font-bold text-lg mb-4">ENOSEAS Group</h3>
            <p className="text-sm text-slate-400">
              Leading maritime engineering and decarbonization solutions for global shipping companies and shipyards.
            </p>
          </div>

          {/* Column 2: Entities */}
          <div>
            <h3 className="text-cyan-accent font-bold text-lg mb-4">Our Entities</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-cyan-accent transition">
                  ARGO NAVIS Engineers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-accent transition">
                  SEA CROSS Engineering
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-accent transition">
                  VELA ELECTRIC
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-cyan-accent font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-cyan-accent transition">
                  Engineering Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-accent transition">
                  Fleet Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-accent transition">
                  Vessel Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-accent transition">
                  Decarbonization
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance */}
          <div>
            <h3 className="text-cyan-accent font-bold text-lg mb-4">Compliance</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-accent rounded-full"></span>
                ISO 9001 Certified
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-accent rounded-full"></span>
                Green Shipping Compliant
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-accent rounded-full"></span>
                IMO Recognized
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; 2024 ENOSEAS Group. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link href="#" className="hover:text-cyan-accent transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-cyan-accent transition">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-cyan-accent transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
