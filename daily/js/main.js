function menuAnim() {
  var topB = document.getElementById('topB');
  var midB = document.getElementById('midB');
  var botB = document.getElementById('botB');
  var navs = document.getElementsByClassName("nav-content");
  var i;
  var openNav = navs[i];

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
    for (i = 0; i < navs.length; i++) {
      if (openNav.classList.contains('show')) {
        openNav.classList.remove('show');
      }
    }
  }
  document.getElementById("navDrop").classList.toggle("show");
};
