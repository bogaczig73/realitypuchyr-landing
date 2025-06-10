'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { ApiClient } from '@/services/api-client';
import { useTranslations } from 'next-intl';

const CountUp = dynamic(() => import('react-countup'), {
  ssr: false,
  loading: () => <span className="animate-pulse">...</span>
});

interface Stats {
    activeProperties: number;
    soldProperties: number;
    yearsOfExperience: number;
}

export default function CounterSection() {
    const t = useTranslations('components.counterSection');
    const [stats, setStats] = useState<Stats>({
        activeProperties: 0,
        soldProperties: 0,
        yearsOfExperience: new Date().getFullYear() - 2019
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const apiClient = ApiClient.getInstance();
                const data = await apiClient.getPropertyStats();
                setStats(data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, []);

    const counterData = [
        {
            title: t('activeProperties'),
            target: stats.activeProperties
        },
        {
            title: t('soldProperties'),
            target: stats.soldProperties
        },
        {
            title: t('yearsOfExperience'),
            target: stats.yearsOfExperience
        }
    ];

    return (
        <section
            style={{ backgroundImage: "url('/images/bg/bg3.webp')" }}
            className="relative py-24 bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="absolute inset-0 bg-slate-900/60"></div>
            <div className="container relative">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                    <div className="lg:col-start-2 lg:col-span-10">
                        <div className="grid md:grid-cols-3 grid-cols-1 items-center">
                            {counterData.map((item, index) => (
                                <div className="counter-box text-center" key={index}>
                                    <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                                        {isLoading ? (
                                            <span className="animate-pulse">...</span>
                                        ) : (
                                            <>
                                                <CountUp
                                                    start={0}
                                                    end={item.target}
                                                    duration={2.5}
                                                    className="counter-value"
                                                />
                                                {item.title === t('yearsOfExperience') ? "+" : ""}
                                            </>
                                        )}
                                    </h1>
                                    <h5 className="counter-head text-white text-lg font-medium">{item.title}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}