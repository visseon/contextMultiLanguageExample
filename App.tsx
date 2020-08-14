import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { TranslationsProvider } from 'context-multi-language';
import Login from './Login';

// You can use remoteTranslationsUrl or translations.

// remoteTranslations
const remoteTranslationsUrl = 'https://raw.githubusercontent.com/burhanyilmaz/translations/master/locales.json';

// localeTranslations
const translations = {
  languages: ['tr', 'en'],
  translations: {
    en: {
      password: 'Password',
      phoneNumber: 'Phone Number',
      signIn: 'Sign in!',
    },
    tr: {
      password: 'Şifre',
      phoneNumber: 'Telefon Numarası',
      signIn: 'Giriş Yap!',
    },
  },
};

const App = () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <TranslationsProvider defaultLocale="ja" remoteTranslationsUrl={remoteTranslationsUrl}>
      <Login />
    </TranslationsProvider>
  </ApplicationProvider>
);

export default App;
