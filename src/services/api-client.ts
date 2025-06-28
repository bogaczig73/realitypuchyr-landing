import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Property, PaginatedResponse } from '../types/property';

interface ErrorResponse {
    message?: string;
    [key: string]: any;
}

export class ApiError extends Error {
    constructor(
        message: string,
        public status?: number,
        public code?: string,
        public data?: any
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

export class ApiClient {
    private static instance: ApiClient;
    private api: AxiosInstance;
    private locale: string;

    private constructor(locale: string = 'cs') {
        this.locale = locale;
        
        const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
        
        this.api = axios.create({
            baseURL: `${baseURL}/${this.locale}`,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
            },
        });

        this.setupInterceptors();
    }

    public static getInstance(locale?: string): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient(locale);
        } else if (locale && ApiClient.instance.locale !== locale) {
            // Update locale if it's different from the current instance
            ApiClient.instance.setLocale(locale);
        }
        return ApiClient.instance;
    }

    public setLocale(locale: string) {
        this.locale = locale;
        const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
        this.api.defaults.baseURL = `${baseURL}/${this.locale}`;
    }

    public getLocale(): string {
        return this.locale;
    }

    private setupInterceptors() {
        this.api.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                console.error('Request Error:', error);
                return Promise.reject(new ApiError('Request failed'));
            }
        );

        this.api.interceptors.response.use(
            (response) => response,
            (error: AxiosError<ErrorResponse>) => {
                if (error.response) {
                    throw new ApiError(
                        error.response.data?.message || 'API request failed',
                        error.response.status,
                        error.code,
                        error.response.data
                    );
                }
                throw new ApiError('Network error');
            }
        );
    }

    public async request<T>(config: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.api.request<T>(config);
            return response.data;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError('Unknown error occurred');
        }
    }

    // Property API methods
    public async getProperties(params: {
        page?: number;
        limit?: number;
        search?: string;
        status?: string;
        categoryId?: string;
    }): Promise<PaginatedResponse> {
        return this.request<PaginatedResponse>({
            method: 'GET',
            url: 'properties',
            params
        });
    }

    public async getPropertyById(id: number): Promise<Property> {
        return this.request<Property>({
            method: 'GET',
            url: `properties/${id}`
        });
    }

    // Category API methods
    public async getCategories(): Promise<any[]> {
        return this.request<any[]>({
            method: 'GET',
            url: 'categories'
        });
    }

    public async getCategoryStats(): Promise<any[]> {
        return this.request<any[]>({
            method: 'GET',
            url: 'properties/category-stats'
        });
    }

    public async getPropertyStats(): Promise<{
        activeProperties: number;
        soldProperties: number;
        yearsOfExperience: number;
    }> {
        return this.request({
            method: 'GET',
            url: 'properties/stats'
        });
    }

    // Video Tours API method
    public async getVideoTours(): Promise<any[]> {
        return this.request<any[]>({
            method: 'GET',
            url: 'properties/video-tours'
        });
    }
} 