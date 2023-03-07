const menuTrigger = document.querySelector('.menu-trigger'),
  closeTrigger = document.querySelector('.close'),
  giveClass = document.querySelector('.site');
  // menu open
menuTrigger.addEventListener('click', function() {
  giveClass.classList.toggle('showmenu')
})
// menu close
closeTrigger.addEventListener('click', function() {
  giveClass.classList.remove('showmenu')
})

// Animation
const io = new IntersectionObserver(entries =>{
   entries.forEach(entry =>{
      if(entry.intersectionRatio > 0){
         entry.target.classList.add('this')
      }
   })
})
const boxEllist = document.querySelectorAll('.animate');
boxEllist.forEach((el) => {
   io.observe(el)
})