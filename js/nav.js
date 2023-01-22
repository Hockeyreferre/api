const navbarToggle = navbar.querySelector('#navbar-toggle');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};

navbarToggle.addEventListener('click', toggleNavbarVisibility);



const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.querySelector(img.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach(img => {
    img.addEventListener('click', () => {
        const modal = img.closest('.modal');
        removeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        removeModal(modal);
    })
})

function openModal(modal) {
    if(modal === null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function removeModal(modal) {
    if(modal === null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}