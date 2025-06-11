'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GetInTuch from "../components/get-in-touch";
import BeforeAfterSlider from "../components/before-after-slider";

import { FiHexagon } from "react-icons/fi";
import Switcher from "../components/switcher";

export interface Feature {
    title: string;
    description: string;
    icon: string;
    emoji: string;
}

export default function Services() {
    const t = useTranslations('services');

    const feature: Feature[] = [
        {
            title: t('features.propertySale.title'),
            description: t('features.propertySale.description'),
            icon: "uil uil-home",
            emoji: "🏠"
        },
        {
            title: t('features.propertyPurchase.title'),
            description: t('features.propertyPurchase.description'),
            icon: "uil uil-search",
            emoji: "🔍"
        },
        {
            title: t('features.propertyValuation.title'),
            description: t('features.propertyValuation.description'),
            icon: "uil uil-chart-line",
            emoji: "💰"
        },
        {
            title: t('features.homeStaging.title'),
            description: t('features.homeStaging.description'),
            icon: "uil uil-paint-tool",
            emoji: "✨"
        },
        {
            title: t('features.professionalPresentation.title'),
            description: t('features.professionalPresentation.description'),
            icon: "uil uil-camera",
            emoji: "📸"
        },
        {
            title: t('features.legalService.title'),
            description: t('features.legalService.description'),
            icon: "uil uil-balance-scale",
            emoji: "⚖️"
        },
        {
            title: t('features.financialServices.title'),
            description: t('features.financialServices.description'),
            icon: '',
            emoji: '💳',
        },
        {
            title: t('features.investment.title'),
            description: t('features.investment.description'),
            icon: '',
            emoji: '📈',
        },
        {
            title: t('features.developmentProjects.title'),
            description: t('features.developmentProjects.description'),
            icon: '',
            emoji: '🏗️',
        },
    ];

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            <section
                style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
                            {t('title')} 🏢
                        </h3>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
                            {t('subtitle')}
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

            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid grid-cols-1 text-center mb-12">
                        <p className="text-slate-400 max-w-3xl mx-auto">
                            {t('description')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[50px]">
                        {feature.map((item: Feature, index: number) => (
                            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden" key={index}>
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="h-32 w-32 fill-green-600/5"></FiHexagon>
                                    <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <span className="text-4xl">{item.emoji}</span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link href="#" className="text-xl hover:text-green-600 font-medium">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 mt-16">
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
                            <h4 className="text-2xl font-semibold mb-6">
                                {t('selling.title')} 🏠
                            </h4>
                            <div className="space-y-6">
                                <p className="text-slate-400">
                                    {t('selling.description')}
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <h5 className="font-semibold">💬 {t('selling.features.consultation.title')}</h5>
                                        <p className="text-slate-400">{t('selling.features.consultation.description')}</p>
                                        
                                        <h5 className="font-semibold">💰 {t('selling.features.valuation.title')}</h5>
                                        <p className="text-slate-400">{t('selling.features.valuation.description')}</p>
                                        
                                        <h5 className="font-semibold">✨ {t('selling.features.staging.title')}</h5>
                                        <p className="text-slate-400">{t('selling.features.staging.description')}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h5 className="font-semibold">📸 {t('selling.features.presentation.title')}</h5>
                                        <p className="text-slate-400">{t('selling.features.presentation.description')}</p>
                                        
                                        <h5 className="font-semibold">📢 {t('selling.features.marketing.title')}</h5>
                                        <p className="text-slate-400">{t('selling.features.marketing.description')}</p>
                                        
                                        <h5 className="font-semibold">⚖️ {t('selling.features.legal.title')}</h5>
                                        <p className="text-slate-400">{t('selling.features.legal.description')}</p>
                                    </div>
                                </div>

                                {/* Home Staging Before/After Section */}
                                <div className="mt-12">
                                    <h5 className="text-xl font-semibold mb-6 text-center">✨ {t('staging.beforeAfter.title')}</h5>
                                    <div className="max-w-4xl mx-auto">
                                        <BeforeAfterSlider
                                            beforeImage="/images/services/home-staging-before.jpeg"
                                            afterImage="/images/services/home-staging-after.jpeg"
                                            alt="Home staging transformation"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-16">
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
                            <h4 className="text-2xl font-semibold mb-6">
                                {t('buying.title')} 🔍
                            </h4>
                            <div className="space-y-6">
                                <p className="text-slate-400">
                                    {t('buying.description')}
                                </p>
                                <p className="text-slate-400">
                                    {t('buying.description2')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <GetInTuch />
            </section>

            <Footer />
            <Switcher />
        </>
    )
}