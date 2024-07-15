let menu = document.querySelector('nav');
let menu_btn = document.querySelector('.menu-btn');
let close_btn = document.querySelector('.close-btn');

menu_btn.addEventListener('click', function(){
    menu.classList.add('active')
})

close_btn.addEventListener('click', function(){
    menu.classList.remove('active')
})