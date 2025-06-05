import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  if (!locale) {
    return {
      messages: {},
      locale: 'en',
      timeZone: 'Europe/Prague',
      now: new Date()
    };
  }

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
    locale,
    timeZone: 'Europe/Prague',
    now: new Date()
  };
}); 