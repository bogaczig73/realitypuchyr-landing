import { useParams } from 'next/navigation';
import { ApiClient } from '@/services/api-client';
import { useEffect } from 'react';

export function useApiClient() {
    const params = useParams();
    const locale = params?.locale as string || 'cs';
    const apiClient = ApiClient.getInstance();

    useEffect(() => {
        apiClient.setLocale(locale);
        apiClient.clearAllCache();
    }, [locale]);

    return apiClient;
} 