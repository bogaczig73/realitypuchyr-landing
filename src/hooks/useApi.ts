import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ApiClient } from '@/services/api-client';
import { Property, PaginatedResponse } from '@/types/property';

// Custom hook for getting properties with pagination
export function useProperties(params: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    categoryId?: string;
}) {
    const apiClient = ApiClient.getInstance();

    return useQuery({
        queryKey: ['properties', params],
        queryFn: () => apiClient.getProperties(params),
        placeholderData: (previousData) => previousData,
    });
}

// Custom hook for getting a single property
export function useProperty(id: number) {
    const apiClient = ApiClient.getInstance();

    return useQuery({
        queryKey: ['property', id],
        queryFn: () => apiClient.getPropertyById(id),
        enabled: !!id,
    });
}

// Custom hook for getting categories
export function useCategories() {
    const apiClient = ApiClient.getInstance();

    return useQuery({
        queryKey: ['categories'],
        queryFn: () => apiClient.getCategories(),
    });
}

// Custom hook for getting category stats
export function useCategoryStats() {
    const apiClient = ApiClient.getInstance();

    return useQuery({
        queryKey: ['categoryStats'],
        queryFn: () => apiClient.getCategoryStats(),
    });
}

// Example of a mutation hook (if you need to add/update properties)
export function useUpdateProperty() {
    const apiClient = ApiClient.getInstance();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (property: Partial<Property>) => {
            // Implement your update logic here
            return Promise.resolve(property);
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['properties'] });
        },
    });
} 