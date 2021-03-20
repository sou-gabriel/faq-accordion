const body = document.body
const accordion = document.querySelector('.accordion')
const inputTheme = document.querySelector('.theme__input')

accordion.addEventListener('click', event => {
  const clickedElement = event.target

  if (clickedElement.tagName === 'BUTTON') {
    const accordionItem = document.querySelector(`[data-item="${clickedElement.dataset.button}"]`)

    accordionItem.classList.toggle('accordion__item--active')
  }
})

inputTheme.addEventListener('input', (event) => {
  const inputIsChecked = event.target.checked 

  if (inputIsChecked) {
    body.classList.add('dark')
    return
  }

  body.classList.remove('dark')
})