import { create } from 'zustand'

const dateStore = create((set) => ({
  endDate: '',

  // setEndDate: (selectedDate) => set((state) => ({ endDate: selectedDate }))

  setEndDate: (selectedDate) => set((state) => {
    console.log('selectedDate', selectedDate)
    set((state) => ({ endDate: selectedDate }))
  }),
}))

export default dateStore
