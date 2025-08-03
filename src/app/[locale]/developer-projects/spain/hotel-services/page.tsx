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
    "Rezidence s hotelovými službami",
    "Úklid a údržba nemovitosti",
    "Concierge služby",
    "Catering a room service",
    "Pohodlný a bezstarostný pobyt",
    "Profesionální správa nemovitosti"
];

const projects = [
    {
        name: "Marina Bay Hotel Residences",
        location: "Marbella",
        price: "od 450 000 €",
        image: "/images/property/residential.jpg",
        description: "Luxusní rezidence s hotelovými službami"
    },
    {
        name: "Costa del Sol Hotel Apartments",
        location: "Benalmádena",
        price: "od 380 000 €",
        image: "/images/property/residential.jpg",
        description: "Apartmány s concierge službami"
    },
    {
        name: "Sunset Beach Hotel Residences",
        location: "Fuengirola",
        price: "od 420 000 €",
        image: "/images/property/residential.jpg",
        description: "Rezidence s room service"
    }
];

export default function HoteloveSluzbyPage() {
    const t = useTranslations('developerProjects.spain.hotelServices');
    const tCategories = useTranslations('developerProjects.categories');

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/spain/hotel/spain_hotel_1.webp')" }}
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
                                    src="/images/spain/hotel/spain_hotel_2.webp" 
                                    alt="Hotel Services Costa del Sol" 
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
                        title: t('whyChoose.carefreeStay.title'),
                        description: t('whyChoose.carefreeStay.description'),
                        image: "/images/spain/hotel/spain_hotel_1.webp",
                        imageAlt: "Carefree Stay",
                        emoji: "🏨"
                    },
                    {
                        icon: <FiStar className="h-6 w-6 text-white" />,
                        title: t('whyChoose.professionalManagement.title'),
                        description: t('whyChoose.professionalManagement.description'),
                        image: "/images/spain/hotel/spain_hotel_5.webp",
                        imageAlt: "Professional Management",
                        emoji: "👨‍💼"
                    },
                    {
                        icon: <FiMapPin className="h-6 w-6 text-white" />,
                        title: t('whyChoose.luxuryAmenities.title'),
                        description: t('whyChoose.luxuryAmenities.description'),
                        image: "/images/spain/hotel/spain_hotel_3.webp",
                        imageAlt: "Luxury Amenities",
                        emoji: "✨"
                    },
                    {
                        icon: <FiCheck className="h-6 w-6 text-white" />,
                        title: t('whyChoose.idealRecreation.title'),
                        description: t('whyChoose.idealRecreation.description'),
                        image: "/images/spain/hotel/spain_hotel_4.webp",
                        imageAlt: "Ideal Recreation",
                        emoji: "🌴"
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
                        emoji: "👤",
                        title: t('whoAppreciates.individualsRelaxation.title'),
                        gradientFrom: "green-50",
                        gradientTo: "green-60"
                    },
                    {
                        emoji: "💑",
                        title: t('whoAppreciates.couplesTime.title'),
                        gradientFrom: "blue-50",
                        gradientTo: "blue-60"
                    },
                    {
                        emoji: "🏠",
                        title: t('whoAppreciates.carefreeManagement.title'),
                        gradientFrom: "teal-50",
                        gradientTo: "teal-60"
                    },
                    {
                        emoji: "⭐",
                        title: t('whoAppreciates.premiumLocation.title'),
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
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.convenience.title')}</h3>
                            <p className="text-slate-600">{t('benefits.convenience.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiMapPin className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.services.title')}</h3>
                            <p className="text-slate-600">{t('benefits.services.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiStar className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.management.title')}</h3>
                            <p className="text-slate-600">{t('benefits.management.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery Section */}
            <PhotoGallery 
                photos={[
                    {
                        src: "/images/spain/hotel/spain_hotel_1.webp",
                        alt: "Hotel Service Lobby"
                    },
                    {
                        src: "/images/spain/hotel/spain_hotel_2.webp",
                        alt: "Hotel Service Apartment"
                    },
                    {
                        src: "/images/spain/hotel/spain_hotel_3.webp",
                        alt: "Concierge Service"
                    },
                    {
                        src: "/images/spain/hotel/spain_hotel_4.webp",
                        alt: "Hotel Service Pool"
                    },
                    {
                        src: "/images/spain/hotel/spain_hotel_5.webp",
                        alt: "Hotel Service Restaurant"
                    },
                    {
                        src: "/images/spain/hotel/spain_hotel_6.webp",
                        alt: "Hotel Service Spa"
                    },
                    {
                        src: "/images/spain/hotel/spain_hotel_7.webp",
                        alt: "Hotel Service Spa"
                    },
                    {
                        src: "/images/spain/hotel/spain_hotel_8.webp",
                        alt: "Hotel Service Spa"
                    },
                    {
                        src: "/images/spain/hotel/spain_hotel_9.webp",
                        alt: "Hotel Service Spa"
                    },
                    {
                        src: "/images/spain/hotel/spain_hotel_10.webp",
                        alt: "Hotel Service Spa"
                    },
                ]}
                title="Gallery of Selected Properties with Hotel Services"
                subtitle="Explore our luxury properties with comprehensive hotel amenities"
            />

            {/* Contact Section */}
            <GetInTuch id="contact" />
            
            <Footer />
            <Switcher />
        </>
    )
} 