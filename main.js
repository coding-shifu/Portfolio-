// MENU SHOW 

// const showMenu = (toggleid, navid) => {
//     const toggle = document.getElementById(toggleid),
//     nav = document.getElementById(navid)

//     if(toggle && nav) {
//         toggle.addEventListener('click',()=> {
//             nav.classList.toggle('show')

//         })
//     }
// }

// showMenu('nav-toggle', 'nav-menu')

const toggleID = document.getElementById('nav-toggle')
const nav = document.getElementById('nav-menu')

toggleID.addEventListener('click',function(){
    nav.classList.toggle('show')
})

// ACTIVE AND REMOVE MENU 

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navLink.forEach(n =>n.classList.remove('active'))
    this.classList.add('active')

    // REMOVE MENU MOBILE 
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}



 navLink.forEach(n => n.addEventListener('click',linkAction))

// const navLink = document.querySelectorAll('.nav__link')
// const navMenu = document.getElementById('nav-menu')

// navLink.forEach(function (link){
//     link.addEventListener('click',function (){
//         // link.classList.remove('active')
//         // this.classList.add('active')

//         if(link.classList.contains('active')){
//             link.classList.remove('active')
            
//         }
//         else{
//             this.classList.add('active')
//         }

//         navMenu.classList.remove('show')
//     })
// })

// navLink.addEventListener('click',function(){
//     navMenu.classList.remove('show')
// })



// SCROLL REVEAL ANIMATION 

const sr = scrollreveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true 
})


// SCROLL HOME 
sr.reveal('.home__title', {})
sr.reveal('.button', {delay:200})
sr.reveal('.home__img', {delay:400})
sr.reveal('.home__social-icon', {interval: 200})



// SCROLL ABOUT
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay:200})
sr.reveal('.about__text', {delay:400})



// SCROLL SKILLS 

sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {delay:200})
sr.reveal('.skills__data', {interval:200})
sr.reveal('.skills__img', {delay:400})



// SCROLL WORK 
sr.reveal('.work__img', {interval:200})


// SCROLL CONTACT 
sr.reveal('.contact__input', {interval:200})







