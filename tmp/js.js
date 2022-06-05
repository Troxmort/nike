document.addEventListener('DOMContentLoaded', () => {

    const line1 = document.querySelector('.mobil__menu--line1')
    const line2 = document.querySelector('.mobil__menu--line2')
    const line3 = document.querySelector('.mobil__menu--line3')

    const nav = document.querySelector('.menu__navegation')
    const menuMobile = document.querySelector('.mobil')
    menuMobile.addEventListener('click', animation);



    function animation (){
        line1.classList.toggle('mobil__menu--line1active')
        line2.classList.toggle('mobil__menu--line2active')
        line3.classList.toggle('mobil__menu--line3active')

        nav.classList.toggle('active')
    }

})

