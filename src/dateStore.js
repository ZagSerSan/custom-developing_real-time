import { create } from 'zustand'

const dateStore = create((set) => ({
  endDate: '',

  setEndDate: (date) => set((state) => ({ endDate: Date.parse(date) }))

  // setEndDate: (date) => set((state) => {
  //   console.log('date', date)
  //   let parsedDate = 
  //   console.log('parsedDate :>> ', parsedDate)

  //   set((state) => ({ endDate: parsedDate }))
  // }),
}))

export default dateStore
