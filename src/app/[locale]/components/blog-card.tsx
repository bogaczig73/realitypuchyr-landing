'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi'
import Image from 'next/image'
import { Blog } from '@/types/blog'

interface BlogCardProps {
    item: Blog;
}

export default function BlogCard({ item }: BlogCardProps) {
    const t = useTranslations('blog');

    return (
        <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow-sm shadow-gray-200 dark:shadow-gray-700 transition-all duration-500 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-800">
            <Link href={`/blog/${item.slug}`} className="relative overflow-hidden aspect-[16/9] block">
                <Image 
                    src={item.pictures[0]} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                    alt={item.name} 
                    width={0} 
                    height={0} 
                    sizes="100vw" 
                    style={{width:"100%", height:"100%"}} 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute end-4 top-4">
                    <span className="bg-green-600 text-white text-[14px] px-2.5 py-1 font-medium !rounded-full h-5">
                        {item.tags[0]}
                    </span>
                </div>
            </Link>

            <div className="relative p-6">
                <div className="">
                    <div className="flex justify-between mb-4">
                        <span className="text-slate-400 text-sm flex items-center">
                            <FiCalendar className="text-slate-900 dark:text-white me-2"/>
                            <span>{new Date(item.date).toLocaleDateString()}</span>
                        </span>
                        <span className="text-slate-400 text-sm ms-3 flex items-center">
                            <FiClock className="text-slate-900 dark:text-white me-2"/>
                            <span>{Math.ceil(item.content.split(/\s+/).length / 250)} min read</span>
                        </span>
                    </div>

                    <Link href={`/blog/${item.slug}`} className="title text-xl font-medium hover:text-green-600 duration-500 ease-in-out">
                        {item.name}
                    </Link>
                    
                    <p className="text-slate-400 mt-2 line-clamp-2">
                        {item.metaDescription}
                    </p>
                    
                    <div className="mt-3">
                        <Link href={`/blog/${item.slug}`} className="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out inline-flex items-center">
                            {t('readMore')} <FiArrowRight className="ms-1"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 