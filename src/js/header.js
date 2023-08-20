// scroll to page id ========================================================
const header = document.querySelector('.header')
const headerNav = document.querySelector('.header-nav')
const intro = document.querySelector('.intro')
const about = document.querySelector('.about')
const works = document.querySelector('.works')
const footer = document.querySelector('.footer')

let introOffset

header.addEventListener('click', (event) => {
  event.preventDefault()
  const {target} = event

  if (target.dataset.scroll) {
    if (target.dataset.scroll === 'logo') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      const sectionId = target.dataset.scroll
      const element = document.querySelector(`#${sectionId}`)
      let offsetTop = element.getBoundingClientRect().top + document.body.scrollTop

      window.scrollBy({
        top: Math.trunc(offsetTop) - 60,
        behavior: 'smooth'
      })
    }
  }
})

setTimeout(() => {
  introOffset = (intro.offsetTop + intro.clientHeight) - 350
}, 100)

window.addEventListener('scroll', () => {
  let windowScrollY = Math.trunc(window.scrollY)

  // fixed header
  if (windowScrollY > introOffset) {
    header.classList.add('fixed')
  } else {
    header.classList.remove('fixed')
  }

  // active link by scroll
  if (
    windowScrollY > about.offsetTop - 150
    && windowScrollY < (about.offsetTop + (about.clientHeight - 300))
  ) {
    headerNav.querySelector('[data-scroll="about"]').classList.add('active')
    headerNav.querySelector('[data-scroll="works"]').classList.remove('active')
    headerNav.querySelector('[data-scroll="footer"]').classList.remove('active')
  } else if (
    windowScrollY > works.offsetTop - 150
    && windowScrollY < (works.offsetTop + 950)
  ) {
    headerNav.querySelector('[data-scroll="works"]').classList.add('active')
    headerNav.querySelector('[data-scroll="about"]').classList.remove('active')
    headerNav.querySelector('[data-scroll="footer"]').classList.remove('active')
  } else if (windowScrollY > (works.offsetTop + 950)) {
    headerNav.querySelector('[data-scroll="footer"]').classList.add('active')
    headerNav.querySelector('[data-scroll="works"]').classList.remove('active')
    headerNav.querySelector('[data-scroll="about"]').classList.remove('active')
  } else {
    headerNav.querySelector('[data-scroll="footer"]').classList.remove('active')
    headerNav.querySelector('[data-scroll="works"]').classList.remove('active')
    headerNav.querySelector('[data-scroll="about"]').classList.remove('active')
  }
})

// dropdown ========================================================

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

// search ========================================================

const search = document.querySelector('.search')
const searchBtn_open = document.querySelector('.search-btn-open')
const searchBtn_close = document.querySelector('.search-btn-close')
const searchMenu = document.querySelector('.search-menu')
const searchInput = document.querySelector('.search-input')

search.addEventListener('click', ({target}) => {
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
  }, 10000)
})
