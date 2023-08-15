const el_h1 = document.querySelector('h1')
const initState = el_h1.innerText

function counter(element) {
  let counter = 0

  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  
  element.addEventListener('click', () => {
    setCounter(counter + 1)
    el_h1.innerHTML = initState + ` ${counter}`
  })
  setCounter(0)
}

counter(document.querySelector('#btn'))
