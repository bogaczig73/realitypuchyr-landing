export interface Blog {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    image: string;
    date: string;
    type: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateBlogDto {
    title: string;
    content: string;
    excerpt: string;
    image: string;
    type: string;
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
