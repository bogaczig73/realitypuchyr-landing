'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const heroimage = '/images/agency/pavel_puchyr_photo_1.webp'

export default function HomeBanner() {
    const t = useTranslations('components.homeBanner');
    
  return (
    <>
    <section className="relative py-24">
        <div className="absolute inset-0 opacity-40 dark:opacity-[0.03] bg-no-repeat bg-bottom bg-cover" style={{backgroundImage:`url('/images/map.svg')`}}></div>
        <div className="container relative mt-10">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="md:col-span-4">
                    <div className="md:text-start text-center">
                        <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl">{t('title')}</h1>

                        <div className="mt-4">
                            <Link href="#services" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md md:mt-20">{t('learnMore')} <i className="mdi mdi-arrow-right ms-1 align-middle"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-5">
                    <div className="!rounded-full shadow-lg shadow-gray-200 dark:shadow-gray-800 relative overflow-hidden border-8 border-white dark:border-slate-900">
                        <div className="grid grid-cols-1 relative">
                            <div className="relative">
                                <Image 
                                    src={heroimage} 
                                    alt="Pavel Puchýř - Real Estate Professional"
                                    width={600}
                                    height={600}
                                    className="object-cover w-full lg:h-[600px] md:h-[500px]"
                                    priority
                                    fetchPriority="high"
                                    quality={85}
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="md:text-end text-center">
                        <p className="text-slate-400 text-xl max-w-xl">{t('quote')}</p>
                        <p className="text-green-600 font-semibold text-xl mt-4">- {t('author')}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
