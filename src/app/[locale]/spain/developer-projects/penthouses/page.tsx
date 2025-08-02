'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiCheck, FiMapPin, FiHome, FiStar } from 'react-icons/fi';

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import GetInTuch from "../../../components/get-in-touch";
import Switcher from "../../../components/switcher";
import WhyChooseSection from "../../../components/spain/why-choose-section";
import WhoAppreciatesSection from "../../../components/spain/who-appreciates-section";
import PhotoGallery from "../components/photo-gallery";

const features = [
    "features.panoramicViews",
    "features.privateTerraces",
    "features.privatePool",
    "features.luxuryAmenities",
    "features.maximumPrivacy",
    "features.prestigiousLocation"
];

const projects = [
    {
        name: "Golden Heights Penthouse",
        location: "Marbella",
        price: "od 1 200 000 €",
        image: "/images/property/residential.jpg",
        description: "Luxusní penthous s panoramatickým výhledem"
    },
    {
        name: "Sunset Tower Penthouse",
        location: "Benalmádena",
        price: "od 950 000 €",
        image: "/images/property/residential.jpg",
        description: "Exkluzivní penthous s privátní terasou"
    },
    {
        name: "Marina View Penthouse",
        location: "Puerto Banús",
        price: "od 1 500 000 €",
        image: "/images/property/residential.jpg",
        description: "Prestižní penthous s výhledem na přístav"
    }
];

export default function PenthousyPage() {
    const t = useTranslations('spain.developerProjects.penthouses');
    const tCategories = useTranslations('spain.developerProjects.categories');

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/spain/penthouses/spain_penthouses_1.webp')" }}
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
                            <div className="grid grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <FiCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span className="text-slate-600">{t(feature)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden">
                                <img 
                                    src="/images/spain/penthouses/spain_penthouses_2.webp" 
                                    alt="Penthousy Costa del Sol"   
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
                        title: t('whyChoose.exclusiveViews.title'),
                        description: t('whyChoose.exclusiveViews.description'),
                        image: "/images/spain/penthouses/spain_penthouses_1.webp",
                        imageAlt: "Exclusive Views",
                        emoji: "🏙️"
                    },
                    {
                        icon: <FiStar className="h-6 w-6 text-white" />,
                        title: t('whyChoose.privateTerraces.title'),
                        description: t('whyChoose.privateTerraces.description'),
                        image: "/images/spain/penthouses/spain_penthouses_2.webp",
                        imageAlt: "Private Terraces",
                        emoji: "🌅"
                    },
                    {
                        icon: <FiMapPin className="h-6 w-6 text-white" />,
                        title: t('whyChoose.luxuryAmenities.title'),
                        description: t('whyChoose.luxuryAmenities.description'),
                        image: "/images/spain/penthouses/spain_penthouses_3.webp",
                        imageAlt: "Luxury Amenities",
                        emoji: "✨"
                    },
                    {
                        icon: <FiCheck className="h-6 w-6 text-white" />,
                        title: t('whyChoose.peacefulEnvironment.title'),
                        description: t('whyChoose.peacefulEnvironment.description'),
                        image: "/images/spain/penthouses/spain_penthouses_4.webp",
                        imageAlt: "Peaceful Environment",
                        emoji: "🧘"
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
                        emoji: "💑",
                        title: t('whoAppreciates.demandingCouples.title'),
                        gradientFrom: "green-50",
                        gradientTo: "green-60"
                    },
                    {
                        emoji: "👨‍👩‍👧‍👦",
                        title: t('whoAppreciates.exclusiveFamilies.title'),
                        gradientFrom: "blue-50",
                        gradientTo: "blue-60"
                    },
                    {
                        emoji: "🌅",
                        title: t('whoAppreciates.panoramicViews.title'),
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
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.luxury.title')}</h3>
                            <p className="text-slate-600">{t('benefits.luxury.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiMapPin className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.view.title')}</h3>
                            <p className="text-slate-600">{t('benefits.view.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiStar className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.privacy.title')}</h3>
                            <p className="text-slate-600">{t('benefits.privacy.description')}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Photo Gallery Section */}
            <PhotoGallery 
                photos={[
                    {
                        src: "/images/spain/penthouses/spain_penthouses_1.webp",
                        alt: "Residential Complex Exterior"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_2.webp",
                        alt: "Residential Complex Pool"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_3.webp",
                        alt: "Residential Complex Garden"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_4.webp",
                        alt: "Residential Complex Gym"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_16.webp",
                        alt: "Residential Complex Lobby"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_6.webp",
                        alt: "Residential Complex Coworking"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_7.webp",
                        alt: "Residential Complex Coworking"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_8.webp",
                        alt: "Residential Complex Coworking"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_9.webp",
                        alt: "Residential Complex Coworking"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_15.webp",
                        alt: "Residential Complex Coworking"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_11.webp",
                        alt: "Residential Complex Coworking"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_12.webp",
                        alt: "Residential Complex Coworking"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_13.webp",
                        alt: "Residential Complex Coworking"
                    },
                    {
                        src: "/images/spain/penthouses/spain_penthouses_14.webp",
                        alt: "Residential Complex Coworking"
                    }
                ]}
                title={t('gallery.title')}
                subtitle={t('gallery.subtitle')}
            />

            {/* Contact Section */}
            <GetInTuch id="contact" />
            
            <Footer />
            <Switcher />
        </>
    )
} 