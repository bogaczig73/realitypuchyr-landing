'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi'
import { blogList } from '../../data/data'

interface BlogData {
    id: number;
    title: string;
    date: string;
    type: string;
    image: string;
}

export default function BlogSection() {
    const t = useTranslations('blog');

    return (
        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{t('title')}</h3>
                <p className="text-slate-400 max-w-xl mx-auto">{t('description')}</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {blogList.slice(0,3).map((item:BlogData,index:number)=>{
                    return(
                        <div className="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow-sm shadow-gray-200 dark:shadow-gray-700 transition-all duration-500" key={index}>
                            <div className="relative overflow-hidden">
                                <img src={item.image} className="" alt=""/>
                                <div className="absolute end-4 top-4">
                                    <span className="bg-green-600 text-white text-[14px] px-2.5 py-1 font-medium !rounded-full h-5">{item.type}</span>
                                </div>
                            </div>

                            <div className="relative p-6">
                                <div className="">
                                    <div className="flex justify-between mb-4">
                                        <span className="text-slate-400 text-sm inline-flex items-center"><FiCalendar className="text-slate-900 dark:text-white me-2"/>{item.date}</span>
                                        <span className="text-slate-400 text-sm ms-3 inline-flex items-center"><FiClock className="text-slate-900 dark:text-white me-2"/>{t('readTime')}</span>
                                    </div>

                                    <Link href="/blog-detail" className="title text-xl font-medium hover:text-green-600 duration-500 ease-in-out">{item.title}</Link>
                                    
                                    <div className="mt-3">
                                        <Link href="/blog-detail" className="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">{t('readMore')} <FiArrowRight className=""/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
} 