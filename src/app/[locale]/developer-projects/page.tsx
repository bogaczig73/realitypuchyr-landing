'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowRight, FiHome, FiMapPin, FiStar, FiGlobe } from 'react-icons/fi';

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GetInTuch from "../components/get-in-touch";
import Switcher from "../components/switcher";

const regions = [
    {
        id: "spain",
        titleKey: "regions.spain.title",
        descriptionKey: "regions.spain.description",
        icon: "🇪🇸",
        image: "/images/spain/hero-bg.webp",
        categories: [
            {
                id: "apartments",
                titleKey: "categories.apartments.title",
                descriptionKey: "categories.apartments.description",
                icon: "🏢",
                image: "/images/spain/spain_aparman.webp",
            },
            {
                id: "penthouses",
                titleKey: "categories.penthouses.title",
                descriptionKey: "categories.penthouses.description",
                icon: "🏙️",
                image: "/images/spain/spain_penthouse.webp",
            },
            {
                id: "houses",
                titleKey: "categories.familyHouses.title",
                descriptionKey: "categories.familyHouses.description",
                icon: "🏡",
                image: "/images/spain/spain_house.webp",
            },
            {
                id: "villas",
                titleKey: "categories.villas.title",
                descriptionKey: "categories.villas.description",
                icon: "🏰",
                image: "/images/spain/spain_villa.webp",
            },
            {
                id: "residential-complexes",
                titleKey: "categories.residentialComplexes.title",
                descriptionKey: "categories.residentialComplexes.description",
                icon: "🏘️",
                image: "/images/spain/spain_residential.webp",
            },
            {
                id: "hotel-services",
                titleKey: "categories.hotelServices.title",
                descriptionKey: "categories.hotelServices.description",
                icon: "🏨",
                image: "/images/spain/spain_hotel.webp",
            },
            {
                id: "golf-properties",
                titleKey: "categories.golfProperties.title",
                descriptionKey: "categories.golfProperties.description",
                icon: "⛳",
                image: "/images/spain/spain_golf.webp",
            },
            {
                id: "smart-homes",
                titleKey: "categories.smartHomes.title",
                descriptionKey: "categories.smartHomes.description",
                icon: "🌱",
                image: "/images/spain/spain_smart.webp",
            }
        ]
    },
    {
        id: "czech-republic",
        titleKey: "regions.czechRepublic.title",
        descriptionKey: "regions.czechRepublic.description",
        icon: "🇨🇿",
        image: "/images/property/developer_projects_czech_republic.webp",
        categories: [
            {
                id: "triangl-park",
                titleKey: "overviewPages.czechRepublic.projectsData.trianglPark.title",
                descriptionKey: "overviewPages.czechRepublic.projectsData.trianglPark.description",
                icon: "🏗️",
                image: "/images/projects/czech-republic/triangl-park/triangl-park-23.webp",
                location: "overviewPages.czechRepublic.projectsData.trianglPark.location",
                status: "overviewPages.czechRepublic.projectsData.trianglPark.status"
            },
            {
                id: "icon-park",
                titleKey: "overviewPages.czechRepublic.projectsData.iconPark.title",
                descriptionKey: "overviewPages.czechRepublic.projectsData.iconPark.description",
                icon: "🏢",
                image: "/images/projects/czech-republic/icon-park/icon-park-21.webp",
                location: "overviewPages.czechRepublic.projectsData.iconPark.location",
                status: "overviewPages.czechRepublic.projectsData.iconPark.status"
            },
            {
                id: "english-embankment",
                titleKey: "overviewPages.czechRepublic.projectsData.englishEmbankment.title",
                descriptionKey: "overviewPages.czechRepublic.projectsData.englishEmbankment.description",
                icon: "🏛️",
                image: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-03.webp",
                location: "overviewPages.czechRepublic.projectsData.englishEmbankment.location",
                status: "overviewPages.czechRepublic.projectsData.englishEmbankment.status"
            },
            {
                id: "horovice",
                titleKey: "overviewPages.czechRepublic.projectsData.horovice.title",
                descriptionKey: "overviewPages.czechRepublic.projectsData.horovice.description",
                icon: "🏡",
                image: "/images/projects/czech-republic/horovice/horovice-08.webp",
                location: "overviewPages.czechRepublic.projectsData.horovice.location",
                status: "overviewPages.czechRepublic.projectsData.horovice.status"
            },
            {
                id: "tiskarna-kristianov",
                titleKey: "overviewPages.czechRepublic.projectsData.tiskarnaKristianov.title",
                descriptionKey: "overviewPages.czechRepublic.projectsData.tiskarnaKristianov.description",
                icon: "🏭",
                image: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-02.webp",
                location: "overviewPages.czechRepublic.projectsData.tiskarnaKristianov.location",
                status: "overviewPages.czechRepublic.projectsData.tiskarnaKristianov.status"
            }
        ]
    }
];

export default function DeveloperProjects() {
    const t = useTranslations('developerProjects');

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/property/developer_projects.webp')" }}
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

            {/* Regions Section */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-green-600 font-semibold text-lg uppercase tracking-wide">{t('regions.badge')}</span>
                        <h2 className="text-5xl font-bold mt-3 mb-4">{t('regions.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('regions.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {regions.map((region, index) => (
                            <div key={index} className="group relative transition-all duration-500 ease-in-out rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1">
                                <Link href={`/developer-projects/${region.id}`}>
                                <div className="relative h-64">
                                    <img 
                                        src={region.image} 
                                        alt={t(region.titleKey)}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                                <span className="text-2xl">{region.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-white mb-1">{t(region.titleKey)}</h3>
                                                <p className="text-white/80 text-sm leading-relaxed line-clamp-2">{t(region.descriptionKey)}</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <FiGlobe className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Categories Grid */}
                                <div className="p-6 bg-white">
                                    <h4 className="text-lg font-semibold mb-4 text-slate-800">{t('regions.categoriesTitle')}</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {region.categories.map((category, catIndex) => (
                                            <Link 
                                                key={catIndex}
                                                href={`/developer-projects/${region.id}/${category.id}`}
                                                className="group/cat flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                            >
                                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover/cat:bg-green-200 transition-colors">
                                                    <span className="text-sm">{category.icon}</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h5 className="text-sm font-medium text-slate-800 truncate">{t(category.titleKey)}</h5>
                                                    <p className="text-xs text-slate-500 truncate">{t(category.descriptionKey)}</p>
                                                    <div className="flex items-center gap-1 mt-1">
                                                        {'status' in category && category.status && (
                                                            <>
                                                                <span className="text-xs text-green-600 font-medium">{t(category.status)}</span>
                                                                <span className="text-xs text-slate-400">•</span>
                                                            </>
                                                        )}
                                                        {'location' in category && category.location && (
                                                            <span className="text-xs text-slate-500">{t(category.location)}</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <FiArrowRight className="h-4 w-4 text-slate-400 group-hover/cat:text-green-600 transition-colors" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
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
