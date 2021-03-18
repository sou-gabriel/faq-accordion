const accordion = document.querySelector('.accordion')

accordion.addEventListener('click', event => {
  const clickedElement = event.target

  if (clickedElement.tagName === 'BUTTON') {
    const accordionItem = document.querySelector(`[data-item="${clickedElement.dataset.button}"]`)

    accordionItem.classList.toggle('accordion__item--active')
  }
})