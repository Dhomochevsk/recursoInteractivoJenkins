// Obtener elementos
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');
const modalImage = document.querySelector('.modal-image');
const closeModalButton = document.querySelector('.close-modal');

// Mostrar modal
cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');
    const text = card.getAttribute('data-text');
    const image = card.getAttribute('data-image');
    
    modalTitle.textContent = title;
    modalText.textContent = text;
    modalImage.src = image;
    
    modal.style.display = 'flex';
  });
});

// Cerrar modal
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
