const el_h1 = document.querySelector('h1')
const initState = {
  title: el_h1.innerText
}

function counter(element) {
  let counter = 0
  const state = {
    title: initState.title
  }

  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    state.title = initState.title  + (counter ? ` ${counter}` : '')
  }
  
  element.addEventListener('click', () => {
    setCounter(counter + 1)
    element.classList.toggle('width')

    el_h1.innerHTML = state.title
  })
  setCounter(0)
}

counter(document.querySelector('#btn'))
