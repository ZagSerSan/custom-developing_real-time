export const validator = (value, type) => {
  if (type === 'day') {
    // для удаления первого символа
    if (String(value)=== '') return true
    // число ли, 2х-значное ли и не больше 31
    if (!Number(value)) return false
    if (String(value).length === 3) return false
    if (Number(value) > 31) return false
    // всё остальное true
    return true
  }
  if (type === 'month') {
    // для удаления первого символа
    if (String(value)=== '') return true
    // число ли, 2х-значное ли и не больше 12
    if (!Number(value)) return false
    if (String(value).length === 3) return false
    if (Number(value) > 12) return false
    // всё остальное true
    return true
  }
  if (type === 'year') {
    // для удаления первого символа
    if (String(value)=== '') return true
    // число ли, 2х-значное ли и не больше 12
    if (!Number(value)) return false
    if (String(value).length === 5) return false
    if (Number(value) > 2025) return false
    // всё остальное true
    return true
  }
}