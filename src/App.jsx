import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation(); // t — функция для получения перевода, i18n — для смены языка

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Смена языка
  };

  // welcome
  // description
  return (
    <>
      <div>
        <h1>{t('welcome')}</h1> {/* Перевод строки welcome */}
        <p>{t('description')}</p> {/* Перевод строки description */}

        {/* Кнопки для смены языка */}
        <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('ru')}>ru</button>
        <button onClick={() => changeLanguage('pl')}>pl</button>
      </div>
    </>
  )
}

export default App
