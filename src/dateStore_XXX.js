import { create } from 'zustand'

// todo - глобальное состояние даты

const dateStore = create((set) => ({
  endDate: 0,

  // todo - получить данные из селекта, отдать число для таймера
  getDateValue: (stringDate) => set((state) => (
    console.log('getDateValue func')
    // форматирование даты и её запись в стейт для передачи
    // if (stringDate) {
    //   console.log('stringDate => ', stringDate)
    //   set((state) => ({ endDate: 1}))
    // } else {
    //   console.log('empty')
    // }
  )),
}))

export default dateStore
