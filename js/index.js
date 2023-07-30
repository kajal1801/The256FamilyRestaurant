function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  

const hamburger = document.querySelector('.hamburger');
const hiddenMenu = document.querySelector('.hidden-menu');

function toggleMenu() {
  hiddenMenu.classList.toggle('active');
  if(hiddenMenu.classList.contains('active')){
    const bar1 = document.getElementById('bar1')
    const bar2 = document.getElementById('bar2')
    const bar3 = document.getElementById('bar3')
 
    bar2.style.width = '70%'
    bar2.style.marginLeft = 'auto'
    bar2.style.marginRight = 'auto'
    bar3.style.width = '40%'
    bar3.style.margin = '0 auto'
    
  }
  else{
    bar2.style.width = '100%'
    bar3.style.width = '100%'
  }
}

hamburger.addEventListener('click', toggleMenu);
