import i18n from "i18next";
import detector from "i18next-browser-languagedetector";

import { reactI18nextModule } from "react-i18next";

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(detector)
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: "en",
    fallbackLng: "en", // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    debug:true,
    // detection: options,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
    
  });
 


export default i18n;