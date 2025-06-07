import { ApiClient } from './api-client';

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    phoneNumber?: string;
}

export class ContactFormService {
    private static instance: ContactFormService;
    private apiClient: ApiClient;

    private constructor() {
        this.apiClient = ApiClient.getInstance();
    }

    public static getInstance(): ContactFormService {
        if (!ContactFormService.instance) {
            ContactFormService.instance = new ContactFormService();
        }
        return ContactFormService.instance;
    }

    public async submitForm(data: ContactFormData): Promise<void> {
        return this.apiClient.request({
            method: 'POST',
            url: 'contactform',
            data
        });
    }
} 