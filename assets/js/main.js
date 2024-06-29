/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp= document.getElementById('scroll-up');
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabcontents = document.querySelectorAll('[data-content]');

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target);
        
        tabcontents.forEach((tabcontent)=>{
            tabcontent.classList.remove('tab__active');
        });
        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});
/*=============== CONTACT FORM =============== */
const contactForm =  document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message'), 
    contactSubject= document.getElementById('contact-subject');

    const sendEmail = (e) => {
        e.preventDefault();

        if(contactName.value=== '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value=== '') {
            errorMessage.textContent = 'Write all the input fields';
        }
        else{
            emailjs.sendForm('service_qiamovl','template_ghnulkd','#contact-form', 'mS1JOgHUUwIqFBCaX').then(() => {
                errorMessage.classList.add('color-first');
                errorMessage.textContent = 'Message sent';
                setTimeout(() => {
                    errorMessage.textContent = '';
                }, 5000);
            }, (error) => {
                alert('OOPs! SOMETHING WENT WRONG...', error);
            }
        );

        contactName.value = '';
        contactEmail.value = '';
        contactMessage.value = '';
        contactSubject.value = '';
        
    }
    
};

    contactForm.addEventListener('submit', sendEmail);