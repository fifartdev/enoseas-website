'use client'

import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    domain: '',
    scope: '',
  })

  const formRef = useRef(null)

  useEffect(() => {
    gsap.from(formRef.current?.querySelectorAll('.form-item'), {
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 75%',
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add form submission logic here
  }

  return (
    <section id="contact" className="py-20 bg-navy-dark border-t border-cyan-accent/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Information */}
          <div ref={formRef} className="space-y-8">
            <div className="form-item">
              <h2 className="text-4xl font-bold text-white mb-4 font-tech">Partner with ENOSEAS</h2>
              <p className="text-slate-400 text-lg">
                Connect with our global team of maritime engineering experts to transform your fleet's sustainability and operational efficiency.
              </p>
            </div>

            <div className="form-item">
              <h3 className="text-cyan-accent font-semibold text-lg mb-3">Global Headquarters</h3>
              <p className="text-slate-300">
                Athens, Greece
                <br />
                Maritime Engineering Excellence Center
              </p>
            </div>

            <div className="form-item">
              <h3 className="text-cyan-accent font-semibold text-lg mb-3">Contact Information</h3>
              <p className="text-slate-300">
                Email: partners@enoseas.com
                <br />
                Emergency Support: 24/7 Global Response
              </p>
            </div>

            <div className="form-item">
              <h3 className="text-cyan-accent font-semibold text-lg mb-3">Service Response</h3>
              <p className="text-slate-300">
                We commit to responding to all technical inquiries within 4 business hours globally.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            ref={formRef}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-slate-700/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-item">
                <label className="block text-slate-300 text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-cyan-accent/50 transition"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-item">
                <label className="block text-slate-300 text-sm font-semibold mb-2">Company / Vessel Owner</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-cyan-accent/50 transition"
                  placeholder="Company name"
                  required
                />
              </div>

              <div className="form-item">
                <label className="block text-slate-300 text-sm font-semibold mb-2">Corporate Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-cyan-accent/50 transition"
                  placeholder="email@company.com"
                  required
                />
              </div>

              <div className="form-item">
                <label className="block text-slate-300 text-sm font-semibold mb-2">Technical Domain</label>
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-cyan-accent/50 transition"
                  required
                >
                  <option value="">Select a domain...</option>
                  <option value="engineering">Engineering Design</option>
                  <option value="bwms">BWMS Retrofit</option>
                  <option value="automation">Automation & DAS</option>
                  <option value="decarbonization">Decarbonization Consulting</option>
                </select>
              </div>

              <div className="form-item">
                <label className="block text-slate-300 text-sm font-semibold mb-2">Project Scope</label>
                <textarea
                  name="scope"
                  value={formData.scope}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-cyan-accent/50 transition h-32 resize-none"
                  placeholder="Describe your project requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-cyan-accent text-navy-dark font-bold rounded-lg hover:bg-teal-accent transition-all transform hover:scale-105"
              >
                Submit Technical Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
