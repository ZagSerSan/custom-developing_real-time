// scroll to page id
const headerNav = document.querySelector('.header-nav')

headerNav.addEventListener('click', ({target}) => {
  if (target.dataset.scroll) {
    console.log(target.dataset.scroll)
    // todo -> scroll to page id
  } else {}
})

// dropdown
const dropdownInner = document.querySelector('.dropdown-inner')
headerNav.addEventListener('mouseover', ({target}) => {
  let type = target.dataset.drop
  if (type === 'btn' || type === 'menu' || type === 'link') {
    dropdownInner.classList.add('show')
    document.querySelector('svg[data-drop]').classList.add('active')
  }
})
headerNav.addEventListener('mouseout', ({target}) => {
  let type = target.dataset.drop
  if (type === 'btn' || type === 'menu') {
    dropdownInner.classList.remove('show')
    document.querySelector('svg[data-drop]').classList.remove('active')
  }
})

// search
const search = document.querySelector('.search')
const searchBtn_open = document.querySelector('.search-btn-open')
const searchBtn_close = document.querySelector('.search-btn-close')
const searchMenu = document.querySelector('.search-menu')
const searchInput = document.querySelector('.search-input')

search.addEventListener('click', ({target}) => {
  console.log(target.dataset.search)

  if (target.dataset.search === 'open') {
    searchMenu.classList.add('show')
    searchBtn_open.classList.remove('show')
    searchBtn_close.classList.add('show')
    searchInput.focus()
  } else if (target.dataset.search === 'close') {
    searchMenu.classList.remove('show')
    searchBtn_close.classList.remove('show')
    searchBtn_open.classList.add('show')
  }

  setTimeout(() => {
    searchMenu.classList.remove('show')
    searchBtn_close.classList.remove('show')
    searchBtn_open.classList.add('show')
  }, 10000);
})

// const el_h1 = document.querySelector('h1')
// const initState = {
//   title: el_h1.innerText
// }

// function counter(element) {
//   let counter = 0
//   const state = {
//     title: initState.title
//   }

//   const setCounter = (count) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//     state.title = initState.title  + (counter ? ` ${counter}` : '')
//   }
  
//   element.addEventListener('click', () => {
//     setCounter(counter + 1)
//     element.classList.toggle('width')

//     el_h1.innerHTML = state.title
//   })
//   setCounter(0)
// }

// counter(document.querySelector('#btn'))
