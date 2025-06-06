'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi'
import Image from 'next/image'
import { BlogService } from '@/services/blog-service'
import { Blog } from '@/types/blog'
import { useQuery } from '@tanstack/react-query'

export default function BlogSection() {
    const t = useTranslations('blog');
    const blogService = new BlogService();

    const { data: blogs, isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: () => blogService.getAllBlogs(1, 3),
        staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
    });

    if (isLoading) {
        return (
            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{t('title')}</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">{t('description')}</p>
                </div>
                <div className="flex justify-center items-center min-h-[300px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
                </div>
            </div>
        );
    }

    if (!blogs || blogs.length === 0) {
        return (
            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{t('title')}</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">{t('description')}</p>
                </div>
                <div className="text-center py-12">
                    <p className="text-slate-400">No blogs available at the moment.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{t('title')}</h3>
                <p className="text-slate-400 max-w-xl mx-auto">{t('description')}</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {blogs.map((item: Blog) => (
                    <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow-sm shadow-gray-200 dark:shadow-gray-700 transition-all duration-500 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-800 hover:-translate-y-1" key={item.id}>
                        <div className="relative overflow-hidden">
                            <Image 
                                src={item.pictures[0]} 
                                alt={item.name}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width: "100%", height: "auto"}}
                                className="transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute end-4 top-4">
                                <span className="bg-green-600 text-white text-[14px] px-2.5 py-1 font-medium !rounded-full h-5">
                                    {item.tags[0]}
                                </span>
                            </div>
                        </div>

                        <div className="relative p-6">
                            <div className="">
                                <div className="flex justify-between mb-4">
                                    <span className="text-slate-400 text-sm inline-flex items-center">
                                        <FiCalendar className="text-slate-900 dark:text-white me-2"/>
                                        {new Date(item.date).toLocaleDateString()}
                                    </span>
                                    <span className="text-slate-400 text-sm ms-3 inline-flex items-center">
                                        <FiClock className="text-slate-900 dark:text-white me-2"/>
                                        {t('readTime')}
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
                ))}
            </div>
        </div>
    )
} 