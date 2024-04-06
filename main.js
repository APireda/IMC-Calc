const form = document.querySelector('form')
const inputWeight = document.getElementById('weight')
const inputHeight = document.getElementById('height')

const modal = {
  imcModal: document.querySelector('.modal-wrapper'),
  
  imcResult: document.querySelector('h2'),
  
  imcModalCloseButton: document.getElementById('close-modal'),
  
  open: () => {
    modal.imcModal.classList.add('visible')
  },
  
  close: () => {
    modal.imcModal.classList.remove('visible')
  }
}

const handleCloseModal = () => {
  modal.close()
}

const alert = {
  alertError: document.querySelector('.alert-error'),

  open: () => {
    alert.alertError.classList.add('visible')
  },

  close: () => {
    alert.alertError.classList.remove('visible')
  }
}

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const imcCalc = (weight / height**2).toFixed(2)

  if(imcCalc === 'NaN') {
    alert.open()
    setTimeout(() => {
      alert.close()
    }, 5000)
  } else {
    modal.imcResult.textContent = `Seu IMC é de ${imcCalc}`
    modal.open()
  }
}

modal.imcModalCloseButton.addEventListener('click', handleCloseModal)