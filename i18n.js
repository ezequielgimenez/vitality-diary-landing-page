import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_es from "./public/locales/es/common.json";
import common_en from "./public/locales/en/common.json";

i18n
  .use(initReactI18next) // Integración con react-i18next
  .init({
    resources: {
      es: { common: common_es },
      en: { common: common_en },
    },
    lng: "es", // Idioma por defecto
    fallbackLng: "es", // Idioma de respaldo
    interpolation: {
      escapeValue: false, // react ya protege contra XSS
    },
  });

export default i18n;
