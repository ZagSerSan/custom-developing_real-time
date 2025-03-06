import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Импортируем переводимые файлы
import en from '../locales/en.json'
import ru from '../locales/ru.json'
import pl from '../locales/pl.json'

i18n
  .use(initReactI18next) // Подключаем React-обертку для i18next
  .init({
    resources: {
      en: { translation: en }, // перевод на английский
      ru: { translation: ru }, // перевод на русский
      pl: { translation: pl }, // перевод на русский
    },
    lng: 'en', // язык по умолчанию
    fallbackLng: 'en', // язык, на который будет происходить переключение в случае отсутствия перевода
    interpolation: {
      escapeValue: false, // не экранировать значения
    },
  })

export default i18n
