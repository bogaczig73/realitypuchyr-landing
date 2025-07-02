'use client'
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowRight, FiCalendar, FiClock, FiFacebook, FiInstagram, FiLinkedin, FiHexagon } from 'react-icons/fi';

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GetInTuch from "../components/get-in-touch";
import Switcher from "../components/switcher";
import CountUp from "react-countup";

const features = [
    {
        titleKey: "properties.developerProjects.title",
        descriptionKey: "properties.developerProjects.description",
        emoji: "🏗️",
        number: "70+",
        ctaKey: "properties.developerProjects.cta",
        subject: "Spain - Developer project"
    },
    {
        titleKey: "properties.properties.title",
        descriptionKey: "properties.properties.description",
        emoji: "🏡",
        number: "4563",
        ctaKey: "properties.properties.cta",
        subject: "Spain - Properties"
    }
];

const benefits = [
    {
        titleKey: "benefits.sunnyDays",
        emoji: "☀️"
    },
    {
        titleKey: "benefits.flightTime",
        emoji: "✈️"
    },
    {
        titleKey: "benefits.touristSeason",
        emoji: "🌴"
    },
    {
        titleKey: "benefits.popularLocation",
        emoji: "⭐"
    }
];

// whyCosta array removed - now using t.raw('whyCosta.reasons')

const stats = [
    {
        titleKey: "stats.developerProjects",
        value: "70+",
        emoji: "🏗️"
    },
    {
        titleKey: "stats.properties",
        value: "4563",
        emoji: "🏠"
    },
    {
        titleKey: "stats.satisfiedClients",
        value: "160+",
        emoji: "😊"
    }
];

// process array removed - now using t.raw('process.steps')

export default function Spain() {
    const t = useTranslations('spain');

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/spain/hero-bg.webp')" }}
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
                        <div className="mt-8">
                            <Link href="#properties" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">
                                {t('hero.cta')}
                            </Link>
                        </div>
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

            {/* Properties Section */}
            <section id="properties" className="relative lg:py-24 py-16 scroll-margin-top-24">
                <div className="container">
                    <h2 className="text-4xl font-bold text-center mb-12">{t('properties.title')}</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                                <div className="relative overflow-hidden text-transparent -m-3 flex items-center gap-6">
                                    <div className="relative">
                                        <FiHexagon className="h-32 w-32 fill-green-600/5"></FiHexagon>
                                        <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                            <span className="text-4xl">{feature.emoji}</span>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <span className="text-5xl font-bold text-green-600">{feature.number}</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-xl hover:text-green-600 font-medium">{t(feature.titleKey)}</h3>
                                    <p className="text-slate-400 mt-3">{t(feature.descriptionKey)}</p>
                                    <button 
                                        onClick={() => {
                                            const contactSection = document.getElementById('contact');
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                                // Update the subject using the global function
                                                if ((window as any).updateContactSubject) {
                                                    (window as any).updateContactSubject(feature.subject);
                                                }
                                            }
                                        }}
                                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-4"
                                    >
                                        {t(feature.ctaKey)}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section
            style={{ backgroundImage: "url('/images/spain/bg2.webp')" }}
            className="relative py-24 bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="absolute inset-0 bg-slate-900/60"></div>
            <div className="container relative">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                    <div className="lg:col-start-1 lg:col-span-12">
                        <div className="flex justify-between items-center gap-8 lg:gap-16">
                            {benefits.map((benefit, index) => (
                                <div className="counter-box text-center flex-1" key={index}>
                                    <div className="text-white lg:text-5xl text-4xl font-semibold mb-4">
                                        <span className="text-4xl">{benefit.emoji}</span>
                                    </div>
                                    <h5 className="counter-head text-white text-lg font-medium">{t(benefit.titleKey)}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

            {/* Why Costa del Sol Section */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-4xl font-bold mb-8">{t('whyCosta.title')}</h3>
                            <ul className="space-y-4">
                                {t.raw('whyCosta.reasons').map((reason: string, index: number) => {
                                    const emojis = ["💰", "🏖️", "🌍", "🗣️", "✨"];
                                    return (
                                        <li key={index} className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden flex items-center gap-6">
                                            <div className="relative overflow-hidden text-transparent -m-3 flex-shrink-0">
                                                <FiHexagon className="h-32 w-32 fill-green-600/5"></FiHexagon>
                                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                                    <span className="text-4xl">{emojis[index]}</span>
                                                </div>
                                            </div>
                                            <p>{reason}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <div className="aspect-video">
                                <iframe 
                                    className="w-full h-full rounded-xl"
                                    src="https://www.youtube.com/embed/5UNeoIu5Ryk" 
                                    title="YouTube video player" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                />
                            </div>
                            <p className="text-slate-400 mt-4">
                                {t('video.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Cards Section */}
            <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-4xl font-bold mb-6">{t('location.title1')}</h3>
                            <p className="text-lg mb-8">
                                {t('location.description1')}
                            </p>
                            <Link href="/location" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">
                                {t('location.cta1')}
                            </Link>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold mb-6">{t('location.title2')}</h3>
                            <p className="text-lg mb-8">
                                {t('location.description2')}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <img src="/images/flags/es.png" alt={t('location.spain')} className="w-12 h-12" />
                                    <p className="text-lg"><b>{t('location.spain')}</b> <span className="text-green-600">25 %</span></p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src="/images/flags/hr.png" alt={t('location.croatia')} className="w-12 h-12" />
                                    <p className="text-lg"><b>{t('location.croatia')}</b> <span className="text-green-600">11 %</span></p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src="/images/flags/it.png" alt={t('location.italy')} className="w-12 h-12" />
                                    <p className="text-lg"><b>{t('location.italy')}</b> <span className="text-green-600">7 %</span></p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src="/images/flags/id.png" alt={t('location.bali')} className="w-12 h-12" />
                                    <p className="text-lg"><b>{t('location.bali')}</b> <span className="text-green-600">7 %</span></p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 mt-4">
                                {t('location.source')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section
            style={{ backgroundImage: "url('/images/spain/bg1.webp')" }}
            className="relative py-24 bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="absolute inset-0 bg-slate-900/60"></div>
            <div className="container relative">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                    <div className="lg:col-start-2 lg:col-span-10">
                        <div className="grid md:grid-cols-3 grid-cols-1 items-center">
                            {stats.map((item, index) => (
                                <div className="counter-box text-center" key={index}>
                                    <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                                        <CountUp
                                            start={0}
                                            end={parseInt(item.value)}
                                            duration={2.5}
                                            className="counter-value"
                                        />
                                    </h1>
                                    <h5 className="counter-head text-white text-lg font-medium">{t(item.titleKey)}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

            {/* Why Us Section */}
            <section id="why-us" className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800 scroll-margin-top-32">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-green-600 font-semibold text-lg uppercase tracking-wide">{t('whyUs.badge')}</span>
                        <h2 className="text-5xl font-bold mt-3 mb-4">{t('whyUs.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('whyUs.subtitle')}
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-4xl font-bold mb-8 text-slate-800">{t('whyUs.whyMe')}</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">✅</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">{t('whyUs.verifiedQuality.title')}</h4>
                                        <p className="text-slate-600 leading-relaxed">{t('whyUs.verifiedQuality.description')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">🌍</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">{t('whyUs.localKnowledge.title')}</h4>
                                        <p className="text-slate-600 leading-relaxed">{t('whyUs.localKnowledge.description')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">🤝</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">{t('whyUs.completeService.title')}</h4>
                                        <p className="text-slate-600 leading-relaxed">{t('whyUs.completeService.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="text-center mb-4">
                                    <span className="text-4xl">💰</span>
                                </div>
                                <h4 className="text-3xl font-bold text-green-600 mb-3 text-center">2,9+ mld.</h4>
                                <p className="text-slate-600 text-center leading-relaxed">{t('whyUs.turnover')}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="text-center mb-4">
                                    <span className="text-4xl">👥</span>
                                </div>
                                <h4 className="text-3xl font-bold text-green-600 mb-3 text-center">700+ tis.</h4>
                                <p className="text-slate-600 text-center leading-relaxed">{t('whyUs.clients')}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="text-center mb-4">
                                    <span className="text-4xl">🏢</span>
                                </div>
                                <h4 className="text-3xl font-bold text-green-600 mb-3 text-center">1998+</h4>
                                <p className="text-slate-600 text-center leading-relaxed">{t('whyUs.established')}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="text-center mb-4">
                                    <span className="text-4xl">📍</span>
                                </div>
                                <h4 className="text-3xl font-bold text-green-600 mb-3 text-center">100+</h4>
                                <p className="text-slate-600 text-center leading-relaxed">{t('whyUs.locations')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="relative lg:py-24 py-16 scroll-margin-top-24">
                <div className="container">
                    <h3 className="text-4xl font-bold text-center mb-12">{t('process.title')}</h3>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {t.raw('process.steps').map((step: any, index: number) => {
                            const emojis = ["🏠", "✈️", "🗣️", "📄", "💰", "🔑"];
                            return (
                                <div key={index} className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <FiHexagon className="h-32 w-32 fill-green-600/5"></FiHexagon>
                                        <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                            <span className="text-4xl">{emojis[index]}</span>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl font-bold text-green-600">{(index + 1).toString().padStart(2, '0')}</span>
                                            <h4 className="text-xl font-semibold">{step.title}</h4>
                                        </div>
                                        <p className="text-slate-400 mt-3">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <FiInstagram className="h-8 w-8 text-green-600" />
                            <h4 className="text-2xl font-semibold">{t('instagram.title')}</h4>
                        </div>
                        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                            {t('instagram.description')}
                        </p>
                        <a 
                            href="https://www.instagram.com/realitypuchyr/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn bg-green-600 hover:bg-green-700 text-white rounded-md inline-flex items-center gap-2"
                        >
                            <FiInstagram /> {t('instagram.cta')}
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <GetInTuch id="contact" />
            
            <Footer />
            <Switcher />
        </>
    )
} 