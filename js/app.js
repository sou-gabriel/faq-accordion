const body = document.body
const accordion = document.querySelector('.accordion')
const inputTheme = document.querySelector('.theme__input')

const handleClickButton = event => {
  const clickedElement = event.target
  const isAButton = clickedElement.tagName === 'BUTTON'

  if (isAButton) {
    const buttonDataValue = clickedElement.dataset.button

    const accordionItem = document
      .querySelector(`[data-item="${buttonDataValue}"]`)

    accordionItem.classList.toggle('accordion__item--active')
  }
}

const handleChangeTheme = event => {
  const inputIsChecked = event.target.checked 
  
  inputIsChecked
    ? body.classList.add('dark') 
    : body.classList.remove('dark')
}

accordion.addEventListener('click', handleClickButton)
inputTheme.addEventListener('input', handleChangeTheme)