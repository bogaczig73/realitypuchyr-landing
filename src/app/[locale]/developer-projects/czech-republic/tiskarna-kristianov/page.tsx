'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiMapPin, FiHome, FiStar, FiPhone, FiMail, FiGrid, FiBox, FiZap, FiCheck, FiUsers, FiHeart, FiAward } from 'react-icons/fi';

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import GetInTuch from "../../../components/get-in-touch";
import Switcher from "../../../components/switcher";

export default function TiskarnaKristianovPage() {
    const t = useTranslations('developerProjects.czechRepublic.tiskarnaKristianov');

    const projectFeatures = [
        {
            name: t('hero.projectFeatures.location.name'),
            value: t('hero.projectFeatures.location.value'),
            description: t('hero.projectFeatures.location.description'),
            icon: "📍"
        },
        {
            name: t('hero.projectFeatures.apartments.name'),
            value: t('hero.projectFeatures.apartments.value'),
            description: t('hero.projectFeatures.apartments.description'),
            icon: "🏠"
        },
        {
            name: t('hero.projectFeatures.parking.name'),
            value: t('hero.projectFeatures.parking.value'),
            description: t('hero.projectFeatures.parking.description'),
            icon: "🚗"
        },
        {
            name: t('hero.projectFeatures.history.name'),
            value: t('hero.projectFeatures.history.value'),
            description: t('hero.projectFeatures.history.description'),
            icon: "🏛️"
        }
    ];

    const apartmentTypes = [
        { type: "Studio", size: "Various sizes", description: "Perfect for singles or couples" },
        { type: "1+kk to 4+kk", size: "Various sizes", description: "From classic to spacious layouts" },
        { type: "Penthouse", size: "Premium sizes", description: "Luxury top-floor living" },
        { type: "Villa", size: "Custom layouts", description: "Unique villa-style units" },
        { type: "Office", size: "Commercial space", description: "Professional workspaces" },
        { type: "Retail", size: "Various sizes", description: "Commercial opportunities" }
    ];

    const locationFeatures = [
        { feature: t('location.features.cityCenter.feature'), time: t('location.features.cityCenter.time'), description: t('location.features.cityCenter.description') },
        { feature: t('location.features.shopping.feature'), time: t('location.features.shopping.time'), description: t('location.features.shopping.description') },
        { feature: t('location.features.publicTransport.feature'), time: t('location.features.publicTransport.time'), description: t('location.features.publicTransport.description') },
        { feature: t('location.features.castlePark.feature'), time: t('location.features.castlePark.time'), description: t('location.features.castlePark.description') }
    ];

    const amenities = [
        { name: "Gallery Space", description: "Cultural venue for exhibitions and events", icon: "🎨" },
        { name: "Café & Bakery", description: "Charming café and pastry shop", icon: "☕" },
        { name: "Fitness Center", description: "Modern fitness facilities", icon: "💪" },
        { name: "Children's Corner", description: "Play area in the inner courtyard", icon: "👶" },
        { name: "Fountain & Clock", description: "Historic fountain and clock tower", icon: "⏰" },
        { name: "Rooftop Gardens", description: "Terrace gardens with city views", icon: "🌿" }
    ];

    const apartmentStandards = [
        { name: t('apartmentStandards.standards.airRecuperation.name'), description: t('apartmentStandards.standards.airRecuperation.description') },
        { name: t('apartmentStandards.standards.underfloorHeating.name'), description: t('apartmentStandards.standards.underfloorHeating.description') },
        { name: t('apartmentStandards.standards.photovoltaicPanels.name'), description: t('apartmentStandards.standards.photovoltaicPanels.description') },
        { name: t('apartmentStandards.standards.cogenerationUnit.name'), description: t('apartmentStandards.standards.cogenerationUnit.description') },
        { name: t('apartmentStandards.standards.rainwaterCollection.name'), description: t('apartmentStandards.standards.rainwaterCollection.description') },
        { name: t('apartmentStandards.standards.smartTechnology.name'), description: t('apartmentStandards.standards.smartTechnology.description') },
        { name: t('apartmentStandards.standards.premiumMaterials.name'), description: t('apartmentStandards.standards.premiumMaterials.description') },
        { name: t('apartmentStandards.standards.energyEfficient.name'), description: t('apartmentStandards.standards.energyEfficient.description') },
        { name: t('apartmentStandards.standards.soundInsulation.name'), description: t('apartmentStandards.standards.soundInsulation.description') },
        { name: t('apartmentStandards.standards.balconiesTerraces.name'), description: t('apartmentStandards.standards.balconiesTerraces.description') }
    ];

    const exteriorPhotos = [
        { src: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-01.webp", alt: "Industrial Complex View"},
        { src: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-02.webp", alt: "32m Chimney" },
        { src: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-03.webp", alt: "Neorenaissance Architecture" },
        { src: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-04.webp", alt: "Industrial Heritage" },
        { src: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-05.webp", alt: "Inner Courtyard" },
        { src: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-06.webp", alt: "Rooftop Gardens" },
        { src: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-10.webp", alt: "Castle Park View" },
        { src: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-08.webp", alt: "City Center Location" },
        { src: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-12.webp", alt: "City Center Location" }
    ];

    const projectHistory = [
        { year: "1791", event: t('projectHistory.timeline.1791.event'), description: t('projectHistory.timeline.1791.description') },
        { year: "1800s", event: t('projectHistory.timeline.1800s.event'), description: t('projectHistory.timeline.1800s.description') },
        { year: "1900s", event: t('projectHistory.timeline.1900s.event'), description: t('projectHistory.timeline.1900s.description') },
        { year: "1990s", event: t('projectHistory.timeline.1990s.event'), description: t('projectHistory.timeline.1990s.description') },
        { year: "2024", event: t('projectHistory.timeline.2024.event'), description: t('projectHistory.timeline.2024.description') }
    ];

    const architecturalAwards = [
        { name: t('architecturalAwards.awards.czechArchitectureAward.name'), description: t('architecturalAwards.awards.czechArchitectureAward.description'), architect: t('architecturalAwards.awards.czechArchitectureAward.architect') },
        { name: t('architecturalAwards.awards.experience.name'), description: t('architecturalAwards.awards.experience.description'), architect: t('architecturalAwards.awards.experience.architect') },
        { name: t('architecturalAwards.awards.uniqueSolutions.name'), description: t('architecturalAwards.awards.uniqueSolutions.description'), architect: t('architecturalAwards.awards.uniqueSolutions.architect') }
    ];

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/projects/czech-republic/tiskarna-kristianov/kristianov-03.webp')" }}
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
                            <h2 className="text-4xl font-bold mb-6">{t('projectOverview.title')}</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                {t('projectOverview.description1')}
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                {t('projectOverview.description2')}
                            </p>
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="font-semibold text-green-800 mb-2">{t('projectOverview.secondStage.title')}</h3>
                                <p className="text-green-700">
                                    {t('projectOverview.secondStage.description')}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden">
                                <img 
                                    src="/images/projects/czech-republic/tiskarna-kristianov/kristianov-05.webp" 
                                    alt="Tiskárna Kristiánov Project" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project History */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('projectHistory.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('projectHistory.subtitle')}
                        </p>
                    </div>
                    
                    <div className="space-y-8">
                        {projectHistory.map((period, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
                                <div className="grid lg:grid-cols-3 gap-8 items-center">
                                    <div className="text-center lg:text-left">
                                        <div className="text-4xl font-bold text-green-600 mb-2">{period.year}</div>
                                        <div className="text-lg font-semibold text-slate-800">{period.event}</div>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <p className="text-slate-600 leading-relaxed">{period.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Us Special */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('whatMakesUsSpecial.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('whatMakesUsSpecial.subtitle')}
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiMapPin className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">{t('whatMakesUsSpecial.excellentLocation.title')}</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                {t('whatMakesUsSpecial.excellentLocation.description1')}
                            </p>
                            <p className="text-slate-600">
                                {t('whatMakesUsSpecial.excellentLocation.description2')}
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiGrid className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">{t('whatMakesUsSpecial.stylishLiving.title')}</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                {t('whatMakesUsSpecial.stylishLiving.description1')}
                            </p>
                            <p className="text-slate-600">
                                {t('whatMakesUsSpecial.stylishLiving.description2')}
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiZap className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">{t('whatMakesUsSpecial.modernTechnology.title')}</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                {t('whatMakesUsSpecial.modernTechnology.description1')}
                            </p>
                            <p className="text-slate-600">
                                {t('whatMakesUsSpecial.modernTechnology.description2')}
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiHeart className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">{t('whatMakesUsSpecial.comprehensiveAmenities.title')}</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                {t('whatMakesUsSpecial.comprehensiveAmenities.description1')}
                            </p>
                            <p className="text-slate-600">
                                {t('whatMakesUsSpecial.comprehensiveAmenities.description2')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apartment Standards */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('apartmentStandards.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('apartmentStandards.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {apartmentStandards.map((standard, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                                <div className="flex items-start gap-4">
                                    <FiCheck className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">{standard.name}</h3>
                                        <p className="text-slate-600">{standard.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architectural Awards */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FiAward className="h-12 w-12 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold mb-4">{t('architecturalAwards.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('architecturalAwards.subtitle')}
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-8">
                        {architecturalAwards.map((award, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FiStar className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{award.name}</h3>
                                <p className="text-green-600 font-medium mb-3">{award.architect}</p>
                                <p className="text-slate-600">{award.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exterior Views Gallery */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('exteriorViews.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('exteriorViews.subtitle')}
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
                                        <div className="text-xs opacity-90">{t('exteriorViews.exteriorView')}</div>
                                    </div>
                                </div>
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
                                    alt="Tiskárna Kristiánov Location Map" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Available Units Info */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-6">{t('availableUnits.title')}</h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                            {t('availableUnits.description')}
                        </p>
                        <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
                            <div className="text-4xl font-bold text-green-600 mb-2">{t('availableUnits.contactMe')}</div>
                            <div className="text-xl mb-4">{t('availableUnits.forUnitInfo')}</div>
                            <Link href="#contact">
                                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
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
