import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import QueryProvider from '@/providers/QueryProvider';

type LayoutParams = Promise<{ locale: string }>;

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'cs' }, { locale: 'de' }, { locale: 'ru' }, { locale: 'uk' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LayoutParams;
}) {
  const { locale } = await params;
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