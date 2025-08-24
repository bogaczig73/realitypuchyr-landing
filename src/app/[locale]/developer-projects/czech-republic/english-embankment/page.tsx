'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiMapPin, FiHome, FiStar, FiPhone, FiMail, FiGrid, FiBox, FiZap } from 'react-icons/fi';

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import GetInTuch from "../../../components/get-in-touch";
import Switcher from "../../../components/switcher";
import PhotoGallery from "../../components/photo-gallery";

export default function EnglishEmbankmentPage() {
    const t = useTranslations('developerProjects.czechRepublic.englishEmbankment');

    const projectFeatures = [
        {
            name: t('projectFeatures.commercialSpace.name'),
            value: t('projectFeatures.commercialSpace.value'),
            description: t('projectFeatures.commercialSpace.description'),
            icon: "🏢"
        },
        {
            name: t('projectFeatures.residentialUnits.name'),
            value: t('projectFeatures.residentialUnits.value'),
            description: t('projectFeatures.residentialUnits.description'),
            icon: "🏠"
        },
        {
            name: t('projectFeatures.parkingSpaces.name'),
            value: t('projectFeatures.parkingSpaces.value'),
            description: t('projectFeatures.parkingSpaces.description'),
            icon: "🚗"
        },
        {
            name: t('projectFeatures.floors.name'),
            value: t('projectFeatures.floors.value'),
            description: t('projectFeatures.floors.description'),
            icon: "🏗️"
        }
    ];

    const locationFeatures = [
        { feature: t('location.features.republicSquare.feature'), time: t('location.features.republicSquare.time'), description: t('location.features.republicSquare.description') },
        { feature: t('location.features.radbuzaRiver.feature'), time: t('location.features.radbuzaRiver.time'), description: t('location.features.radbuzaRiver.description') },
        { feature: t('location.features.cityParks.feature'), time: t('location.features.cityParks.time'), description: t('location.features.cityParks.description') },
        { feature: t('location.features.culturalCenter.feature'), time: t('location.features.culturalCenter.time'), description: t('location.features.culturalCenter.description') }
    ];

    const amenities = [
        { name: t('premiumStandards.amenities.parkCourtyard.name'), description: t('premiumStandards.amenities.parkCourtyard.description'), icon: "🌳" },
        { name: t('premiumStandards.amenities.premiumStandards.name'), description: t('premiumStandards.amenities.premiumStandards.description'), icon: "✨" },
        { name: t('premiumStandards.amenities.smartTechnology.name'), description: t('premiumStandards.amenities.smartTechnology.description'), icon: "🏠" },
        { name: t('premiumStandards.amenities.evParking.name'), description: t('premiumStandards.amenities.evParking.description'), icon: "⚡" },
        { name: t('premiumStandards.amenities.riverViews.name'), description: t('premiumStandards.amenities.riverViews.description'), icon: "🌊" },
        { name: t('premiumStandards.amenities.cityViews.name'), description: t('premiumStandards.amenities.cityViews.description'), icon: "🏛️" }
    ];

    const exteriorPhotos = [
        { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-07.webp", alt: "River Front View", building: "River Front" },
        { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-05.webp", alt: "Park Courtyard", building: "Park Area" },
        { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-06.webp", alt: "Terrace Design", building: "Terraces" },
        { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-03.webp", alt: "Building Entrance", building: "Entrance" },
        { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-08.webp", alt: "Night View", building: "Night View" }
    ];

    const interiorVisualizations = [
        { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-04.webp", alt: "Penthouse Design", type: "Penthouse" },
        { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-02.webp", alt: "Luxury Kitchen", type: "Kitchen" },
    ];

    const projectPartners = [
        { name: t('partners.investika.name'), role: t('partners.investika.role'), description: t('partners.investika.description') },
        { name: t('partners.bcReal.name'), role: t('partners.bcReal.role'), description: t('partners.bcReal.description') },
        { name: t('partners.brokerConsulting.name'), role: t('partners.brokerConsulting.role'), description: t('partners.brokerConsulting.description') }
    ];

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-03.webp')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <div className="mb-4">
                            <Link href="/developer-projects/czech-republic" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                                <FiArrowLeft className="h-4 w-4" />
                                {t('hero.backToProjects')}
                            </Link>
                        </div>
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
                            {t('hero.title')}
                        </h3>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
                            {t('hero.subtitle')}
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-6">
                            {projectFeatures.map((feature, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-white">{feature.value}</div>
                                    <div className="text-white/80 text-sm">{feature.name}</div>
                                </div>
                            ))}
                        </div>
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

            {/* Project Overview */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">{t('aboutProject.title')}</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                {t('aboutProject.description1')}
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                {t('aboutProject.description2')}
                            </p>
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="font-semibold text-green-800 mb-2">{t('aboutProject.constructionStatus.title')}</h3>
                                <p className="text-green-700">
                                    {t('aboutProject.constructionStatus.description')}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden">
                                <img 
                                    src="/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-05.webp" 
                                    alt="English Embankment Palace" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Features Grid */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('projectFeaturesSection.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('projectFeaturesSection.subtitle')}
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiGrid className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">{t('projectFeaturesSection.commercialSpace.title')}</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                {t('projectFeaturesSection.commercialSpace.description1')}
                            </p>
                            <p className="text-slate-600">
                                {t('projectFeaturesSection.commercialSpace.description2')}
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiHome className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">{t('projectFeaturesSection.exclusiveApartments.title')}</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                {t('projectFeaturesSection.exclusiveApartments.description1')}
                            </p>
                            <p className="text-slate-600">
                                {t('projectFeaturesSection.exclusiveApartments.description2')}
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiBox className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">{t('projectFeaturesSection.parking.title')}</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                {t('projectFeaturesSection.parking.description1')}
                            </p>
                            <p className="text-slate-600">
                                {t('projectFeaturesSection.parking.description2')}
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiZap className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">{t('projectFeaturesSection.parkCourtyard.title')}</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                {t('projectFeaturesSection.parkCourtyard.description1')}
                            </p>
                            <p className="text-slate-600">
                                {t('projectFeaturesSection.parkCourtyard.description2')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* External Building Views Gallery */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('externalViews.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('externalViews.subtitle')}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {exteriorPhotos.map((photo, index) => (
                            <div key={index} className="group relative">
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <img 
                                        src={photo.src} 
                                        alt={photo.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-sm font-semibold">{photo.building}</div>
                                        <div className="text-xs opacity-90">{t('externalViews.exteriorView')}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interior Visualizations Gallery */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('interiorVisualizations.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('interiorVisualizations.subtitle')}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {interiorVisualizations.map((visualization, index) => (
                            <div key={index} className="group relative">
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <img 
                                        src={visualization.src} 
                                        alt={visualization.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-sm font-semibold">{visualization.type}</div>
                                        <div className="text-xs opacity-90">{t('interiorVisualizations.interiorDesign')}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Standards */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('premiumStandards.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('premiumStandards.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {amenities.map((amenity, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                                <div className="text-4xl mb-4">{amenity.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{amenity.name}</h3>
                                <p className="text-slate-600">{amenity.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location & Accessibility */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">{t('location.title')}</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                {t('location.description')}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {locationFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-center text-white font-bold">
                                            {feature.time}
                                        </div>
                                        <div>
                                            <div className="font-semibold">{feature.feature}</div>
                                            <div className="text-sm text-slate-600">{feature.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-xl overflow-hidden">
                                <img 
                                    src="/images/map.png" 
                                    alt="English Embankment Location Map" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Partners */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('partners.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('partners.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {projectPartners.map((partner, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FiStar className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                                <p className="text-green-600 font-medium mb-3">{partner.role}</p>
                                <p className="text-slate-600">{partner.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Available Units Info */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-6">{t('availableUnits.title')}</h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                            {t('availableUnits.description')}
                        </p>
                        <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
                            <div className="text-4xl font-bold text-green-600 mb-2">{t('availableUnits.contactUs')}</div>
                            <div className="text-xl mb-4">{t('availableUnits.forUnitInfo')}</div>
                            <Link href="#contact">
                                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-4">
                                    {t('availableUnits.getUnitDetails')}
                                </button>
                            </Link>
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
