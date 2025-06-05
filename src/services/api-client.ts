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
    private cache: Map<string, { data: any; timestamp: number }>;
    private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes
    private locale: string;

    private constructor(locale: string = 'cs') {
        this.locale = locale;
        this.cache = new Map();
        this.api = axios.create({
            baseURL: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'}/${this.locale}`,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        this.setupInterceptors();
    }

    public static getInstance(locale?: string): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient(locale);
        } else if (locale && ApiClient.instance.locale !== locale) {
            ApiClient.instance.setLocale(locale);
        }
        return ApiClient.instance;
    }

    public setLocale(locale: string) {
        this.locale = locale;
        this.api.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'}/${locale}`;
    }

    public getLocale(): string {
        return this.locale;
    }

    private setupInterceptors() {
        // Request interceptor
        this.api.interceptors.request.use(
            (config) => {
                // Add auth token if available
                const token = localStorage.getItem('auth_token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                console.error('Request Error:', error);
                return Promise.reject(new ApiError('Request failed'));
            }
        );

        // Response interceptor
        this.api.interceptors.response.use(
            (response) => response,
            (error: AxiosError) => {
                if (error.code === 'ECONNABORTED') {
                    return Promise.reject(new ApiError('Request timeout'));
                }

                if (!error.response) {
                    return Promise.reject(new ApiError('Network error'));
                }

                const status = error.response.status;
                const data = error.response.data as ErrorResponse;

                return Promise.reject(new ApiError(
                    data?.message || 'An error occurred',
                    status,
                    error.code,
                    data
                ));
            }
        );
    }

    private getCacheKey(config: AxiosRequestConfig): string {
        return `${config.method}-${config.url}-${JSON.stringify(config.params)}`;
    }

    private async request<T>(config: AxiosRequestConfig, useCache = false): Promise<T> {
        if (useCache) {
            const cacheKey = this.getCacheKey(config);
            const cached = this.cache.get(cacheKey);
            
            if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
                return cached.data;
            }
        }

        try {
            const response = await this.api.request<T>(config);
            
            if (useCache) {
                const cacheKey = this.getCacheKey(config);
                this.cache.set(cacheKey, {
                    data: response.data,
                    timestamp: Date.now()
                });
            }

            return response.data;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError('Request failed');
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
        }, true); // Enable caching for property list
    }

    public async getPropertyById(id: number): Promise<Property> {
        return this.request<Property>({
            method: 'GET',
            url: `properties/${id}`
        }, true); // Enable caching for property details
    }

    // Category API methods
    public async getCategories(): Promise<any[]> {
        return this.request<any[]>({
            method: 'GET',
            url: 'categories'
        }, true); // Enable caching for categories
    }

    public async getCategoryStats(): Promise<any[]> {
        return this.request<any[]>({
            method: 'GET',
            url: 'properties/category-stats'
        }, true); // Enable caching for category stats
    }

    // Clear cache for specific endpoint
    public clearCache(endpoint: string) {
        for (const [key] of this.cache) {
            if (key.includes(endpoint)) {
                this.cache.delete(key);
            }
        }
    }

    // Clear all cache
    public clearAllCache() {
        this.cache.clear();
    }
} 