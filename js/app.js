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


const meniLinks = document.querySelectorAll('.navigation[data-goto]');

if (meniLinks.length > 0) {
    const onMenuLinkClick = (e) => {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoSectionValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoSectionValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
    meniLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    })

    
}

