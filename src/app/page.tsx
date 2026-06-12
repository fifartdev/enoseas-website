'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import LogoCloud from '@/components/LogoCloud'
import EntityGrid from '@/components/EntityGrid'
import InquiryForm from '@/components/InquiryForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <LogoCloud />
      <EntityGrid />
      <InquiryForm />
      <Footer />
    </>
  )
}
