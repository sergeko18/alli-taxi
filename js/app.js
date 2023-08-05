const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.navbar__body');

const onClickIconMenu = (e) => {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    
}

if(iconMenu) {
    iconMenu.addEventListener('click', onClickIconMenu)
}