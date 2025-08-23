'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiMapPin, FiHome, FiStar, FiPhone, FiMail, FiGrid, FiBox, FiZap, FiCheck, FiUsers, FiHeart, FiAward } from 'react-icons/fi';

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import GetInTuch from "../../../components/get-in-touch";
import Switcher from "../../../components/switcher";

const projectFeatures = [
    {
        name: "Location",
        value: "Liberec Center",
        description: "Heart of the city",
        icon: "📍"
    },
    {
        name: "Apartments",
        value: "200",
        description: "Total units",
        icon: "🏠"
    },
    {
        name: "Parking",
        value: "218",
        description: "Parking spaces",
        icon: "🚗"
    },
    {
        name: "History",
        value: "1791",
        description: "Since Berger's house",
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
    { feature: "City Center", time: "0 min", description: "Heart of Liberec" },
    { feature: "Shopping", time: "1-3 min", description: "Lidl, Billa, Forum Liberec" },
    { feature: "Public Transport", time: "2 min", description: "Fügnerova bus stop" },
    { feature: "Castle Park", time: "1 min", description: "Beautiful green space" }
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
    { name: "Air Recuperation", description: "Fresh air ventilation system for healthy living" },
    { name: "Underfloor Heating", description: "Efficient and comfortable heating system" },
    { name: "Photovoltaic Panels", description: "Solar panels with battery storage" },
    { name: "Cogeneration Unit", description: "Combined heat and power generation" },
    { name: "Rainwater Collection", description: "Sustainable water management system" },
    { name: "Smart Technology", description: "Modern building management systems" },
    { name: "Premium Materials", description: "High-quality finishes and construction" },
    { name: "Energy Efficient", description: "Reduced monthly operating costs" },
    { name: "Sound Insulation", description: "Peaceful living environment" },
    { name: "Balconies & Terraces", description: "Outdoor living spaces with views" }
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
    { year: "1791", event: "Berger's house built - first Liberec manufactory", description: "The beginning of industrial heritage" },
    { year: "1800s", event: "Villa houses constructed", description: "Development of the garden city quarter" },
    { year: "1900s", event: "Printing complex expansion", description: "Largest German printing plant in Bohemia" },
    { year: "1990s", event: "Complex abandoned", description: "Waiting for its second chance" },
    { year: "2024", event: "Second stage begins", description: "Modern redevelopment with respect for history" }
];

const architecturalAwards = [
    { name: "Česká cena za architekturu 2020", description: "Czech Architecture Award 2020", architect: "OV-A Studio" },
    { name: "15+ Years Experience", description: "Successfully completed projects", architect: "Jiří Opočenský & Štěpán Valouch" },
    { name: "Unique Solutions", description: "Functional, structural and poetic architecture", architect: "Award-winning team" }
];

export default function TiskarnaKristianovPage() {
    const t = useTranslations('developerProjects.czechRepublic');
    const tCategories = useTranslations('developerProjects.categories');

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
                                Back to Projects
                            </Link>
                        </div>
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
                            Tiskárna Kristiánov
                        </h3>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
                            Living with a story in the heart of Liberec. Where history meets modern luxury in a uniquely reimagined industrial complex.
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
                            <h2 className="text-4xl font-bold mb-6">About the Project</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Tiskárna Kristiánov offers unconventional living and non-residential spaces in a comprehensively reconstructed complex 
                                with fascinating history. This architectural pearl combines the strong periods of garden city and industrial era history.
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                The complex is located in the city center with excellent accessibility. We've preserved the original face of the buildings 
                                while giving them new expression. The dominant feature is a 32-meter high non-functional chimney visible from distant 
                                corners of Liberec.
                            </p>
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="font-semibold text-green-800 mb-2">Second Stage Now Available</h3>
                                <p className="text-green-700">
                                    Don't hesitate and choose your dream home today. Special introductory prices available for a limited time.
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
                        <h2 className="text-4xl font-bold mb-4">A Story That Began in 1791</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Discover the fascinating journey from Berger's house to today's modern complex
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
                        <h2 className="text-4xl font-bold mb-4">What Makes Us Special</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Discover the unique features that set Tiskárna Kristiánov apart
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiMapPin className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Excellent Location</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                Live in the very heart of the metropolis under Ještěd. The complex is located in the city center with excellent 
                                accessibility, forming the central triangle of Liberec together with Staré and Nové Město.
                            </p>
                            <p className="text-slate-600">
                                Perfect access to shopping, public transport, education, and cultural facilities.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiGrid className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Stylish Living</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                We've combined history and unique modern architecture. The complex features neorenaissance, industrial, and modern 
                                architectural elements, creating a truly unique living environment.
                            </p>
                            <p className="text-slate-600">
                                Each building tells its own story while offering modern comfort and luxury.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiZap className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Modern Technology</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                We take care of your comfortable and energy-efficient living. All apartments feature air recuperation and underfloor 
                                heating, with photovoltaic panels and cogeneration units for sustainable energy.
                            </p>
                            <p className="text-slate-600">
                                Rainwater collection systems and smart building management ensure reduced monthly costs.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiHeart className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Comprehensive Amenities</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                The complex includes 200 apartments and non-residential spaces with room for galleries, cafés, bakeries, 
                                fitness centers, and other civic amenities.
                            </p>
                            <p className="text-slate-600">
                                Inner courtyard features children's corner, fountain, clock tower, and communal outdoor spaces.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apartment Standards */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Premium Construction Standards</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Reducing energy consumption is our priority. Discover the sustainable features that make your home efficient and comfortable.
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
                        <h2 className="text-4xl font-bold mb-4">Award-Winning Architecture</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Jiří Opočenský and Štěpán Valouch are recipients of the Czech Architecture Award 2020
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
                        <h2 className="text-4xl font-bold mb-4">Exterior Views & Architecture</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Explore the unique industrial heritage and modern architectural fusion
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
                                        <div className="text-xs opacity-90">Exterior View</div>
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
                            <h2 className="text-4xl font-bold mb-6">Perfect Location in Liberec Center</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Together with Staré and Nové Město, Kristiánov forms the central triangle of Liberec. Located in the east of Liberec, 
                                this urban district is home to over 5,000 residents and was created with the aim of building a representative 
                                environment around the adjacent castle complex and famous Liebieg Palace.
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
                        <h2 className="text-4xl font-bold mb-6">Choose Your Dream Home</h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                            For detailed information about available units, pricing, and current availability, 
                            please contact our sales team directly.
                        </p>
                        <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
                            <div className="text-4xl font-bold text-green-600 mb-2">Contact Me</div>
                            <div className="text-xl mb-4">For Unit Information</div>
                            <Link href="#contact">
                                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                    Get Unit Details
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
