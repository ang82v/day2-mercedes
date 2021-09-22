const featureLink = document.querySelectorAll('.feature__link')
const list = document.querySelectorAll('.feature-sub')

console.log(featureLink)

// for (let i = 0; i < featureLink.length; i++) {
//   featureLink[i].addEventListener('click', () => console.log(featureLink[i]))
// }

featureLink.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
    featureLink.forEach((btnItem) => {
      btnItem.classList.remove('feature__link_active')
    })

    btnItem.classList.add('feature__link_active')

    list.forEach(listItem => {
      listItem.classList.add('hidden')
    })

    list[index].classList.remove('hidden')
  })
})


