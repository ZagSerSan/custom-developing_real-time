import { create } from 'zustand'

const dateStore = create((set) => ({
  endDate: '',

  setEndDate: (selectedDate) => set((state) => {
    console.log('selectedDate', selectedDate)
    return { endDate: selectedDate }
  }),
}))

export default dateStore
