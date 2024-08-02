export const arrayFromNum = (num) => {
  let array = []

  for (let i = 1; i < num + 1; i++) {
    array.push(String(i))
  }

  return array
}
