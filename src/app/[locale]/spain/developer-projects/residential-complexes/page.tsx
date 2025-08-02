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
import WhoAppreciatesSection from "../../../components/spain/who-appreciates-section";
import WhyChooseSection from "../../../components/spain/why-choose-section";

const features = [
    "Bezpečné a prestižní komplexy",
    "Společné prostory a služby",
    "Bazény, wellness a posilovny",
    "Zahrady a coworkingová centra",
    "Komunitní životní styl",
    "24/7 bezpečnost a dohled"
];

const projects = [
    {
        name: "Marina Bay Complex",
        location: "Marbella",
        price: "od 350 000 €",
        image: "/images/property/residential.jpg",
        description: "Luxusní rezidenční komplex s výhledem na moře"
    },
    {
        name: "Costa del Sol Residences",
        location: "Benalmádena",
        price: "od 280 000 €",
        image: "/images/property/residential.jpg",
        description: "Moderní komplex s wellness centrem"
    },
    {
        name: "Sunset Gardens Complex",
        location: "Fuengirola",
        price: "od 320 000 €",
        image: "/images/property/residential.jpg",
        description: "Stylový komplex s bazény a zahradami"
    }
];

export default function ResidentialComplexesPage() {
    const t = useTranslations('spain.developerProjects.residentialComplexes');
    const tCategories = useTranslations('spain.developerProjects.categories');

    // Data for WhyChooseSection
    const whyChooseItems = [
        {
            icon: <FiHome className="h-6 w-6 text-white" />,
            title: t('whyChoose.secureEnvironment.title'),
            description: t('whyChoose.secureEnvironment.description'),
            image: "/images/spain/residential/spain_residential_1.webp",
            imageAlt: "Secure Environment",
            emoji: "🔒"
        },
        {
            icon: <FiStar className="h-6 w-6 text-white" />,
            title: t('whyChoose.modernFacilities.title'),
            description: t('whyChoose.modernFacilities.description'),
            image: "/images/spain/residential/spain_residential_7.webp",
            imageAlt: "Modern Facilities",
            emoji: "🏊‍♂️"
        },
        {
            icon: <FiMapPin className="h-6 w-6 text-white" />,
            title: t('whyChoose.friendlyCommunity.title'),
            description: t('whyChoose.friendlyCommunity.description'),
            image: "/images/spain/residential/spain_residential_3.webp",
            imageAlt: "Friendly Community",
            emoji: "👥"
        },
        {
            icon: <FiCheck className="h-6 w-6 text-white" />,
            title: t('whyChoose.greatLocation.title'),
            description: t('whyChoose.greatLocation.description'),
            image: "/images/spain/residential/spain_residential_4.webp",
            imageAlt: "Great Location",
            emoji: "📍"
        }
    ];

    // Data for WhoAppreciatesSection
    const whoAppreciatesItems = [
        {
            emoji: "👨‍👩‍👧‍👦",
            title: t('whoAppreciates.familiesChildren.title'),
            gradientFrom: "green-50",
            gradientTo: "green-60"
        },
        {
            emoji: "👤",
            title: t('whoAppreciates.individualsServices.title'),
            gradientFrom: "blue-50",
            gradientTo: "blue-60"
        },
        {
            emoji: "💑",
            title: t('whoAppreciates.couplesComfort.title'),
            gradientFrom: "teal-50",
            gradientTo: "teal-60"
        },
        {
            emoji: "🏘️",
            title: t('whoAppreciates.communityLiving.title'),
            gradientFrom: "purple-50",
            gradientTo: "purple-60"
        }
    ];

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/spain/residential/spain_residential_5.webp')" }}
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
                                    src="/images/spain/residential/spain_residential_11.webp" 
                                    alt="Residential Complex Costa del Sol" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <WhyChooseSection 
                title={t('whyChoose.title')}
                items={whyChooseItems}
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
            <WhoAppreciatesSection 
                title={t('whoAppreciates.title')}
                items={whoAppreciatesItems}
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
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.community.title')}</h3>
                            <p className="text-slate-600">{t('benefits.community.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiMapPin className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.amenities.title')}</h3>
                            <p className="text-slate-600">{t('benefits.amenities.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiStar className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('benefits.security.title')}</h3>
                            <p className="text-slate-600">{t('benefits.security.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery Section */}
            <PhotoGallery 
                photos={[
                    {
                        src: "/images/spain/residential/spain_residential_1.webp",
                        alt: "Residential Complex Exterior"
                    },
                    {
                        src: "/images/spain/residential/spain_residential_2.webp",
                        alt: "Residential Complex Pool"
                    },
                    {
                        src: "/images/spain/residential/spain_residential_3.webp",
                        alt: "Residential Complex Garden"
                    },
                    {
                        src: "/images/spain/residential/spain_residential_4.webp",
                        alt: "Residential Complex Gym"
                    },
                    {
                        src: "/images/spain/residential/spain_residential_5.webp",
                        alt: "Residential Complex Lobby"
                    },
                    {
                        src: "/images/spain/residential/spain_residential_6.webp",
                        alt: "Residential Complex Coworking"
                    },
                    {
                        src: "/images/spain/residential/spain_residential_7.webp",
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