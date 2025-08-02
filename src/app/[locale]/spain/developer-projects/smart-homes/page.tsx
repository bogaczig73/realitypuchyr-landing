'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiCheck, FiMapPin, FiHome, FiStar } from 'react-icons/fi';

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import GetInTuch from "../../../components/get-in-touch";
import Switcher from "../../../components/switcher";
import PhotoGallery from "../components/photo-gallery";
import WhyChooseSection from "../../../components/spain/why-choose-section";
import WhoAppreciatesSection from "../../../components/spain/who-appreciates-section";

const features = [
    "Udržitelná konstrukce a materiály",
    "Nízká spotřeba energie",
    "Obnovitelné zdroje energie",
    "Chytré domácí technologie",
    "Eko-friendly řešení",
    "Harmonie s přírodou"
];

const projects = [
    {
        name: "Eco Smart Residences",
        location: "Marbella",
        price: "od 420 000 €",
        image: "/images/spain/smart/spain_smart_2.webp",
        description: "Udržitelné bydlení s chytrými technologiemi"
    },
    {
        name: "Green Living Complex",
        location: "Benalmádena",
        price: "od 380 000 €",
        image: "/images/spain/smart/spain_smart_4.webp",
        description: "Eko-friendly komplex s obnovitelnou energií"
    },
    {
        name: "Smart Eco Villas",
        location: "Estepona",
        price: "od 750 000 €",
        image: "/images/spain/smart/spain_smart_3.webp",
        description: "Luxusní vily s chytrými technologiemi"
    }
];

export default function SmartHomesPage() {
    const t = useTranslations('spain.developerProjects.smartHomes');
    const tCategories = useTranslations('spain.developerProjects.categories');

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/spain/smart/spain_smart_1.webp')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <div className="mb-4">
                            <Link href="/spain/developer-projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                                <FiArrowLeft className="h-4 w-4" />
                                {tCategories('backToCategories')}   
                            </Link>
                        </div>
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

            {/* Description Section */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">{t('description.title')}</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                {t('description.content')}
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden">
                                <img 
                                    src="/images/spain/smart/spain_smart_2.webp" 
                                    alt="Smart Living Costa del Sol" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseSection 
                title={t('whyChoose.title')}
                items={[
                    {
                        icon: <FiHome className="h-6 w-6 text-white" />,
                        title: t('whyChoose.ecoLiving.title'),
                        description: t('whyChoose.ecoLiving.description'),
                        image: "/images/spain/smart/spain_smart_3.webp",
                        imageAlt: "Eco Living",
                        emoji: "🌱"
                    },
                    {
                        icon: <FiStar className="h-6 w-6 text-white" />,
                        title: t('whyChoose.modernTech.title'),
                        description: t('whyChoose.modernTech.description'),
                        image: "/images/spain/smart/spain_smart_2.webp",
                        imageAlt: "Modern Technology",
                        emoji: "📱"
                    },
                    {
                        icon: <FiMapPin className="h-6 w-6 text-white" />,
                        title: t('whyChoose.healthyEnvironment.title'),
                        description: t('whyChoose.healthyEnvironment.description'),
                        image: "/images/spain/smart/spain_smart_4.webp",
                        imageAlt: "Healthy Environment",
                        emoji: "🌿"
                    },
                    {
                        icon: <FiCheck className="h-6 w-6 text-white" />,
                        title: t('whyChoose.designFocus.title'),
                        description: t('whyChoose.designFocus.description'),
                        image: "/images/spain/smart/spain_smart_8.webp",
                        imageAlt: "Design Focus",
                        emoji: "🎨"
                    }
                ]}
            />

            {/* Key Advantages Section */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('keyAdvantages.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                            {t('keyAdvantages.content')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Who Appreciates Section */}
            <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('whoAppreciates.title')}</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 flex-1">{t('whoAppreciates.ecoConscious.title')}</h3>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col h-full">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 flex-1">{t('whoAppreciates.energyEfficient.title')}</h3>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col h-full">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🌿</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 flex-1">{t('whoAppreciates.natureLovers.title')}</h3>
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('benefits.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('benefits.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiHome className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.sustainability.title')}</h3>
                            <p className="text-slate-600">{t('benefits.sustainability.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiMapPin className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.energy.title')}</h3>
                            <p className="text-slate-600">{t('benefits.energy.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiStar className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.technology.title')}</h3>
                            <p className="text-slate-600">{t('benefits.technology.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery Section */}
            <PhotoGallery 
                photos={[
                    {
                        src: "/images/spain/smart/spain_smart_1.webp",
                        alt: "Smart Home Exterior"
                    },
                    {
                        src: "/images/spain/smart/spain_smart_2.webp",
                        alt: "Smart Home Interior"
                    },
                    {
                        src: "/images/spain/smart/spain_smart_3.webp",
                        alt: "Solar Panels"
                    },
                    {
                        src: "/images/spain/smart/spain_smart_4.webp",
                        alt: "Smart Home Garden"
                    },
                    {
                        src: "/images/spain/smart/spain_smart_5.webp",
                        alt: "Smart Home Garden"
                    },
                    {
                        src: "/images/spain/smart/spain_smart_6.webp",
                        alt: "Smart Home Kitchen"
                    },
                    {
                        src: "/images/spain/smart/spain_smart_7.webp",
                        alt: "Smart Home Living Room"
                    },
                    {
                        src: "/images/spain/smart/spain_smart_8.webp",
                        alt: "Smart Home Living Room"
                    },
                    {
                        src: "/images/spain/smart/spain_smart_9.webp",
                        alt: "Smart Home Living Room"
                    },
                    {
                        src: "/images/spain/smart/spain_smart_10.webp",
                        alt: "Smart Home Living Room"
                    },
                    {
                        src: "/images/spain/smart/spain_smart_11.webp",
                        alt: "Smart Home Living Room"
                    },
                    {
                        src: "/images/spain/smart/spain_smart_12.webp",
                        alt: "Smart Home Living Room"
                    }
                ]}
                title="Gallery of Selected Smart & Green Living Properties"
                subtitle="Explore our eco-friendly and technologically advanced properties"
            />

            {/* Contact Section */}
            <GetInTuch id="contact" />
            
            <Footer />
            <Switcher />
        </>
    )
} 