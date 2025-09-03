'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { useTranslations } from 'next-intl';
import { ContactFormService } from '../../../services/contact-form';

interface GetInTuchProps {
    prefilledSubject?: string;
    id?: string;
}

export default function GetInTuch({ prefilledSubject, id }: GetInTuchProps) {
    const t = useTranslations('components.getInTouch');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: prefilledSubject || '',
        message: '',
        phoneNumber: ''
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    // Expose a method to update subject globally
    useEffect(() => {
        (window as any).updateContactSubject = (subject: string) => {
            setFormData(prev => ({ ...prev, subject }));
        };
        
        return () => {
            delete (window as any).updateContactSubject;
        };
    }, []);

    // Update subject when prefilledSubject prop changes
    useEffect(() => {
        if (prefilledSubject) {
            setFormData(prev => ({ ...prev, subject: prefilledSubject }));
        }
    }, [prefilledSubject]);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: null, message: '' });

        try {
            const contactFormService = ContactFormService.getInstance();
            await contactFormService.submitForm(formData);
            
            setStatus({ type: 'success', message: t('successMessage') });
            setFormData({ name: '', email: '', subject: '', message: '', phoneNumber: '' });
        } catch (error) {
            setStatus({ 
                type: 'error', 
                message: error instanceof Error ? error.message : t('errorMessage') 
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id={id || 'contact'} className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800">
            <div className="container">
                    <h2 className="text-4xl font-bold mb-8 text-center">{t('doYouWantToKnowMore')}</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-4xl font-bold mb-8">{t('contactMe')}</h3>
                        <p className="text-lg text-slate-600 mb-8">
                            {t('contactDescription')}
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <FiPhone className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">{t('phone')}</h4>
                                    <a 
                                        href="tel:+420733781696" 
                                        className="text-slate-600 hover:text-green-600 transition-colors"
                                    >
                                        +420 733 781 696
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <FiMail className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">{t('email')}</h4>
                                    <a 
                                        href="mailto:pavel.puchyr@bcas.cz" 
                                        className="text-slate-600 hover:text-green-600 transition-colors"
                                    >
                                        pavel.puchyr@bcas.cz
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <FiMapPin className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">{t('office')}</h4>
                                    <p className="text-slate-600">{t('officeLocation')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
                        <h4 className="text-2xl font-bold mb-6">{t('writeToMe')}</h4>
                        
                        <form onSubmit={handleSubmit}>
                            {status.type && (
                                <div className={`p-4 mb-6 rounded-md ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {status.message}
                                </div>
                            )}
                            
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">{t('nameLabel')}</label>
                                    <input 
                                        name="name" 
                                        id="name" 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                                        placeholder={t('namePlaceholder')}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">{t('emailLabel')}</label>
                                    <input 
                                        name="email" 
                                        id="email" 
                                        type="email" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                                        placeholder={t('emailPlaceholder')}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">{t('phoneLabel')}</label>
                                    <input 
                                        name="phoneNumber" 
                                        id="phoneNumber" 
                                        type="tel" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                                        placeholder={t('phonePlaceholder')}
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">{t('subjectLabel')}</label>
                                    <input 
                                        name="subject" 
                                        id="subject" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                                        placeholder={t('subjectPlaceholder')}
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">{t('messageLabel')}</label>
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                                        placeholder={t('messagePlaceholder')}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full btn bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 flex items-center justify-center gap-2"
                                >
                                    <FiSend className="text-lg" />
                                    {t('sendMessage')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}