export interface Language {
    code: string;
    label: string;
    flag: string;
}

export const languages: Language[] = [
    { code: 'en', label: 'English', flag: '/images/flags/en.png' },
    { code: 'cs', label: 'Čeština', flag: '/images/flags/cs.png' },
    { code: 'de', label: 'Deutsch', flag: '/images/flags/de.png' },
    { code: 'ru', label: 'Русский', flag: '/images/flags/ru.png' },
    { code: 'uk', label: 'Українська', flag: '/images/flags/ua.png' }
]; 