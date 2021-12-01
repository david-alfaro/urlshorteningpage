const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuDiv = document.getElementById('mobile-menu-div')

//Mobile Menu Function
//When user click the bar icon this function adds or removes the hidden class
toggleMobileMenu = () => {
    mobileMenuDiv.classList.toggle('hidden');
    
};
mobileMenu.addEventListener('click',toggleMobileMenu);

