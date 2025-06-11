'use client'
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowRight, FiCalendar, FiClock, FiFacebook, FiInstagram, FiLinkedin, FiHexagon } from 'react-icons/fi';

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GetInTuch from "../components/get-in-touch";
import Switcher from "../components/switcher";
import CountUp from "react-countup";

const features = [
    {
        title: "Developerské projekty",
        description: "Nové projekty k bydlení i pro rekreaci ve výstavbě nebo těsně po dokončení",
        emoji: "🏗️"
    },
    {
        title: "Nemovitosti",
        description: "Byty a domy na Costa del Sol k prodeji, obvykle ihned k nastěhování",
        emoji: "🏡"
    }
];

const benefits = [
    {
        title: "více než 300 slunečných dní v roce",
        emoji: "☀️"
    },
    {
        title: "jen 3 hodiny letu z Prahy",
        emoji: "✈️"
    },
    {
        title: "celoroční turistická sezóna",
        emoji: "🌴"
    },
    {
        title: "jedna z nejžádanějších lokalit na světě",
        emoji: "⭐"
    }
];

const whyCosta = [
    {
        title: "Celoroční turistická sezóna - celoroční možnost generování cash-flow",
        emoji: "💰"
    },
    {
        title: "Příležitost pořídit si na období renty nemovitost u moře",
        emoji: "🏖️"
    },
    {
        title: "Možnost diverzifikace realitního portfolia",
        emoji: "🌍"
    },
    {
        title: "Úřední jazyk je španělština, ale bez problémů se domluvíte anglicky",
        emoji: "🗣️"
    },
    {
        title: "Krásná lokalita, bezpečí, klid a komfortní zázemí",
        emoji: "✨"
    }
];

const stats = [
    {
        title: "developerských projektů",
        value: "70+",
        emoji: "🏗️"
    },
    {
        title: "nemovitostí",
        value: "4563",
        emoji: "🏠"
    },
    {
        title: "spokojených klientů",
        value: "160+",
        emoji: "😊"
    }
];

const process = [
    {
        title: "Zajistíme veškeré realitní služby",
        description: "Pomůžeme s výběrem nemovitosti a domluvíme prohlídky.",
        emoji: "🏠"
    },
    {
        title: "Všude vás doprovodíme",
        description: "Vyzvedneme vás na letišti, seznámíme s lokalitami i zajímavými místy v okolí a ukážeme vám vybrané realitní projekty.",
        emoji: "✈️"
    },
    {
        title: "Zajistíme tlumočení a překlady",
        description: "Veškeré služby poskytujeme v českém jazyce. Chceme, aby pro vás byly všechny informace dostupné a jasné.",
        emoji: "🗣️"
    },
    {
        title: "Vyřídíme administrativní a právní záležitosti",
        description: "Zprostředkujeme služby místního advokáta, vyřídíme za vás potřebné registrace, zajistíme vyřízení španělského daňového čísla (NIE) i pojištění vaší nemovitosti.",
        emoji: "📄"
    },
    {
        title: "Pomůžeme se zajištěním financování",
        description: "Financování nákupu španělské nemovitosti je možné hypotékou i pro české občany, případně je možné získat hypoteční úvěr i v České republice (např. americká hypotéka).",
        emoji: "💰"
    },
    {
        title: "Předáme vám klíče k novému domovu",
        description: "Váš příběh je i naším. Stojíme při vás během celého procesu koupě vaší vysněné nemovitosti u moře.",
        emoji: "🔑"
    }
];

export default function Spain() {
    const t = useTranslations('spain');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.querySelector('section');
            if (heroSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                setIsSticky(heroBottom <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                        ŠPANĚLSKO: COSTA DEL SOL
                        </h3>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
                            Bezpečně vás provedeme koupí nemovitosti na Costa del Sol od A do Z – jasně, srozumitelně a bez starostí.
                        </p>
                        <div className="mt-8">
                            <Link href="#properties" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">
                                Prozkoumat nabídku
                            </Link>
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

            {/* Sticky Menu */}
            <div className={`transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-lg' : 'relative bg-white'}`}>
                <div className="container">
                    <div className="flex justify-between items-center py-4">
                        <ul className="flex gap-8">
                            <li><Link href="#properties" className="flex items-center gap-2 hover:text-green-600 transition-colors">🏠 Nabídka nemovitostí</Link></li>
                            <li><Link href="#why-costa" className="flex items-center gap-2 hover:text-green-600 transition-colors">☀️ Proč Costa del Sol</Link></li>
                            <li><Link href="#why-us" className="flex items-center gap-2 hover:text-green-600 transition-colors">💼 Proč s námi</Link></li>
                            <li><Link href="#process" className="flex items-center gap-2 hover:text-green-600 transition-colors">📝 Proces nákupu</Link></li>
                            <li><Link href="#faq" className="flex items-center gap-2 hover:text-green-600 transition-colors">❓ FAQ</Link></li>
                        </ul>
                        <Link href="#contact" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md flex items-center gap-2">
                            <FiInstagram /> Poradit s výběrem
                        </Link>
                    </div>
                </div>
            </div>

            {/* Properties Section */}
            <section id="properties" className="relative lg:py-24 py-16 scroll-margin-top-24">
                <div className="container">
                    <h2 className="text-4xl font-bold text-center mb-12">Aktuální nabídka nemovitostí ve Španělsku</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="h-32 w-32 fill-green-600/5"></FiHexagon>
                                    <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <span className="text-4xl">{feature.emoji}</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-xl hover:text-green-600 font-medium">{feature.title}</h3>
                                    <p className="text-slate-400 mt-3">{feature.description}</p>
                                    <Link 
                                        href={feature.title === "Developerské projekty" ? "/developerske-projekty" : "/spanelske-nemovitosti"} 
                                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-4"
                                    >
                                        {feature.title === "Developerské projekty" ? "Zjistit více" : "Zobrazit nabídku"}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="why-costa" className="relative lg:py-24 py-16 dark:bg-slate-800 scroll-margin-top-24">
                <div className="container">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="h-32 w-32 fill-green-600/5"></FiHexagon>
                                    <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <span className="text-4xl">{benefit.emoji}</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h4 className="text-xl font-semibold">{benefit.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Costa del Sol Section */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-4xl font-bold mb-8">Proč uvažovat o koupi nemovitosti na Costa del Sol?</h3>
                            <ul className="space-y-4">
                                {whyCosta.map((item, index) => (
                                    <li key={index} className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden flex items-center gap-6">
                                        <div className="relative overflow-hidden text-transparent -m-3 flex-shrink-0">
                                            <FiHexagon className="h-32 w-32 fill-green-600/5"></FiHexagon>
                                            <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                                <span className="text-4xl">{item.emoji}</span>
                                            </div>
                                        </div>
                                        <p>{item.title}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="aspect-video">
                                <iframe 
                                    className="w-full h-full rounded-xl"
                                    src="https://www.youtube.com/embed/5UNeoIu5Ryk" 
                                    title="YouTube video player" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                />
                            </div>
                            <p className="text-slate-400 mt-4">
                                Sen o bydlení ve Španělsku může být realitou! Nechte se okouzlit krásami Costa del Sol. ✨
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Cards Section */}
            <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-4xl font-bold mb-6">Costa del Sol je v podstatě rájem na zemi 🌴</h3>
                            <p className="text-lg mb-8">
                                Slunce, příjemné celoroční klima, moře, hory, skvělé jídlo i pití, bohatá kultura, občanská vybavenost a služby na vysoké úrovni, klid a bezpečí.
                            </p>
                            <Link href="/location" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">
                                Více o lokalitě
                            </Link>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold mb-6">Druhý domov? Španělsko je jasná volba! 🏡</h3>
                            <p className="text-lg mb-8">
                                Češi při koupi nemovitosti v zahraničí uvažují nejčastěji o těchto lokalitách:
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <img src="/images/spain/spain.png" alt="Španělsko" className="w-12 h-12" />
                                    <p className="text-lg"><b>Španělsko</b> <span className="text-green-600">25 %</span></p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src="/images/spain/croatia.png" alt="Chorvatsko" className="w-12 h-12" />
                                    <p className="text-lg"><b>Chorvatsko</b> <span className="text-green-600">11 %</span></p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src="/images/spain/italy.png" alt="Itálie" className="w-12 h-12" />
                                    <p className="text-lg"><b>Itálie</b> <span className="text-green-600">7 %</span></p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src="/images/spain/bali.png" alt="Bali" className="w-12 h-12" />
                                    <p className="text-lg"><b>Bali</b> <span className="text-green-600">7 %</span></p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 mt-4">
                                Údaje vycházejí z průzkumu Ipsos, který byl realizován pro Broker Consulting v květnu 2024 a zaměřil se na atraktivitu tuzemských a zahraničních nemovitostí.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section
            style={{ backgroundImage: "url('/images/spain/bg1.webp')" }}
            className="relative py-24 bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="absolute inset-0 bg-slate-900/60"></div>
            <div className="container relative">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                    <div className="lg:col-start-2 lg:col-span-10">
                        <div className="grid md:grid-cols-3 grid-cols-1 items-center">
                            {stats.map((item, index) => (
                                <div className="counter-box text-center" key={index}>
                                    <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                                        
                                            <>
                                                <CountUp
                                                    start={0}
                                                    end={parseInt(item.value)}
                                                    duration={2.5}
                                                    className="counter-value"
                                                />
                                            </>
                                        
                                    </h1>
                                    <h5 className="counter-head text-white text-lg font-medium">{item.title}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

            {/* Why Us Section */}
            <section id="why-us" className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800 scroll-margin-top-32">
                <div className="container">
                    <div className="text-center mb-12">
                        <span className="text-green-600">pobřeží</span>
                        <h2 className="text-4xl font-bold mt-2">Costa del Sol 🌊</h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold mb-6">Proč s námi 💼</h3>
                            <p className="text-lg">
                                Na španělském realitním trhu, speciálně na Costa del Sol, máme bohaté zkušenosti. Spolupracujeme výhradně s místními developery s dlouholetou praxí.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <span className="text-4xl">💰</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h4 className="text-3xl font-bold text-green-600 mb-2">2,9+ mld.</h4>
                                    <p className="text-slate-400">Náš obrat za rok 2023 činil 2,9 mld. Kč.</p>
                                </div>
                            </div>
                            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <span className="text-4xl">👥</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h4 className="text-3xl font-bold text-green-600 mb-2">700+ tis.</h4>
                                    <p className="text-slate-400">Už více než 700 000 klientům jsme pomohli s financemi a nemovitostmi.</p>
                                </div>
                            </div>
                            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <span className="text-4xl">🏢</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h4 className="text-3xl font-bold text-green-600 mb-2">1998+</h4>
                                    <p className="text-slate-400">Jsme česká společnost, která má své místo na trhu již od roku 1998.</p>
                                </div>
                            </div>
                            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <span className="text-4xl">📍</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h4 className="text-3xl font-bold text-green-600 mb-2">100+</h4>
                                    <p className="text-slate-400">Na území ČR máme přes 100 obchodních míst.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="relative lg:py-24 py-16 scroll-margin-top-24">
                <div className="container">
                    <h3 className="text-4xl font-bold text-center mb-12">Jak bude celý proces probíhat?</h3>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="h-32 w-32 fill-green-600/5"></FiHexagon>
                                    <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <span className="text-4xl">{step.emoji}</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl font-bold text-green-600">{(index + 1).toString().padStart(2, '0')}</span>
                                        <h4 className="text-xl font-semibold">{step.title}</h4>
                                    </div>
                                    <p className="text-slate-400 mt-3">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800 scroll-margin-top-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-8">Často se ptáte</h2>
                        </div>
                        <div className="space-y-4">
                            {/* FAQ items will be added here */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <FiInstagram className="h-8 w-8 text-green-600" />
                                <h4 className="text-2xl font-semibold">Sledujte novinky na Instagramu</h4>
                            </div>
                            <p className="text-slate-400 mb-6">
                                Připojte se k nám a nechte se pohltit atmosférou slunného Španělska! Sdílíme tipy a vše o lokalitě i místní kuchyni či zvyklostech, díky kterým si španělský životní styl zamilujete.
                            </p>
                            <a 
                                href="https://www.instagram.com/broker_consulting_zahranici/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
                            >
                                Začít sledovat
                            </a>
                        </div>
                        <div>
                            <img 
                                src="/images/spain/instagram-bg.webp" 
                                alt="Instagram" 
                                className="rounded-xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <GetInTuch />
            
            <Footer />
            <Switcher />
        </>
    )
} 