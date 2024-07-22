import { create } from 'zustand'

// todo - глобальное состояние даты

const dateStore = create((set) => ({
  endDate: 0,

  // todo - получить данные из селекта, отдать число для таймера
  getDateValue: (stringDate) => set((state) => {
    // форматирование даты и её запись в стейт для передачи
    if (stringDate) {
      console.log('stringDate => ', stringDate)
    } else {
      console.log('empty')
    }
    // set((state) => ({ endDate: 1}))
  }),
}))

export default dateStore

// удаление продукта
// removeProduct: (productId) => set(async (state) => {
//   try {
//     const { data } = await ProductService.deleteProduct(productId)
//     const updatedArray = state.productsEntity.filter(product => product._id !== productId)
//     set((state) => ({ productsEntity: updatedArray}))
//     toast.success("User has been removed!")
//   } catch (error) {
//     errorCatcher(error)
//   }
// }),
