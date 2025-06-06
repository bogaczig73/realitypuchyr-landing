export interface Blog {
    id: number;
    name: string;
    slug: string;
    content: string;
    tags: string[];
    date: string;
    pictures: string[];
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
    language: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateBlogDto {
    name: string;
    slug: string;
    content: string;
    tags: string[];
    pictures: string[];
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
    language?: string;
}

export interface UpdateBlogDto extends Partial<CreateBlogDto> {
    id: number;
}

export interface PaginatedBlogResponse {
    data: Blog[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface BlogList{
    id: number;
    title: string;
    date: string;
    type: string;
    image: string;
}
