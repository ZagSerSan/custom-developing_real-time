import { create } from 'zustand'

const dateStore = create((set) => ({
  endDate: 0,

  setEndDate: (date) => set((state) => ({ endDate: Date.parse(date) })),
  resetEndDate: () => set((state) => ({ endDate: 0 }))

  // setEndDate: (date) => set((state) => {
  //   console.log('date', date)
  //   let parsedDate = 
  //   console.log('parsedDate :>> ', parsedDate)

  //   set((state) => ({ endDate: parsedDate }))
  // }),
}))

export default dateStore
