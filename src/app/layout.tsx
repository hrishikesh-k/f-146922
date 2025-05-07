import { cookies } from 'next/headers';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import React from 'react';

import Footer from '@/components/Shared/PageStructure/Footer';
import Header from '@/components/Shared/PageStructure/Header';
import { routing } from '@/i18n/routing';

import nextIntlConfig from '../../next-intl.config';

import './globals.scss';

async function getThemeFromHeaders() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value;
  return theme === 'dark' ? 'dark' : 'light';
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const theme = await getThemeFromHeaders();
  const { locale } = await params;
  let newLocale = nextIntlConfig.defaultLocale;
  if (hasLocale(routing.locales, locale)) {
    newLocale = locale;
  }

  return (
    <html lang={newLocale} data-theme={theme} className={theme}>
      <head>
        <title>Lucas Mendonça Portfolio</title>
        <meta name="description" content="My Front-End developer portfolio and info" />
      </head>
      <body className="bg-primary min-h-dvh">
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
