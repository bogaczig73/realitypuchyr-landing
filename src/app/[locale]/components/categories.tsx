import React from "react";
import { ApiClient } from '@/services/api-client';
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
        const [categories, stats] = await Promise.all([
            ApiClient.getInstance().getCategories(),
            ApiClient.getInstance().getCategoryStats()
        ]);

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