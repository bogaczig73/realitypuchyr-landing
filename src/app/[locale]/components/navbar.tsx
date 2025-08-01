"use client"; // This is a client component 👈🏽
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { languages } from '@/config/languages';
import { FiChevronDown } from 'react-icons/fi';

import Sidebar from "./sidebar";

export default function Navbar({ navClass, topnavClass, tagline }:{ navClass:string, topnavClass:string, tagline:boolean }) {
    const t = useTranslations('navigation');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [topNavbar, setTopNavBar] = useState(false);
    const [currentLocale, setCurrentLocale] = useState(locale);
    const [showCountry, setShowCountry] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    const [manu, setManu] = useState('');
    const [subManu, setSubManu] = useState('');

    useEffect(() => {
        // Extract locale from pathname
        const locale = pathname.split('/')[1];
        if (languages.some(lang => lang.code === locale)) {
            setCurrentLocale(locale);
        }

        // Remove locale prefix and trailing slash for path comparison
        const pathWithoutLocale = pathname.replace(`/${locale}`, '').replace(/\/$/, '');
        setManu(pathWithoutLocale);
        setSubManu(pathWithoutLocale);

        function windowScroll() {
            setTopNavBar(window.scrollY >= 50);
        }

        window.addEventListener('scroll', windowScroll);
        return () => {
            window.removeEventListener('scroll', windowScroll);
        }
    }, [pathname]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowCountry(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleSidebar = (e: React.MouseEvent): void => {
        e.preventDefault();
        setIsOpen(!isOpen);
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
            sidebar.classList.toggle("open");
        }
    };

    const handleLanguageChange = (locale: string) => {
        const currentPath = pathname;
        const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${locale}`);
        router.push(newPath);
        setShowCountry(false);
    };

    const currentLang = languages.find(lang => lang.code === currentLocale) || languages[0];

    // Helper function to check if a path is active
    const isActive = (path: string) => {
        if (path === '/') {
            return manu === '' || manu === '/';
        }
        return manu.startsWith(path);
    };

    return (
        <React.Fragment>
            <nav id="topnav" className={`${topNavbar ? 'nav-sticky': ''} ${tagline ? 'tagline-height' : ''} ${topnavClass ? topnavClass : ''} defaultscroll fixed top-0 left-0 right-0 z-50`} >
               
                <div className={`${topnavClass !== '' && topnavClass !== undefined ? 'container-fluid md:px-8 px-3' : 'container'}`}>
                    {/* <!-- Logo container--> */}
                    {navClass === '' || navClass === undefined ?
                        <Link className="logo" href={`/${currentLocale}`}>
                            <Image src="/images/logo-dark.png" className="inline-block dark:hidden" alt="Reality Puchýř Logo - Dark Version" width={120} height={80} />
                            <Image src="/images/logo-light.png" className="hidden dark:inline-block" alt="Reality Puchýř Logo - Light Version" width={120} height={80}/>
                        </Link> :
                        <Link className="logo" href={`/${currentLocale}`}>
                            <span className="inline-block dark:hidden">
                                <Image src="/images/logo-dark.png" className="l-dark"  alt="Reality Puchýř Logo - Dark Version" width={120} height={80}/>
                                <Image src="/images/logo-light.png" className="l-light"  alt="Reality Puchýř Logo - Light Version" width={120} height={80}/>
                            </span>
                            <Image src="/images/logo-light.png"  className="hidden dark:inline-block" alt="Reality Puchýř Logo - Light Version" width={120} height={80}/>
                        </Link>
                    }
                    {/* <!-- End Logo container--> */}

                    {/* <!-- Start Mobile Toggle --> */}
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link href="#" className="navbar-toggle" id="isToggle" onClick={toggleSidebar}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- End Mobile Toggle --> */}

                    {/* <!-- Login button Start --> */}
                    <ul className="buy-button list-none mb-0">
                        <li className="sm:inline ps-1 mb-0 hidden">
                            <Link href="tel:+420733781696" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white !rounded-full">+420 733 781 696</Link>
                        </li>
                    </ul>
                    {/* <!--Login button End--> */}

                    <div id="navigation" className="lg:block">
                        {/* <!-- Navigation Menu--> */}
                        <ul className={`navigation-menu ${navClass === '' || navClass === undefined ? '' : 'nav-light'} ${topnavClass !== '' && topnavClass !== undefined ? '!justify-center' : '!justify-end'}`}>
                            <li className={`has-submenu parent-menu-item ${isActive('/') ? 'active' : ''}`}><Link href={`/${currentLocale}`}>{t('homeLink')}</Link></li>
                            <li className={`has-submenu parent-menu-item ${isActive('/list') ? 'active' : ''}`}><Link href={`/${currentLocale}/list?status=ACTIVE`}>{t('propertiesLink')}</Link></li>
                            <li className={`has-submenu parent-menu-item ${isActive('/reviews') ? 'active' : ''}`}><Link href={`/${currentLocale}/reviews`}>{t('reviewsLink')}</Link></li>
                            
                            {/* Services Dropdown */}
                            <li className={`has-submenu parent-menu-item ${isActive('/services') ? 'active' : ''}`}>
                                <Link href="#" onClick={(e) => {e.preventDefault(); setSubManu(subManu === "/services-item" ? "" : "/services-item")}}>
                                    {t('servicesLink')}
                                </Link>
                                <span className="menu-arrow"></span>
                                <ul className={`submenu ${["/services", "/services-item"].includes(subManu) ? 'open' : ''}`}>
                                    <li className={isActive('/services') ? 'active' : ''}>
                                        <Link href={`/${currentLocale}/services`} className="sub-menu-item">
                                            {t('allServices')}
                                        </Link>
                                    </li>

                                    {/* Spain link */}
                                    <li className={isActive('/spain') ? 'active' : ''}>
                                        <Link href={`/${currentLocale}/spain`} className="sub-menu-item">
                                            {t('spain')}
                                        </Link>
                                    </li>
                                    <li className={isActive('/spain/developer-projects') ? 'active' : ''}>
                                        <Link href={`/${currentLocale}/spain/developer-projects`} className="sub-menu-item">
                                            {t('developerProjects')}
                                        </Link>
                                    </li>

                                    <li className={isActive('/faq') ? 'active' : ''}>
                                        <Link href={`/${currentLocale}/faq`} className="sub-menu-item">
                                            {t('faqLink')}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            
                            <li className={isActive('/blog') ? "active" : ''}><Link href={`/${currentLocale}/blog`} className="sub-menu-item">{t('blogLink')}</Link></li>
                            <li className={isActive('/contact') ? "active" : ''}><Link href={`/${currentLocale}/contact`} className="sub-menu-item">{t('contactLink')}</Link></li>
                            
                            {/* Language Switcher */}
                            <li className="dropdown inline-block relative flex items-center" ref={dropdownRef}>
                                <Link href="#" className="flex items-center" onClick={(e) => {
                                    e.preventDefault();
                                    setShowCountry(!showCountry);
                                }}>
                                    <button 
                                        className="dropdown-toggle h-6 w-6 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" 
                                        type="button" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setShowCountry(!showCountry);
                                        }}
                                    >
                                        <Image 
                                            src={currentLang.flag} 
                                            width={20} 
                                            height={20} 
                                            className="h-5 w-5 rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700" 
                                            alt={`${currentLang.label} flag`}
                                        />
                                    </button>
                                </Link>
                                
                                <div className={`${showCountry ? 'block' : 'hidden'} dropdown-menu absolute end-0 m-0 mt-4 z-10 w-36 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm shadow-gray-200 dark:shadow-gray-700`}>
                                    <ul className="list-none py-2 text-start">
                                        {languages.map((lang) => (
                                            <li key={lang.code} className="my-1">
                                                <button 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleLanguageChange(lang.code);
                                                    }}
                                                    className="w-full text-left flex items-center text-[15px] font-medium py-1.5 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"
                                                >
                                                    <Image 
                                                        src={lang.flag} 
                                                        width={24} 
                                                        height={24} 
                                                        className="h-6 w-6 rounded-md me-2" 
                                                        alt={`${lang.label} flag`}
                                                    /> 
                                                    {lang.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Sidebar/>
            {/* End Navbar  */}
        </React.Fragment>
    );
}
