import { ApiClient } from './api-client';

export interface BlogPost {
    id: number;
    name: string;
    slug: string;
    content: string;
    tags: string[];
    date: string;
    pictures: string[];
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    language: string;
    createdAt: string;
    updatedAt: string;
}

export class BlogService {
    private apiClient: ApiClient;

    constructor(locale: string = 'cs') {
        this.apiClient = ApiClient.getInstance(locale);
    }

    async getAllBlogs(page: number = 1, limit: number = 10): Promise<BlogPost[]> {
        try {
            const response = await this.apiClient.request<BlogPost[]>({
                method: 'GET',
                url: 'blogs',
                params: { page, limit }
            });
            return response;
        } catch (error) {
            console.error('Error fetching blogs:', error);
            throw error;
        }
    }

    async getBlogBySlug(slug: string): Promise<BlogPost> {
        try {
            const response = await this.apiClient.request<BlogPost>({
                method: 'GET',
                url: `blogs/${slug}`
            });
            return response;
        } catch (error) {
            console.error('Error fetching blog:', error);
            throw error;
        }
    }

    async createBlog(blog: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<BlogPost> {
        return this.apiClient.request<BlogPost>({
            method: 'POST',
            url: 'blogs',
            data: blog
        });
    }

    async updateBlog(id: number, blog: Partial<BlogPost>): Promise<BlogPost> {
        return this.apiClient.request<BlogPost>({
            method: 'PUT',
            url: `blogs/${id}`,
            data: blog
        });
    }

    async deleteBlog(id: number): Promise<void> {
        return this.apiClient.request<void>({
            method: 'DELETE',
            url: `blogs/${id}`
        });
    }
} 