const toggleButton = document.getElementById('togglebutton');
const navList = document.getElementById('navlist');

togglebutton.addEventListener('click', () =>  {
    navList.classList.toggle('active');
})