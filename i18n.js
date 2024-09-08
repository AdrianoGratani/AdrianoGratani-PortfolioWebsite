import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpApi) // Permette il caricamento delle traduzioni da file esterni
  .use(LanguageDetector) // Rileva la lingua del browser
  .use(initReactI18next) // Inizializza i18next per React
  .init({
    supportedLngs: ['en', 'ko'], // Lingue supportate
    fallbackLng: 'en', // Lingua di fallback
    debug: true, // Debug, mettilo a false in produzione
    interpolation: {
      escapeValue: false, // React già gestisce la sicurezza
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Percorso dei file JSON delle traduzioni
    },
  });

export default i18n;
