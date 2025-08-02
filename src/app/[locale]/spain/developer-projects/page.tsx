'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowRight, FiHome, FiMapPin, FiStar } from 'react-icons/fi';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import GetInTuch from "../../components/get-in-touch";
import Switcher from "../../components/switcher";

const categories = [
    {
        id: "apartments",
        titleKey: "categories.apartments.title",
        descriptionKey: "categories.apartments.description",
        icon: "🏢",
        image: "/images/spain/spain_aparman.webp"
    },
    {
        id: "penthouses",
        titleKey: "categories.penthouses.title",
        descriptionKey: "categories.penthouses.description",
        icon: "🏙️",
        image: "/images/spain/spain_penthouse.webp"
    },
    {
        id: "houses",
        titleKey: "categories.familyHouses.title",
        descriptionKey: "categories.familyHouses.description",
        icon: "🏘️",
        image: "/images/spain/spain_house.webp"
    },
    {
        id: "villas",
        titleKey: "categories.villas.title",
        descriptionKey: "categories.villas.description",
        icon: "🏰",
        image: "/images/spain/spain_villa.webp"
    },
    {
        id: "residential-complexes",
        titleKey: "categories.residentialComplexes.title",
        descriptionKey: "categories.residentialComplexes.description",
        icon: "🏘️",
        image: "/images/spain/spain_residential.webp"
    },
    {
        id: "hotel-services",
        titleKey: "categories.hotelServices.title",
        descriptionKey: "categories.hotelServices.description",
        icon: "🏨",
        image: "/images/spain/spain_hotel.webp"
    },
    {
        id: "golf-properties",
        titleKey: "categories.golfProperties.title",
        descriptionKey: "categories.golfProperties.description",
        icon: "⛳",
        image: "/images/spain/spain_golf.webp"
    },
    {
        id: "smart-homes",
        titleKey: "categories.smartHomes.title",
        descriptionKey: "categories.smartHomes.description",
        icon: "🌱",
        image: "/images/spain/spain_smart.webp"
    }
];

export default function DeveloperProjects() {
    const t = useTranslations('spain.developerProjects');

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

            {/* Categories Section */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-green-600 font-semibold text-lg uppercase tracking-wide">{t('categories.badge')}</span>
                        <h2 className="text-5xl font-bold mt-3 mb-4">{t('categories.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('categories.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {categories.map((category, index) => (
                            <Link 
                                key={index} 
                                href={`/spain/developer-projects/${category.id}`}
                                className="group relative transition-all duration-500 ease-in-out rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="relative h-64">
                                    <img 
                                        src={category.image} 
                                        alt={t(category.titleKey)}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                                <span className="text-2xl">{category.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-white mb-1">{t(category.titleKey)}</h3>
                                                <p className="text-white/80 text-sm leading-relaxed line-clamp-2">{t(category.descriptionKey)}</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <FiArrowRight className="h-6 w-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">{t('whyChoose.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('whyChoose.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiStar className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('whyChoose.experience.title')}</h3>
                            <p className="text-slate-600">{t('whyChoose.experience.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiMapPin className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('whyChoose.location.title')}</h3>
                            <p className="text-slate-600">{t('whyChoose.location.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiHome className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('whyChoose.quality.title')}</h3>
                            <p className="text-slate-600">{t('whyChoose.quality.description')}</p>
                        </div>
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