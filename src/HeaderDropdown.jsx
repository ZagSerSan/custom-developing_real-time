import { useState } from "react"

export default function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Элемент, на который наводимся */}
      <button>Меню</button>

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
