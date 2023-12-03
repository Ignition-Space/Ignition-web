import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n
.use(initReactI18next)
.init({
  resources: {
    en: {
      translation: {
        "hello": "Hello",
        "welcome": "Welcome to my app!"
      }
    },
    zh: {
      translation: {
        "hello": "你好",
        "welcome": "欢迎来到我的应用！"
      }
    }
  },
  lng: 'zh',
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false
  }
});

export default i18n