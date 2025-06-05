import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'cs' }];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
} 