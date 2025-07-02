'use client'
import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiHexagon } from 'react-icons/fi'
import { useTranslations } from 'next-intl'

export default function SpainSection() {
    const t = useTranslations('spainSection');

    const spainFeatures = [
        {
            title: t('features.costaDelSol.title'),
            description: t('features.costaDelSol.description'),
            emoji: "☀️",
            image: "/images/spain/hero-bg.webp",
            statValue: t('features.costaDelSol.statValue'),
            statLabel: t('features.costaDelSol.statLabel')
        },
        {
            title: t('features.developmentProjects.title'),
            description: t('features.developmentProjects.description'),
            emoji: "🏗️",
            image: "/images/spain/bg1.webp",
            statValue: t('features.developmentProjects.statValue'),
            statLabel: t('features.developmentProjects.statLabel')
        },
        {
            title: t('features.propertiesForSale.title'),
            description: t('features.propertiesForSale.description'),
            emoji: "🏡",
            image: "/images/property/1.jpg",
            statValue: t('features.propertiesForSale.statValue'),
            statLabel: t('features.propertiesForSale.statLabel')
        }
    ]

    return (
        <section className="relative lg:py-24 py-16 overflow-hidden">
            {/* Stylish Spain map background */}
            <div 
                className="absolute inset-0 opacity-2 dark:opacity-[0.3] bg-no-repeat bg-bottom pointer-events-none"
                style={{ 
                    backgroundImage: "url('/images/spain/spain-bg.png')",
                    backgroundSize: '80%',
                    backgroundPosition: 'bottom center'
                }}
                aria-hidden="true"
            ></div>
            <div className="container relative z-10">
                <div className="text-center mb-12">
                    <span className="text-green-600 font-medium">{t('title')}</span>
                    <h2 className="text-4xl font-bold mt-2">{t('subtitle')}</h2>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {spainFeatures.map((feature, index) => (
                        <div key={index} className="group relative lg:px-8 py-8 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden shadow-lg hover:shadow-xl">
                            <div className="flex items-center mb-6 gap-4">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="h-24 w-24 fill-green-600/5" />
                                    <div className="absolute top-[50%] -translate-y-[50%] start-[30px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                        <span className="text-3xl">{feature.emoji}</span>
                                    </div>
                                </div>
                                {/* Stat value next to hexagon */}
                                <div className="ml-2 flex flex-col items-center">
                                    <span className="text-3xl font-extrabold text-green-600 leading-none">{feature.statValue}</span>
                                    <span className="text-sm text-slate-400 whitespace-nowrap">{feature.statLabel}</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-slate-400 text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Benefits */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center">{t('whyCostaDelSol.title')}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">☀️</span>
                            <span className="text-sm">{t('whyCostaDelSol.benefits.sunnyDays')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">✈️</span>
                            <span className="text-sm">{t('whyCostaDelSol.benefits.flightTime')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">🌴</span>
                            <span className="text-sm">{t('whyCostaDelSol.benefits.yearRoundSeason')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">⭐</span>
                            <span className="text-sm">{t('whyCostaDelSol.benefits.mostDesiredLocation')}</span>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">{t('cta.title')}</h3>
                        <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                            {t('cta.description')}
                        </p>
                        <Link 
                            href="/spain" 
                            className="btn bg-white hover:bg-gray-100 text-green-600 rounded-md inline-flex items-center gap-2"
                        >
                            {t('cta.button')}
                            <FiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
} 