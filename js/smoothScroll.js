const linksHead = document.querySelectorAll('.menu-list__link')
const mainScrolld = document.querySelector('.main__scroll')

const newArr = [...linksHead, mainScrolld]
newArr.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const idBlock = e.target.getAttribute('href').substr(1)

    document.getElementById(idBlock).scrollIntoView({
      behavior: "smooth",
      block: 'start'
    })
  })
})