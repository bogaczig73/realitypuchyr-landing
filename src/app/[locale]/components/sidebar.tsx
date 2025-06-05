'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FiMenu } from "react-icons/fi";
import { useTranslations } from 'next-intl';

export default function Sidebar(){
    const t = useTranslations('components.sidebar');
    let [ manu, setmanu ] = useState<string>('');
    let [ submanu, setSubManu ] = useState<string>('');
    let [isOpen, setIsOpen] = useState(false);
    let current = usePathname();

    useEffect(()=>{
        setSubManu(current);
        setmanu(current)
    },[current])

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    
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
                        </ul>
                    </SimpleBar>
                </div>
            </nav>
        </>
    )
}