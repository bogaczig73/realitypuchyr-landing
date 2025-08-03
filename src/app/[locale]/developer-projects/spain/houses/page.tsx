'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiCheck, FiMapPin, FiHome, FiStar } from 'react-icons/fi';

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import GetInTuch from "../../../components/get-in-touch";
import Switcher from "../../../components/switcher";
import PhotoGallery from "../../components/photo-gallery";
import WhyChooseSection from "../../../components/spain/why-choose-section";
import WhoAppreciatesSection from "../../../components/spain/who-appreciates-section";

const features = [
    "Prostorné dispozice pro rodiny",
    "Vlastní zahrada s bazénem",
    "Klidná lokalita obklopená zelení",
    "Dostatek prostoru pro každodenní život",
    "Ideální pro rodinné bydlení",
    "Soukromí a bezpečnost"
];

const projects = [
    {
        name: "Costa Verde Family Homes",
        location: "Estepona",
        price: "od 450 000 €",
        image: "/images/property/residential.jpg",
        description: "Prostorné rodinné domy s vlastní zahradou"
    },
    {
        name: "Sunset Gardens Villas",
        location: "Mijas",
        price: "od 380 000 €",
        image: "/images/property/residential.jpg",
        description: "Řadové domy v klidné lokalitě"
    },
    {
        name: "Marina Family Residences",
        location: "Benalmádena",
        price: "od 520 000 €",
        image: "/images/property/residential.jpg",
        description: "Dvojdomky s výhledem na moře"
    }
];

export default function RodinneDomyPage() {
    const t = useTranslations('developerProjects.spain.familyHouses');
    const tCategories = useTranslations('developerProjects.categories');

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/spain/houses/spain_houses_1.webp')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <div className="mb-4">
                            <Link href="/developer-projects/spain" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
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
                                    src="/images/spain/houses/spain_houses_3.webp" 
                                    alt="Family Houses Costa del Sol" 
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
                        title: t('whyChoose.ampleSpace.title'),
                        description: t('whyChoose.ampleSpace.description'),
                        image: "/images/spain/houses/spain_houses_1.webp",
                        imageAlt: "Ample Space",
                        emoji: "🏠"
                    },
                    {
                        icon: <FiStar className="h-6 w-6 text-white" />,
                        title: t('whyChoose.privateGardens.title'),
                        description: t('whyChoose.privateGardens.description'),
                        image: "/images/spain/houses/spain_houses_2.webp",
                        imageAlt: "Private Gardens",
                        emoji: "🌳"
                    },
                    {
                        icon: <FiMapPin className="h-6 w-6 text-white" />,
                        title: t('whyChoose.peacefulEnvironment.title'),
                        description: t('whyChoose.peacefulEnvironment.description'),
                        image: "/images/spain/houses/spain_houses_3.webp",
                        imageAlt: "Peaceful Environment",
                        emoji: "🌿"
                    },
                    {
                        icon: <FiCheck className="h-6 w-6 text-white" />,
                        title: t('whyChoose.practicalLayout.title'),
                        description: t('whyChoose.practicalLayout.description'),
                        image: "/images/spain/houses/spain_houses_4.webp",
                        imageAlt: "Practical Layout",
                        emoji: "📐"
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

            <WhoAppreciatesSection 
                title={t('whoAppreciates.title')}
                items={[
                    {
                        emoji: "👨‍👩‍👧‍👦",
                        title: t('whoAppreciates.familiesSpace.title'),
                        gradientFrom: "green-50",
                        gradientTo: "green-60"
                    },
                    {
                        emoji: "💑",
                        title: t('whoAppreciates.couplesPlanning.title'),
                        gradientFrom: "blue-50",
                        gradientTo: "blue-60"
                    },
                    {
                        emoji: "👴👵",
                        title: t('whoAppreciates.multiGenerational.title'),
                        gradientFrom: "teal-50",
                        gradientTo: "teal-60"
                    }
                ]}
            />

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
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.space.title')}</h3>
                            <p className="text-slate-600">{t('benefits.space.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiMapPin className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.garden.title')}</h3>
                            <p className="text-slate-600">{t('benefits.garden.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiStar className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.family.title')}</h3>
                            <p className="text-slate-600">{t('benefits.family.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery Section */}
            <PhotoGallery 
                photos={[
                    {
                        src: "/images/spain/houses/spain_houses_1.webp",
                        alt: "Family House Exterior"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_2.webp",
                        alt: "Family House Garden"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_3.webp",
                        alt: "Family House Interior"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_4.webp",
                        alt: "Family House Pool"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_5.webp",
                        alt: "Family House Kitchen"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_6.webp",
                        alt: "Family House Living Room"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_7.webp",
                        alt: "Family House Living Room"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_8.webp",
                        alt: "Family House Living Room"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_9.webp",
                        alt: "Family House Living Room"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_10.webp",
                        alt: "Family House Living Room"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_11.webp",
                        alt: "Family House Living Room"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_12.webp",
                        alt: "Family House Living Room"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_13.webp",
                        alt: "Family House Living Room"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_15.webp",
                        alt: "Family House Living Room"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_17.webp",
                        alt: "Family House Living Room"
                    },
                    {
                        src: "/images/spain/houses/spain_houses_19.webp",
                        alt: "Family House Living Room"
                    },
                    
                ]}
                title="Gallery of Selected Houses"
                subtitle="Explore our spacious family houses with private gardens"
            />

            {/* Contact Section */}
            <GetInTuch id="contact" />
            
            <Footer />
            <Switcher />
        </>
    )
} 