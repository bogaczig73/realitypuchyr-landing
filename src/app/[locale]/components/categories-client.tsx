'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Category {
    id: number;
    name: string;
    slug: string;
    image: string;
    count?: number;
}

export default function CategoriesClient({ categories }: { categories: Category[] }) {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 md:gap-[30px] gap-3">
            {categories.map((category) => (
                <div 
                    className="group rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl dark:hover:shadow-xl shadow-gray-200 dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500" 
                    key={category.id}
                >
                    <div className="relative h-48">
                        <Image 
                            src={category.image} 
                            fill
                            style={{objectFit: 'cover'}}
                            alt={category.name}
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:opacity-0 transition-all duration-300" />
                    </div>
                    <div className="p-4">
                        <Link 
                            href={`/list?categoryId=${category.id}`} 
                            className="text-xl font-medium hover:text-green-600"
                        >
                            {category.name}
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            {category.count} {category.count === 1 ? 'property' : 'properties'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
} 