const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')
const menuList = document.querySelectorAll('.menu-list__link')

console.log(menuList.length)
const toogleMenu = () => {
  menuElem.classList.toggle('menu-active')
  burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toogleMenu())

menuList.forEach(item => {
  item.addEventListener('click', event => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
  })
})