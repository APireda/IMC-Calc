import { modal, handleCloseModal } from './js/modal.js'
import { alert } from './js/alert.js'

const form = document.querySelector('form')
const inputWeight = document.getElementById('weight')
const inputHeight = document.getElementById('height')

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const imcCalc = (weight / height**2).toFixed(2)

  if(imcCalc === 'NaN') {
    alert.open()
    setTimeout(() => {
      alert.close()
    }, 3000)
  } else {
    modal.imcResult.textContent = `Seu IMC é de ${imcCalc}`
    modal.open()
  }
}

modal.imcModalCloseButton.addEventListener('click', handleCloseModal)