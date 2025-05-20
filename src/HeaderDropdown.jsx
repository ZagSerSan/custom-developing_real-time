import { useState } from "react"

export default function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  // Закрытие по повторному клику
  const handleClick = () => setIsOpen((prev) => !prev)

  return (
    <div
      onMouseEnter={() => setIsOpen(true)} // Наведение (десктоп)
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Кнопка открытия — работает и по клику */}
      <button onClick={handleClick}>Меню</button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div>
          <a href="/profile">Профиль</a>
          <a href="/settings">Настройки</a>
          <button>Выйти</button>
        </div>
      )}
    </div>
  )
}
