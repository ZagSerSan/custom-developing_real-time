import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const { i18n } = useTranslation(); // t — функция для получения перевода, i18n — для смены языка
  const { t } = useTranslation('header')

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Смена языка
  };

  return (
    <>
      <div>
        <h1>{t('mainNav_home')}</h1> {/* Перевод строки welcome */}

        {/* Кнопки для смены языка */}
        <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('ru')}>ru</button>
      </div>
    </>
  )
}

export default App
