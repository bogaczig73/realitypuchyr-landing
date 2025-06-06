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
        this.apiClient = new ApiClient(locale);
    }

    async getAllBlogs(page: number = 1, limit: number = 10): Promise<BlogPost[]> {
        return this.apiClient.request<BlogPost[]>({
            method: 'GET',
            url: 'blogs',
            params: { page, limit }
        }, true);
    }

    async getBlogBySlug(slug: string): Promise<BlogPost> {
        return this.apiClient.request<BlogPost>({
            method: 'GET',
            url: `blogs/${slug}`
        }, true);
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