////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const sect = document.querySelectorAll('.section');
const button = document.querySelector('.btn--text');
const view = document.querySelector('#section--2');
const but = document.querySelectorAll('.operations__tab');
const butdisplay = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const section1 = document.querySelector('#section--1');
const dotContainer = document.querySelector(".dots")

console.log(dotContainer);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

sect.forEach(function (mod) {});

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

button.addEventListener('click', function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: 'smooth' });
})

//TABBED COMPONENTS
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content")

// tabs.forEach(t => t.addEventListener("click", function(e){
//   const clicked = e.target.closest(".operations__tab")

//  clicked.classList.add("operations__tab--active")
// }))
// console.log(tabsContainer);

//BUILDING TABBED COMPONENT

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  if(!clicked)return

  tabs.forEach(t => t.classList.remove("operations__tab--active"))
  clicked.classList.add("operations__tab--active")

  tabsContent.forEach(c => c.classList.remove("operations__content--active"))


  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active")
})

//IMPLEMENT HOVER ON NAVBAR

nav.addEventListener("mouseover", function(e) {
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img")

    siblings.forEach(el => {
      if(el !== link){
        el.style.opacity = 0.5
      }
    })
    logo.style.opacity = 0.5
  }
  
})


nav.addEventListener("mouseout", function(e) {
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img")

    siblings.forEach(el => {
      if(el !== link){
        el.style.opacity = 1
      }
    })
    logo.style.opacity = 1
  }
  
})

//Sticky navigation

// const initialCoords = section1.getBoundingClientRect();

// console.log(initialCoords);

// window.addEventListener("scroll", function(){
  
//   if(window.scrollY > initialCoords.top){
//     nav.classList.add('sticky')
//   }
//   else{
//     nav.classList.remove('sticky')
//   }
// })

//Intersection Api
const navHeight = nav.getBoundingClientRect().height

const stickyNav = function(ent){
  const entries = ent[0]
  // console.log(entries);
  if(!entries.isIntersecting){
    nav.classList.add('sticky')
  }

  else{
    nav.classList.remove('sticky')
  }
}

const headerObservser = new IntersectionObserver(stickyNav, {
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`
})

headerObservser.observe(header)


//implement reveal on scroll

const allSections = document.querySelectorAll(".section")

// console.log(allSections);


const revealSection = function(ent){
  const ents = ent[0];
  // console.log(ents);

  if(!ents.isIntersecting)return

  ents.target.classList.remove("section--hidden")
  observer.unobserve(ent.target)
}


const sectionObserver = new IntersectionObserver(revealSection, {
  root:null,
  threshold:0.15
})


allSections.forEach(function(section){
  // section.classList.add('section--hidden')
  sectionObserver.observe(section)
  
})

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function(ent, obs){
  const ents = ent[0];

  if(!ents.isIntersecting)return

  ents.target.src = ents.target.dataset.src
  ents.target.classList.remove("lazy-img");
  observer.unobserve(ents.target)
}

const imgObserver = new IntersectionObserver(loadImg, {
  root:null,
  threshold:0,
  rootMargin:"200px"
})

imgTargets.forEach(img => imgObserver.observe(img))

//SMOOTH SCROLLING FOR NAV BAR

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//BUILDING CAROUSEL
let currSlide = 0;
let maxSlide = slides.length-1;




slides.forEach((slide, index)=> slide.style.transform = `translateX(${100 * index}%)`);

const slideControl = (sli) => {
  slides.forEach((slide, index)=> slide.style.transform = `translateX(${100 * (index - sli)}%)`)
}


btnRight.addEventListener("click", function(){

  if(currSlide === maxSlide){
    currSlide = 0
  }
  else{
    currSlide++
  }
  slideControl(currSlide)
  activeDots(currSlide)
})

btnLeft.addEventListener("click", function(){
  if(currSlide === 0){
    currSlide = maxSlide
  }
  else{
    currSlide--;
  }
  slideControl(currSlide)
  activeDots(currSlide)
})

//DOTS
const createDots = () => {
  slides.forEach((_, i)=>{
    dotContainer.insertAdjacentHTML("beforeend",`<button class ="dots__dot" data-slide= "${i}"><button>` )
  })
}

createDots()

const activeDots = function(slide){
  document.querySelectorAll(".dots__dot").forEach(dot => dot.classList.remove("dots__dot--active"))

  document.querySelector(`.dots__dot[data-slide = "${slide}"]`).classList.add("dots__dot--active")
  // console.log("hello");
}

activeDots(0)

dotContainer.addEventListener("click", function(e){
  if(e.target.classList.contains("dots__dot")){
    const slide = e.target.dataset.slide
   
    
    slideControl(slide)
    activeDots(slide)
  }
})

