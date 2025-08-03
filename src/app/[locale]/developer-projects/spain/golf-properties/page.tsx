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
    "Nemovitosti u špičkových golfových hřišť",
    "Přístup k golfovým klubům a zařízením",
    "Luxusní bydlení v prestižních lokalitách",
    "Aktivní životní styl",
    "Komunitní atmosféra golfových nadšenců",
    "Výhledy na golfová hřiště a krajinu"
];

const projects = [
    {
        name: "Golf Valley Residences",
        location: "Marbella",
        price: "od 650 000 €",
        image: "/images/property/residential.jpg",
        description: "Luxusní rezidence u golfového hřiště"
    },
    {
        name: "Costa del Golf Villas",
        location: "Estepona",
        price: "od 850 000 €",
        image: "/images/property/residential.jpg",
        description: "Vily s přímým přístupem k golfu"
    },
    {
        name: "Sunset Golf Complex",
        location: "Benalmádena",
        price: "od 580 000 €",
        image: "/images/property/residential.jpg",
        description: "Komplex s golfovými službami"
    }
];

export default function GolfPropertiesPage() {
    const t = useTranslations('developerProjects.spain.golfProperties');
    const tCategories = useTranslations('developerProjects.categories');

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/spain/golf/spain_golf_14.webp')" }}
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
                                    src="/images/spain/golf/spain_golf_1.webp" 
                                    alt="Golf Properties Costa del Sol" 
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
                        icon: <FiMapPin className="h-6 w-6 text-white" />,
                        title: t('whyChoose.golfProximity.title'),
                        description: t('whyChoose.golfProximity.description'),
                        image: "/images/spain/golf/spain_golf_1.webp",
                        imageAlt: "Golf Proximity",
                        emoji: "⛳"
                    },
                    {
                        icon: <FiStar className="h-6 w-6 text-white" />,
                        title: t('whyChoose.luxuryLocation.title'),
                        description: t('whyChoose.luxuryLocation.description'),
                        image: "/images/spain/golf/spain_golf_7.webp",
                        imageAlt: "Luxury Location",
                        emoji: "🏌️"
                    },
                    {
                        icon: <FiHome className="h-6 w-6 text-white" />,
                        title: t('whyChoose.socialFacilities.title'),
                        description: t('whyChoose.socialFacilities.description'),
                        image: "/images/spain/golf/spain_golf_3.webp",
                        imageAlt: "Social Facilities",
                        emoji: "🏆"
                    },
                    {
                        icon: <FiCheck className="h-6 w-6 text-white" />,
                        title: t('whyChoose.activeRecreation.title'),
                        description: t('whyChoose.activeRecreation.description'),
                        image: "/images/spain/golf/spain_golf_4.webp",
                        imageAlt: "Active Recreation",
                        emoji: "🎯"
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
                        emoji: "⛳",
                        title: t('whoAppreciates.golfEnthusiasts.title'),
                        gradientFrom: "green-50",
                        gradientTo: "green-60"
                    },
                    {
                        emoji: "💑",
                        title: t('whoAppreciates.prestigiousCouples.title'),
                        gradientFrom: "blue-50",
                        gradientTo: "blue-60"
                    },
                    {
                        emoji: "👨‍👩‍👧‍👦",
                        title: t('whoAppreciates.exclusiveFamilies.title'),
                        gradientFrom: "teal-50",
                        gradientTo: "teal-60"
                    },
                    {
                        emoji: "🎯",
                        title: t('whoAppreciates.activeRecreation.title'),
                        gradientFrom: "purple-50",
                        gradientTo: "purple-60"
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
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.golf.title')}</h3>
                            <p className="text-slate-600">{t('benefits.golf.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiMapPin className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.luxury.title')}</h3>
                            <p className="text-slate-600">{t('benefits.luxury.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiStar className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.lifestyle.title')}</h3>
                            <p className="text-slate-600">{t('benefits.lifestyle.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery Section */}
            <PhotoGallery 
                photos={[
                    {
                        src: "/images/spain/golf/spain_golf_1.webp",
                        alt: "Golf Course View"
                    },
                    {
                        src: "/images/spain/golf/spain_golf_2.webp",
                        alt: "Golf Villa Exterior"
                    },
                    {
                        src: "/images/spain/golf/spain_golf_3.webp",
                        alt: "Golf Villa Interior"
                    },
                    {
                        src: "/images/spain/golf/spain_golf_4.webp",
                        alt: "Golf Course Proximity"
                    },
                    {
                        src: "/images/spain/golf/spain_golf_6.webp",
                        alt: "Golf Villa Pool"
                    },
                    {
                        src: "/images/spain/golf/spain_golf_7.webp",
                        alt: "Golf Villa Exterior"
                    },
                    {
                        src: "/images/spain/golf/spain_golf_8.webp",
                        alt: "Golf Villa Exterior"
                    },
                    {
                        src: "/images/spain/golf/spain_golf_9.webp",
                        alt: "Golf Villa Exterior"
                    },
                    {
                        src: "/images/spain/golf/spain_golf_10.webp",
                        alt: "Golf Villa Exterior"
                    },
                    {
                        src: "/images/spain/golf/spain_golf_11.webp",
                        alt: "Golf Villa Exterior"
                    },
                    {
                        src: "/images/spain/golf/spain_golf_12.webp",
                        alt: "Golf Villa Exterior"
                    },
                    {
                        src: "/images/spain/golf/spain_golf_14.webp",
                        alt: "Golf Villa Exterior"
                    }
                ]}
                title="Gallery of Selected Golf Properties"
                subtitle="Explore our prestigious golf properties with stunning course views"
            />

            {/* Contact Section */}
            <GetInTuch id="contact" />
            
            <Footer />
            <Switcher />
        </>
    )
} 