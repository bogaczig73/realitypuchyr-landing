import React from "react";
import { API_BASE_URL } from '@/services/api';
import CategoriesClient from './categories-client';

interface Category {
    id: number;
    name: string;
    slug: string;
    image: string;
    count?: number;
}

interface CategoryStat {
    categoryId: number;
    categoryName: string;
    count: number;
}

async function getCategories(): Promise<Category[]> {
    try {
        const [categoriesRes, statsRes] = await Promise.all([
            fetch(`${API_BASE_URL}/categories`, {
                next: { revalidate: 3600 }, // Cache for 1 hour
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            fetch(`${API_BASE_URL}/properties/category-stats`, {
                next: { revalidate: 3600 }, // Cache for 1 hour
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        ]);

        if (!categoriesRes.ok) {
            throw new Error(`Failed to fetch categories: ${categoriesRes.status} ${categoriesRes.statusText}`);
        }

        if (!statsRes.ok) {
            throw new Error(`Failed to fetch category stats: ${statsRes.status} ${statsRes.statusText}`);
        }

        const categories = await categoriesRes.json();
        const stats = await statsRes.json();

        // Merge the stats with categories
        return categories.map((category: Category) => ({
            ...category,
            count: stats.find((stat: CategoryStat) => stat.categoryId === category.id)?.count || 0
        }));
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw new Error('Failed to load categories. Please try again later.');
    }
}

export default async function Categories() {
    const categories = await getCategories();
    return <CategoriesClient categories={categories} />;
}