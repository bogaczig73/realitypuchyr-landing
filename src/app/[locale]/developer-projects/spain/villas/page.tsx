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
import BenefitsSection from "../../../components/spain/benefits-section";

const features = [
    "Samostatně stojící vily",
    "Prvotřídní vybavení a materiály",
    "Maximální soukromí",
    "Dechberoucí výhledy",
    "Prémiová lokalita",
    "Luxusní útočiště pro náročné klienty"
];

const projects = [
    {
        name: "Golden Coast Villas",
        location: "Marbella",
        price: "od 2 500 000 €",
        image: "/images/property/residential.jpg",
        description: "Luxusní vily s výhledem na moře"
    },
    {
        name: "Sierra Blanca Villas",
        location: "Benahavís",
        price: "od 3 200 000 €",
        image: "/images/property/residential.jpg",
        description: "Exkluzivní vily v prestižní lokalitě"
    },
    {
        name: "Marina Bay Villas",
        location: "Puerto Banús",
        price: "od 4 100 000 €",
        image: "/images/property/residential.jpg",
        description: "Prestižní vily s privátním přístavem"
    }
];

export default function VilyPage() {
    const t = useTranslations('developerProjects.spain.villas');
    const tCategories = useTranslations('developerProjects.categories');

    // Data for WhoAppreciatesSection
    const whoAppreciatesItems = [
        {
            emoji: "👨‍👩‍👧‍👦",
            title: t('whoAppreciates.prestigiousFamilies.title'),
            gradientFrom: "green-50",
            gradientTo: "green-60"
        },
        {
            emoji: "💑",
            title: t('whoAppreciates.elegantCouples.title'),
            gradientFrom: "blue-50",
            gradientTo: "blue-60"
        },
        {
            emoji: "👤",
            title: t('whoAppreciates.privateIndividuals.title'),
            gradientFrom: "teal-50",
            gradientTo: "teal-60"
        },
        {
            emoji: "👑",
            title: t('whoAppreciates.demandingExclusivity.title'),
            gradientFrom: "purple-50",
            gradientTo: "purple-60"
        }
    ];

    // Data for BenefitsSection
    const benefitsItems = [
        {
            icon: <FiHome className="h-8 w-8 text-white" />,
            title: t('benefits.luxury.title'),
            description: t('benefits.luxury.description')
        },
        {
            icon: <FiMapPin className="h-8 w-8 text-white" />,
            title: t('benefits.privacy.title'),
            description: t('benefits.privacy.description')
        },
        {
            icon: <FiStar className="h-8 w-8 text-white" />,
            title: t('benefits.location.title'),
            description: t('benefits.location.description')
        }
    ];

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/spain/villas/spain_villas_17.webp')" }}
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
                                    src="/images/spain/villas/spain_villas_1.webp" 
                                    alt="Luxury Villas Costa del Sol" 
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
                        title: t('whyChoose.maximumPrivacy.title'),
                        description: t('whyChoose.maximumPrivacy.description'),
                        image: "/images/spain/villas/spain_villas_1.webp",
                        imageAlt: "Maximum Privacy",
                        emoji: "🏰"
                    },
                    {
                        icon: <FiStar className="h-6 w-6 text-white" />,
                        title: t('whyChoose.luxuryAmenities.title'),
                        description: t('whyChoose.luxuryAmenities.description'),
                        image: "/images/spain/villas/spain_villas_2.webp",
                        imageAlt: "Luxury Amenities",
                        emoji: "✨"
                    },
                    {
                        icon: <FiMapPin className="h-6 w-6 text-white" />,
                        title: t('whyChoose.generousSpaces.title'),
                        description: t('whyChoose.generousSpaces.description'),
                        image: "/images/spain/villas/spain_villas_3.webp",
                        imageAlt: "Generous Spaces",
                        emoji: "🏠"
                    },
                    {
                        icon: <FiCheck className="h-6 w-6 text-white" />,
                        title: t('whyChoose.attractiveLocation.title'),
                        description: t('whyChoose.attractiveLocation.description'),
                        image: "/images/spain/villas/spain_villas_5.webp",
                        imageAlt: "Attractive Location",
                        emoji: "🌅"
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
            <WhoAppreciatesSection 
                title={t('whoAppreciates.title')}
                items={whoAppreciatesItems}
            />

            {/* Benefits Section */}
            <BenefitsSection 
                title={t('benefits.title')}
                subtitle={t('benefits.subtitle')}
                items={benefitsItems}
            />

            {/* Photo Gallery Section */}
            <PhotoGallery 
                photos={[
                    {
                        src: "/images/spain/villas/spain_villas_1.webp",
                        alt: "Luxury Villa Exterior"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_2.webp",
                        alt: "Luxury Villa Interior"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_3.webp",
                        alt: "Luxury Villa Pool"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_4.webp",
                        alt: "Luxury Villa Garden"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_6.webp",
                        alt: "Luxury Villa Kitchen"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_7.webp",
                        alt: "Luxury Villa Living Room"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_8.webp",
                        alt: "Luxury Villa Bathroom"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_12.webp",
                        alt: "Luxury Villa Bedroom"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_10.webp",
                        alt: "Luxury Villa Terrace"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_11.webp",
                        alt: "Luxury Villa Pool"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_13.webp",
                        alt: "Luxury Villa Pool"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_14.webp",
                        alt: "Luxury Villa Pool"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_15.webp",
                        alt: "Luxury Villa Pool"
                    },
                    {
                        src: "/images/spain/villas/spain_villas_16.webp",
                        alt: "Luxury Villa Pool"
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