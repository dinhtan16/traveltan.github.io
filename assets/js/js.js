// show menunnav

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
           
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')



// popuppppppppppp


const btnOpen = document.querySelectorAll('.islands__video-content')
const btnClose = document.querySelector('#close-popup')
console.log(btnClose)
const popUp = document.querySelector('#popup')


function PopUp(){
    popUp.classList.add('show-popup')
}

btnOpen.forEach(b => b.addEventListener('click',PopUp))

btnClose.addEventListener('click',() => {
    popUp.classList.remove('show-popup')


})




// swiper js
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,

  });
  let galleryTop = new Swiper('.gallery-top', {
    
    effect: 'fade',
    loop:true,
    thumbs: {
      swiper: galleryThumbs
    }
  });



  const imgControls = document.querySelectorAll('.controls__img')

  function ScrollAnimate(){
      gsap.from('.islands__title',{opacity: 0 , duration:.2,delay:.2,y:-20})
      gsap.from('.islands_subtitle',{opacity: 0 , duration:.3,delay:.3,y:-20})
      gsap.from('.islands_des',{opacity: 0 , duration:.4,delay:.4,y:-20})
      gsap.from('.isliands__button',{opacity: 0 , duration:.5,delay:.5,y:-20})
      gsap.from('.islands__video-content',{opacity: 0 , duration:.5,delay:.5,y:-20})
      
      popUp.classList.remove('show-popup')

  }

  imgControls.forEach(c => c.addEventListener('click',ScrollAnimate))


  