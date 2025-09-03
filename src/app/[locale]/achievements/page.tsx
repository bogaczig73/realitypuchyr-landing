'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FiArrowRight, FiAward, FiStar, FiX } from 'react-icons/fi'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import GetInTuch from '../components/get-in-touch'
import Switcher from '../components/switcher'

// Achievements data using translations
const getAchievements = (t: any) => [
  {
    id: 1,
    title: t('achievements.2022.title'),
    description: t('achievements.2022.description'),
    year: "2022",
    image: "/images/achievements/makler-roku-2022.webp"
  },
  {
    id: 2,
    title: t('achievements.2024.title'),
    description: t('achievements.2024.description'),
    year: "2024",
    image: "/images/achievements/makler-roku-2024.webp"
  }
]

export default function AchievementsPage() {
  const t = useTranslations('achievements')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string>('')
  
  const achievements = getAchievements(t)

  const openImageModal = (imageSrc: string, title: string) => {
    setSelectedImage(imageSrc)
    setSelectedTitle(title)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setSelectedTitle('')
  }

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeImageModal()
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <>
      <Navbar navClass="navbar-white" topnavClass={''} tagline={false}/>
      
      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
        className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              {t('hero.title')}
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Achievements Grid */}
      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-green-600 dark:text-green-400 font-semibold text-lg uppercase tracking-wide">
              {t('badge')}
            </span>
            <h2 className="text-5xl font-bold mt-3 mb-4 text-slate-900 dark:text-white">
              {t('title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className="group relative transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden hover:shadow-xl hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
              >
                <div className="relative overflow-hidden text-transparent -m-3 flex items-center gap-6 p-6">
                  <div 
                    className="cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => openImageModal(achievement.image, achievement.title)}
                  >
                    <Image 
                      src={achievement.image} 
                      alt={achievement.title} 
                      width={100} 
                      height={100}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      {/* <span className="text-sm font-medium text-green-600 bg-green-600/10 px-3 py-1 rounded-full">
                        {achievement.image}
                      </span> */}
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                {t('cta.title')}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                {t('cta.description')}
              </p>
              <Link 
                href="#contact" 
                className="btn bg-green-600 hover:bg-green-700 text-white rounded-md inline-flex items-center gap-2"
              >
                {t('cta.button')}
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      <GetInTuch/>
      <Footer/>
      <Switcher/>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeImageModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              aria-label="Close image"
            >
              <FiX className="h-8 w-8" />
            </button>
            
            {/* Image container */}
            <div className="relative bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={selectedImage}
                alt={selectedTitle}
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain"
                priority
              />
              
              {/* Image title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">
                  {selectedTitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
