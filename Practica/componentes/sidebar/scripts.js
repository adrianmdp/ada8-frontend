/**
 * Sidebar
 */
const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
const sidebar = document.getElementById('sidebar');

const toggleSidebar = () => {

    sidebar.classList.toggle('show');

}

btnToggleSidebar.addEventListener('click', toggleSidebar);

/**
 * Sidebar Caso 2
 */
const sidebarOpen = () => {

    sidebar.classList.add('show');

}

const sidebarClose = () => {

    sidebar.classList.remove('show');

}

btnToggleSidebar.addEventListener('click', sidebarOpen);
closeButtonSidebar.addEventListener('click', sidebarClose);


/**
 * Modal
 */
const btnModals = document.getElementsByClassName('btn-open-modal');

const openModal = (event) => {

    const button = event.target;
    const modalID = button.getAttribute('data-toggle');
    const modal = document.getElementById(modalID);

    const allModals = document.getElementsByClassName('modal');

    for(let i = 0; i < allModals.length; i++) {
        allModals[i].classList.remove('show');
    }

    modal.classList.toggle('show');

}

for(let i = 0; i < btnModals.length; i++) {

    btnModals[i].addEventListener('click', openModal)

}