'use client'
import React from "react";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { useTranslations } from 'next-intl';

export default function GetInTuch(){
    const t = useTranslations('components.getInTouch');
    
    return(
        <div className="container lg:mt-24 mt-16 pb-16">
        <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">{t('title')}</h3>

            <p className="text-slate-400 max-w-xl mx-auto">{t('description')}</p>

            <div className="mt-6">
                <Link href="/contact" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"><FiPhone className="align-middle me-2"/> {t('contactButton')}</Link>
            </div>
        </div>
    </div>
    )
}