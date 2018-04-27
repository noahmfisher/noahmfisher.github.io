var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function menuAnim() {
  var topB = document.getElementById('topB');
  var midB = document.getElementById('midB');
  var botB = document.getElementById('botB');
  var navs = document.getElementsByClassName("nav-content");

  if (topB.classList.contains('topBC')) {
    topB.classList.remove('topBC');
    midB.classList.remove('midBC');
    botB.classList.remove('botBC');
  } else {
    topB.classList.add('topBC');
    midB.classList.add('midBC');
    botB.classList.add('botBC');
  }
  if (!event.target.matches('#menubutton')) {
    var i;
    var openNav = navs[i];
    for (i = 0; i++; i < navs.length) {
      if (openNav.classList.contains('show')) {
        openNav.classList.remove('show');
      }
    }
  }
  document.getElementById("navDrop").classList.toggle("show");
};
