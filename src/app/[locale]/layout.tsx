import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import QueryProvider from '@/providers/QueryProvider';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'cs' }];
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <QueryProvider>
        {children}
      </QueryProvider>
    </NextIntlClientProvider>
  );
} 