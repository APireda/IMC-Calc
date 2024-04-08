export const alert = {
  alertError: document.querySelector('.alert-error'),

  open: () => {
    alert.alertError.classList.add('visible')
  },

  close: () => {
    alert.alertError.classList.remove('visible')
  }
}