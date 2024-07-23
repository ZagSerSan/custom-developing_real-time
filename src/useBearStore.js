import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: '',
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  increasePopulation: (selectedDate) => set((state) => {
    console.log('selectedDate', selectedDate)
    return { bears: state.bears + 1 }
  }),
  // increasePopulation: (selectedDate) => set({ bears: selectedDate }),
  // removeAllBears: (selectedDate) => set({ bears: selectedDate }),
}))

export default useBearStore
