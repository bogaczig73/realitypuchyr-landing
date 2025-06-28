import { useParams } from 'next/navigation';
import { ApiClient } from '@/services/api-client';

export function useApiClient() {
    const params = useParams();
    const locale = params?.locale as string || 'cs';
    const apiClient = ApiClient.getInstance(locale);

    return apiClient;
} 