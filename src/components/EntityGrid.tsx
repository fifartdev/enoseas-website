'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

interface EntityCardProps {
  title: string
  description: string
  services: string[]
  imageUrl: string
  accentColor: string
}

function EntityCard({ title, description, services, imageUrl, accentColor }: EntityCardProps) {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 75%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
    })
  }, [])

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-lg h-96 hover:shadow-2xl transition-all duration-300"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity">
        <div className={`absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent`}></div>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8">
        <h3 className={`text-3xl font-bold mb-2 text-${accentColor === 'cyan' ? 'cyan-accent' : 'teal-accent'}`}>
          {title}
        </h3>
        <p className="text-slate-300 mb-4 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {services.map((service, index) => (
            <span
              key={index}
              className={`text-xs px-3 py-1 rounded-full bg-${
                accentColor === 'cyan' ? 'cyan-accent/20' : 'teal-accent/20'
              } text-${accentColor === 'cyan' ? 'cyan-accent' : 'teal-accent'}`}
            >
              {service}
            </span>
          ))}
        </div>

        {/* Accent Line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${
            accentColor === 'cyan' ? 'cyan-accent' : 'teal-accent'
          } to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}
        ></div>
      </div>
    </div>
  )
}

export default function EntityGrid() {
  const entities = [
    {
      title: 'ARGO NAVIS Engineers',
      description: 'Advanced marine engineering consultancy specializing in 3D laser scanning, BWMS retrofits, and fleet energy optimization.',
      services: ['3D Laser Scanning', 'BWMS Retrofit', 'Energy Optimization'],
      imageUrl:
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      accentColor: 'cyan',
    },
    {
      title: 'SEA CROSS Engineering',
      description: 'On-site custom engineering solutions with comprehensive commissioning and Techcross™ licensed support services.',
      services: ['Custom Engineering', 'Commissioning', 'Technical Support'],
      imageUrl:
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      accentColor: 'cyan',
    },
    {
      title: 'VELA ELECTRIC',
      description: 'Onboard automation, data acquisition systems, and custom switchboards for complete vessel digitalization.',
      services: ['Automation', 'Data Systems', 'Switchboards'],
      imageUrl:
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      accentColor: 'cyan',
    },
  ]

  return (
    <section id="entities" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-tech">
            Our Specialized Entities
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Distinct yet cohesive marine engineering expertise across consulting, implementation, and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entities.map((entity, index) => (
            <EntityCard
              key={index}
              title={entity.title}
              description={entity.description}
              services={entity.services}
              imageUrl={entity.imageUrl}
              accentColor={entity.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
