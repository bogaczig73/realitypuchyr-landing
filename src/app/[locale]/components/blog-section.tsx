'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { Blog } from '@/types/blog'
import { useQuery } from '@tanstack/react-query'
import BlogCard from './blog-card'
import { useApiClient } from '@/hooks/useApiClient'

export default function BlogSection() {
    const t = useTranslations('blog');
    const apiClient = useApiClient();

    const { data: blogs, isLoading } = useQuery({
        queryKey: ['blogs', apiClient.getLocale()],
        queryFn: async () => {
            const response = await apiClient.request<Blog[]>({
                method: 'GET',
                url: 'blogs',
                params: { pages: 1, limit: 3, currentPage: 1, truncate: 100 }
            });
            return Array.isArray(response) ? response : [];
        },
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
                    <BlogCard key={item.id} item={item} />
                ))}
            </div>

            <div className="grid grid-cols-1 mt-8 text-center">
                <Link href="/blog" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md">
                    {t('viewAllBlogs')} <FiArrowRight className="ms-1"/>
                </Link>
            </div>
        </div>
    )
} 