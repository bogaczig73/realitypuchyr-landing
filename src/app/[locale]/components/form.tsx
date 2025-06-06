'use client'
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react"
import { FiSearch, FiHome } from "react-icons/fi";
import type { SingleValue, ActionMeta } from 'react-select';
import { useRouter, useSearchParams } from 'next/navigation';
import { API_BASE_URL } from '@/services/api';
import { useTranslations } from 'next-intl';
const Select = dynamic(()=>import('react-select'),{ssr:false}) as any;

interface Category {
    id: number;
    name: string;
}

interface CategoryOption {
    value: number;
    label: string;
}

export default function FormThree(){
    const t = useTranslations('components.form');
    const router = useRouter();
    const searchParams = useSearchParams();

    const propertyStatuses = [
        { value: 'ACTIVE', label: t('status.active') },
        { value: 'SOLD', label: t('status.sold') },
    ];

    const [activeTabIndex, setActiveTabIndex] = useState<number>(() => {
        const status = searchParams.get('status');
        return status ? propertyStatuses.findIndex(s => s.value === status) : 0;
    });
    const [categories, setCategories] = useState<CategoryOption[]>([]);
    const [searchText, setSearchText] = useState(() => searchParams.get('search') || '');
    const [selectedCategory, setSelectedCategory] = useState<CategoryOption | null>(() => {
        const categoryId = searchParams.get('categoryId');
        return categoryId ? { value: parseInt(categoryId), label: '' } : null;
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch categories from API
        const fetchCategories = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`${API_BASE_URL}/categories`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCategories([
                    { value: 0, label: t('allCategories') },
                    ...data.map((cat: Category) => ({
                        value: cat.id,
                        label: cat.name
                    }))
                ]);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError(t('error.loadingCategories'));
            } finally {
                setIsLoading(false);
            }
        };
        fetchCategories();
    }, []);

    const handleTabClick = (tabIndex: number) => {
        setActiveTabIndex(tabIndex);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        
        if (propertyStatuses[activeTabIndex].value) {
            params.set('status', propertyStatuses[activeTabIndex].value);
        }
        
        if (searchText) {
            params.set('search', searchText);
        }
        
        if (selectedCategory && selectedCategory.value !== 0) {
            params.set('categoryId', selectedCategory.value.toString());
        }

        router.push(`/list?${params.toString()}`);
    };

    return(
        <div className="grid grid-cols-1">
            <ul className="inline-block sm:w-fit w-full flex-wrap justify-center text-center p-4 bg-white dark:bg-slate-900 rounded-t-xl border-b border-slate-100 dark:border-gray-800" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                {propertyStatuses.map((status, index) => (
                    <li key={status.value} role="presentation" className="inline-block">
                        <button 
                            onClick={() => handleTabClick(index)} 
                            className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === index ? 'text-white bg-green-600' : 'hover:text-green-600'}`}
                            type="button" 
                            role="tab"
                        >
                            {status.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 rounded-ss-none rounded-se-none md:rounded-se-xl rounded-xl shadow-md shadow-gray-200 dark:shadow-gray-700">
                <form onSubmit={handleSearch}>
                    <div className="registration-form text-dark text-start">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                            <div>
                                <label className="form-label text-slate-900 dark:text-white font-medium">{t('search.label')} <span className="text-red-600">*</span></label>
                                <div className="filter-search-form relative filter-border mt-2">
                                    <FiSearch className="icons" width={18}/>
                                    <input 
                                        name="search" 
                                        type="text" 
                                        className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" 
                                        placeholder={t('search.placeholder')}
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="form-label text-slate-900 dark:text-white font-medium">{t('category.label')}</label>                                                        
                                <div className="filter-search-form relative filter-border mt-2">
                                    <FiHome className="icons" width={18}/>
                                    <Select
                                        className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" 
                                        options={categories}
                                        value={selectedCategory}
                                        onChange={(newValue: SingleValue<CategoryOption>, actionMeta: ActionMeta<CategoryOption>) => setSelectedCategory(newValue)}
                                        placeholder={isLoading ? t('loading') : t('category.placeholder')}
                                        isDisabled={isLoading}
                                    />
                                    {error && (
                                        <div className="text-red-500 text-sm mt-1">{error}</div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="form-label text-slate-900 dark:text-white font-medium">{t('action.label')}</label>
                                <div className="filter-search-form relative filter-border mt-2">
                                    <button 
                                        type="submit" 
                                        className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded-md lg:rounded-none"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? t('loading') : t('action.search')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}