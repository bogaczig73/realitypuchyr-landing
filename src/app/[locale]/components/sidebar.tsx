'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FiMenu } from "react-icons/fi";
import { useTranslations, useLocale } from 'next-intl';

const languages = [
    { code: 'en', label: 'English', flag: '/images/flags/en.png' },
    { code: 'cs', label: 'Čeština', flag: '/images/flags/cs.png' }
];

export default function Sidebar(){
    const t = useTranslations('components.sidebar');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    let [ manu, setmanu ] = useState<string>('');
    let [ submanu, setSubManu ] = useState<string>('');
    let [isOpen, setIsOpen] = useState(false);
    let current = usePathname();
    const [currentLocale, setCurrentLocale] = useState(locale);

    useEffect(()=>{
        setSubManu(current);
        setmanu(current)
    },[current])

    useEffect(() => {
        // Extract locale from pathname
        const locale = pathname.split('/')[1];
        if (languages.some(lang => lang.code === locale)) {
            setCurrentLocale(locale);
        }
    }, [pathname]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const handleLanguageChange = (locale: string) => {
        const currentPath = pathname;
        const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${locale}`);
        router.push(newPath);
    };

    const currentLang = languages.find(lang => lang.code === currentLocale) || languages[0];
    
    return(
        <>
            <nav id="sidebar" className={`sidebar-wrapper sidebar-dark ${isOpen ? 'toggled' : ''}`}>
                <div className="sidebar-content">
                    <div className="sidebar-brand">
                        <Link href="/" scroll={false}><Image src='/images/logo-light.png' width={98} height={24} alt=""/></Link>
                        <Link id="close-sidebar" onClick={() => setIsOpen(!isOpen)} scroll={false} className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border dark:border-gray-800 dark:text-white rounded-md" href="#">
                            <FiMenu className="h-4 w-4"/>
                        </Link>
                    </div>
                    <SimpleBar style={{height: "calc(100% - 70px)"}}>
                        <ul className="sidebar-menu border-t border-white/10">
                            <li className={`${manu === "/" ? 'active' : ''} ms-0`}>
                                <Link href="/" onClick={toggleSidebar} scroll={false}><i className="mdi mdi-home me-2"></i>{t('home')}</Link>
                            </li>

                            <li className={`${manu === "/list" ? 'active' : ''} ms-0`}>
                                <Link href="/list" onClick={toggleSidebar} scroll={false}><i className="mdi mdi-home-city me-2"></i>{t('listing')}</Link>
                            </li>

                            <li className={`${manu === "/faq" ? 'active' : ''} ms-0`}>
                                <Link href="/faq" onClick={toggleSidebar} scroll={false}><i className="mdi mdi-help-circle me-2"></i>{t('faq')}</Link>
                            </li>

                            <li className={`${manu === "/blog" ? 'active' : ''} ms-0`}>
                                <Link href="/blog" onClick={toggleSidebar} scroll={false}><i className="mdi mdi-post-outline me-2"></i>{t('blog')}</Link>
                            </li>

                            <li className={`${manu === "/contact" ? 'active' : ''} ms-0`}>
                                <Link href="/contact" onClick={toggleSidebar} scroll={false}><i className="mdi mdi-email me-2"></i>{t('contact')}</Link>
                            </li>
                            
                            <li className="ms-0 mt-4 px-5">
                                <Link href="tel:+420733781696" className="btn bg-green-600 border-green-600 dark:border-green-600 !rounded-full w-full text-center py-2.5 !text-white hover:!text-white">
                                    <i className="mdi mdi-phone me-2"></i>{t('phoneNumber')}
                                </Link>
                            </li>

                            {/* Language Switcher */}
                            <li className="ms-0 mt-4 px-5">
                                <div className="flex flex-col gap-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLanguageChange(lang.code)}
                                            className={`flex items-center gap-2 w-full px-4 py-2 rounded-md ${
                                                currentLocale === lang.code 
                                                    ? 'bg-green-600 text-white' 
                                                    : 'bg-slate-800 text-white/70 hover:bg-slate-700'
                                            }`}
                                        >
                                            <Image
                                                src={lang.flag}
                                                width={24}
                                                height={24}
                                                className="h-6 w-6 rounded-md"
                                                alt={lang.label}
                                            />
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </SimpleBar>
                </div>
            </nav>
        </>
    )
}