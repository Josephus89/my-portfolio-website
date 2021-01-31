/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*Moving Gear On Scroll*/
var gear = document.getElementById("gear");

    window.addEventListener("scroll", function() {
    gear.style.transform = "rotate("+window.pageYOffset+"deg)";
});

/* Scrolling Text */
$( window ).on('scroll', function(){

  var scrollTop = $(this).scrollTop();
  $( '.normal' ).css({
    transform: 'translateX('+  ( 0.04 * scrollTop ) +'px)',
  });
  $( '.emph' ).css({
    transform: 'translateX('+  ( -0.04 * scrollTop ) +'px)',
  });
});

/* Crousel Words */
var words1 = ['Dreamer', 'Multipotential', 'Problem solver', 'Creative', 'Logical'];
var counter1 = 0;
var word1 = document.getElementById("carousel-words-1");
setInterval(update_carousel_words_1, 1900);
function update_carousel_words_1(){
  word1.innerHTML = words1[counter1];
  counter1++;
  if(counter1 >= words1.length){
    counter1 = 0;
  }
}

var words2 = ['Programmer', 'Web Developer', 'Personal Trainer', 'Public Speaker', 'Entrepreneur','Trader'];
var counter2 = 0;
var word2 = document.getElementById("carousel-words-2");
setInterval(update_carousel_words_2, 1500);
function update_carousel_words_2(){
  word2.innerHTML = words2[counter2];
  counter2++;
  if(counter2 >= words2.length){
    counter2 = 0;
  }
}

var words3 = ['HEMA Instructor', 'Nerd', 'GDR Lover', 'Evrything I want to be'];
var counter3 = 0;
var word3 = document.getElementById("carousel-words-3");
setInterval(update_carousel_words_3, 1100);
function update_carousel_words_3(){
  word3.innerHTML = words3[counter3];
  counter3++;
  if(counter3 >= words3.length){
    counter3 = 0;
  }
}

$(document).ready(function () {
          if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
          }
      });
