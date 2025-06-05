import React from 'react';
import { useTranslations } from 'next-intl';
import Categories from './categories';

export default function CategoriesSection() {
    const t = useTranslations('homePage');
    
    return (
        <section className="relative md:pb-24 pb-16">
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{t('categories.title')}</h3>
                </div>

                <Categories />
            </div>
        </section>
    );
} 