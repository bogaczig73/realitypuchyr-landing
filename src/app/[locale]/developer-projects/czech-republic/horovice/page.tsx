'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiMapPin, FiHome, FiStar, FiPhone, FiMail, FiGrid, FiBox, FiZap, FiCheck, FiUsers, FiHeart, FiShield, FiWifi } from 'react-icons/fi';

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import GetInTuch from "../../../components/get-in-touch";
import Switcher from "../../../components/switcher";

export default function HorovicePage() {
    const t = useTranslations('developerProjects.czechRepublic.horovice');

    const projectFeatures = [
        {
            name: t('projectFeatures.location.name'),
            value: t('projectFeatures.location.value'),
            description: t('projectFeatures.location.description'),
            icon: "📍"
        },
        {
            name: t('projectFeatures.construction.name'),
            value: t('projectFeatures.construction.value'),
            description: t('projectFeatures.construction.description'),
            icon: "🧱"
        },
        {
            name: t('projectFeatures.soundInsulation.name'),
            value: t('projectFeatures.soundInsulation.value'),
            description: t('projectFeatures.soundInsulation.description'),
            icon: "🔇"
        },
        {
            name: t('projectFeatures.customKitchens.name'),
            value: t('projectFeatures.customKitchens.value'),
            description: t('projectFeatures.customKitchens.description'),
            icon: "🍳"
        }
    ];

    const apartmentTypes = [
        { type: "1+kk", size: "Various sizes", description: "Perfect for singles or couples" },
        { type: "2+kk", size: "Various sizes", description: "Ideal for young families" },
        { type: "3+kk", size: "Various sizes", description: "Great for growing families" },
        { type: "4+kk", size: "Various sizes", description: "Spacious family living" }
    ];

    const locationFeatures = [
        { feature: t('location.features.plzen.feature'), time: t('location.features.plzen.time'), description: t('location.features.plzen.description') },
        { feature: t('location.features.prague.feature'), time: t('location.features.prague.time'), description: t('location.features.prague.description') },
        { feature: t('location.features.localServices.feature'), time: t('location.features.localServices.time'), description: t('location.features.localServices.description') },
        { feature: t('location.features.nature.feature'), time: t('location.features.nature.time'), description: t('location.features.nature.description') }
    ];

    const amenities = [
        { name: t('apartmentStandards.standards.customKitchen.name'), description: t('apartmentStandards.standards.customKitchen.description'), icon: "🍳" },
        { name: t('apartmentStandards.standards.builtInWardrobes.name'), description: t('apartmentStandards.standards.builtInWardrobes.description'), icon: "👕" },
        { name: t('apartmentStandards.standards.soundInsulatingWalls.name'), description: t('apartmentStandards.standards.soundInsulatingWalls.description'), icon: "🔇" },
        { name: t('apartmentStandards.standards.airConditioningPrep.name'), description: t('apartmentStandards.standards.airConditioningPrep.description'), icon: "❄️" },
        { name: t('apartmentStandards.standards.smartScreenPrep.name'), description: t('apartmentStandards.standards.smartScreenPrep.description'), icon: "🪟" },
        { name: "Parking", description: "One reserved space per apartment", icon: "🚗" }
    ];

    const apartmentStandards = [
        { name: t('apartmentStandards.standards.soundInsulatingWalls.name'), description: t('apartmentStandards.standards.soundInsulatingWalls.description') },
        { name: t('apartmentStandards.standards.airConditioningPrep.name'), description: t('apartmentStandards.standards.airConditioningPrep.description') },
        { name: t('apartmentStandards.standards.smartScreenPrep.name'), description: t('apartmentStandards.standards.smartScreenPrep.description') },
        { name: t('apartmentStandards.standards.customKitchen.name'), description: t('apartmentStandards.standards.customKitchen.description') },
        { name: t('apartmentStandards.standards.builtInWardrobes.name'), description: t('apartmentStandards.standards.builtInWardrobes.description') },
        { name: t('apartmentStandards.standards.securityDoors.name'), description: t('apartmentStandards.standards.securityDoors.description') },
        { name: t('apartmentStandards.standards.timelessBathrooms.name'), description: t('apartmentStandards.standards.timelessBathrooms.description') },
        { name: t('apartmentStandards.standards.chemicalFreeFloors.name'), description: t('apartmentStandards.standards.chemicalFreeFloors.description') },
        { name: t('apartmentStandards.standards.woodenDoors.name'), description: t('apartmentStandards.standards.woodenDoors.description') },
        { name: t('apartmentStandards.standards.frenchWindows.name'), description: t('apartmentStandards.standards.frenchWindows.description') }
    ];

    const exteriorPhotos = [
        { src: "/images/projects/czech-republic/horovice/horovice-10.webp", alt: "Building Exterior View", building: "Building Exterior" },
        { src: "/images/projects/czech-republic/horovice/horovice-04.webp", alt: "Neighborhood View", building: "Neighborhood" },
        { src: "/images/projects/czech-republic/horovice/horovice-05.webp", alt: "Garden Areas", building: "Garden Areas" },
        { src: "/images/projects/czech-republic/horovice/horovice-06.webp", alt: "Parking Area", building: "Parking Area" },
        { src: "/images/projects/czech-republic/horovice/horovice-08.webp", alt: "Playground", building: "Playground" },
    ];

    const interiorVisualizations = [
        { src: "/images/projects/czech-republic/horovice/horovice-01.webp", alt: "1+kk Apartment Layout", type: "1+kk Layout" },
        { src: "/images/projects/czech-republic/horovice/horovice-03.webp", alt: "2+kk Apartment Layout", type: "2+kk Layout" },
        { src: "/images/projects/czech-republic/horovice/horovice-07.webp", alt: "3+kk Apartment Layout", type: "3+kk Layout" },
        { src: "/images/projects/czech-republic/horovice/horovice-17.webp", alt: "4+kk Apartment Layout", type: "4+kk Layout" },
        { src: "/images/projects/czech-republic/horovice/horovice-18.webp", alt: "Custom Kitchen Design", type: "Kitchen Design" },
        { src: "/images/projects/czech-republic/horovice/horovice-19.webp", alt: "Built-in Wardrobes", type: "Built-in Wardrobes" },
        { src: "/images/projects/czech-republic/horovice/horovice-20.webp", alt: "Bathroom Design", type: "Bathroom Design" },
        { src: "/images/projects/czech-republic/horovice/horovice-21.webp", alt: "Living Room Layout", type: "Living Room" },
        { src: "/images/projects/czech-republic/horovice/horovice-22.webp", alt: "Living Room Layout", type: "Living Room" },
        { src: "/images/projects/czech-republic/horovice/horovice-23.webp", alt: "Living Room Layout", type: "Living Room" },
        { src: "/images/projects/czech-republic/horovice/horovice-24.webp", alt: "Living Room Layout", type: "Living Room" }
    ];

    const projectBenefits = [
        { name: "Community Living", description: "Active WhatsApp groups and resident feedback system" },
        { name: "Ongoing Development", description: "Continuous neighborhood improvements and enhancements" },
        { name: "Quality Materials", description: "Timeless design with durable, long-lasting materials" },
        { name: "Custom Solutions", description: "Kitchens and wardrobes tailored to each apartment" },
        { name: "Smart Preparation", description: "Ready for modern amenities like air conditioning" },
        { name: "Privacy Focus", description: "Excellent sound insulation for peaceful living" }
    ];

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/projects/czech-republic/horovice/horovice-08.webp')" }}
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
                                <h3 className="font-semibold text-green-800 mb-2">{t('aboutProject.communityFocus.title')}</h3>
                                <p className="text-green-700">
                                    {t('aboutProject.communityFocus.description')}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden">
                                <img 
                                    src="/images/projects/czech-republic/horovice/horovice-06.webp" 
                                    alt="Bydlení Hořovice Project" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Benefits */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('projectBenefits.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('projectBenefits.subtitle')}
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiMapPin className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">{t('projectBenefits.perfectLocation.title')}</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                {t('projectBenefits.perfectLocation.description1')}
                            </p>
                            <p className="text-slate-600">
                                {t('projectBenefits.perfectLocation.description2')}
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiHome className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">{t('projectBenefits.qualityConstruction.title')}</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                {t('projectBenefits.qualityConstruction.description1')}
                            </p>
                            <p className="text-slate-600">
                                {t('projectBenefits.qualityConstruction.description2')}
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiUsers className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">{t('projectBenefits.activeCommunity.title')}</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                {t('projectBenefits.activeCommunity.description1')}
                            </p>
                            <p className="text-slate-600">
                                {t('projectBenefits.activeCommunity.description2')}
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiHeart className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">{t('projectBenefits.diverseApartmentOptions.title')}</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                {t('projectBenefits.diverseApartmentOptions.description1')}
                            </p>
                            <p className="text-slate-600">
                                {t('projectBenefits.diverseApartmentOptions.description2')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apartment Standards */}
            <section className="relative lg:py-24 py-16">
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

            {/* External Building Views Gallery */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
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
            <section className="relative lg:py-24 py-16">
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

            {/* 3D Configurator */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('configurator.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('configurator.subtitle')}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
                        <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl">🏠</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-6">{t('configurator.mainTitle')}</h3>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            {t('configurator.description')}
                        </p>
                        <div className="grid lg:grid-cols-3 gap-8 mb-8">
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <h4 className="font-semibold mb-2">{t('configurator.features.materialSelection.title')}</h4>
                                <p className="text-slate-600 text-sm">{t('configurator.features.materialSelection.description')}</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🚪</span>
                                </div>
                                <h4 className="font-semibold mb-2">{t('configurator.features.doorDesign.title')}</h4>
                                <p className="text-slate-600 text-sm">{t('configurator.features.doorDesign.description')}</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🍳</span>
                                </div>
                                <h4 className="font-semibold mb-2">{t('configurator.features.kitchenDesign.title')}</h4>
                                <p className="text-slate-600 text-sm">{t('configurator.features.kitchenDesign.description')}</p>
                            </div>
                        </div>
                        <Link href="https://bydlenihorovice.cz/konfigurator-bytu" target="_blank">
                            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                {t('configurator.launchButton')}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sample Apartment */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">{t('sampleApartment.title')}</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                {t('sampleApartment.description1')}
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                {t('sampleApartment.description2')}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FiCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700">{t('sampleApartment.benefits.realMaterials')}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700">{t('sampleApartment.benefits.experienceQuality')}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700">{t('sampleApartment.benefits.meetTeam')}</span>
                                </div>
                            </div>
                            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                {t('sampleApartment.bookButton')}
                            </button>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-xl overflow-hidden">
                                <img 
                                    src="/images/projects/czech-republic/horovice/horovice-24.webp" 
                                    alt="Sample Apartment" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
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
                                {t('location.description1')}
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                {t('location.description2')}
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
                                    alt="Bydlení Hořovice Location Map" 
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
                            <div className="text-4xl font-bold text-green-600 mb-2">{t('availableUnits.contactUs')}</div>
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
