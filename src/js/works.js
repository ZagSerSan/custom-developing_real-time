import { photos } from './../assets/img/works'
import Masonry from 'masonry-layout'

const grid = document.querySelector('.grid');

const gridItem = (src) => {
  const gridItem_el = document.createElement('div')
  gridItem_el.className = 'grid-item'
  gridItem_el.innerHTML = `
    <img src="${src}" alt="work photo">
  `
  return gridItem_el
}

photos.forEach(photo => {
  grid.append(gridItem(photo))
})

const msnry = new Masonry( grid, {
  // options...
  itemSelector: '.grid-item',
  columnWidth: 0
});

//? Lays out all item elements. layout is useful when an item has changed size, and all items need to be laid out again.
setTimeout(() => {
  msnry.layout()
}, 10);
