export const modal = {
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
 
export const handleCloseModal = () => {
  modal.close()
}

const handleKeyDown = (event) => {
  if(event.key === 'Escape') {
    modal.close()
  }
}

window.addEventListener('keydown', handleKeyDown)