import { ApiClient } from './api-client';
import { Property, PaginatedResponse } from '../types/property';

export interface Review {
    id: number;
    name: string;
    description: string;
    rating: number;
    createdAt: string;
}

// Create API client instance
const apiClient = ApiClient.getInstance();

export const propertyApi = {
    getAll: async (page = 1, limit = 12, search = '', status?: string, categoryId?: string): Promise<PaginatedResponse> => {
        try {
            return await apiClient.getProperties({ page, limit, search, status, categoryId });
        } catch (error) {
            console.error('Error fetching properties:', error);
            throw new Error('Failed to fetch properties. Please try again later.');
        }
    },

    getById: async (id: number): Promise<Property> => {
        try {
            return await apiClient.getPropertyById(id);
        } catch (error) {
            console.error('Error fetching property:', error);
            throw new Error('Failed to fetch property details. Please try again later.');
        }
    }
};

export const reviewsApi = {
    getAll: async (): Promise<Review[]> => {
        try {
            return await apiClient.request<Review[]>({
                method: 'GET',
                url: 'reviews'
            });
        } catch (error) {
            console.error('Error fetching reviews:', error);
            throw new Error('Failed to fetch reviews. Please try again later.');
        }
    }
}; 