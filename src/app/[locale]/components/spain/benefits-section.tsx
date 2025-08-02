'use client'
import React from 'react';

interface BenefitsItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface BenefitsSectionProps {
    title: string;
    subtitle: string;
    items: BenefitsItem[];
}

export default function BenefitsSection({ title, subtitle, items }: BenefitsSectionProps) {
    return (
        <section className="relative lg:py-24 py-16">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-slate-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 