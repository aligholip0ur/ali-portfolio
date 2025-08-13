import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const supported = ['en', 'fa'] as const;
  const active = supported.includes(locale as any) ? (locale as 'en' | 'fa') : 'en';

  return {
    locale: active,
    messages: (await import(`../messages/${active}.json`)).default
  } as const;
});


