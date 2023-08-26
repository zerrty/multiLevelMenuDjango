const dropdown = document.querySelector('.header__leanguage-switch');
const list = document.querySelector('.language-switch__available-laguages');
const dropdownArrow = document.querySelector('.header__leanguage-switch .arrow')

dropdown.addEventListener('click', (evt) =>{
    list.classList.toggle('_show');
    dropdownArrow.classList.toggle('_active');
});