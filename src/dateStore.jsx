import { create } from 'zustand'

// todo - глобальное состояние даты

const dateStore = create((set) => ({
  endDate: 0,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}))