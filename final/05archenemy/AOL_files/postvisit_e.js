var show=1;  // global variable to determine if we should show popup.


function PupEnable() {
        today = new Date();
        noPopStart = new Date("Sun Mar 23 08:00:00 EST 2003");
        noPopEnd = new Date("Sun Mar 30 20:00:00 EST 2003");

        if(today>=noPopStart && today<noPopEnd) {
                return false;
        } else {
                return true;
        } 
}

// Loop through every link.  If the link contains http and doesn't contain aol.com
// (or any domain we want to add) we will show a popup, if not we don't
// want to show a popup.  For those links we add an onclick event that calls the toggle
// function which sets the show flag to 0 (don't show popup).
// An onclick event gets called before the link gets processed so it does
// this before doing the link and thus before doing the onunload event.
function updateLinks() {
     show = 1;
     for (d=0; d < document.links.length; d++) {

              // add more conditions separated by || (or) if you want.

              if ( (document.links[d].href.indexOf("http") == -1) ||
                   (document.links[d].href.indexOf("aol.com") != -1) ||
                   (document.links[d].href.indexOf("atwola.com") != -1)
                   )
              {
                  document.links[d].onclick = toggle;
              }
     }
     // also exclude onSubmit events, to prevent spurious popups when performing
     // functions such as looking up stock quotes

for (i=0;i<document.forms.length;i++) {
document.forms[i].onsubmit=toggle;
}
}

// This function gets called from the onclick events of links where we
// don't want to show the popup.
function toggle() {
     show = 0;
}

// This gets called from the onUnload event.  Change the alert to
// a window.open to actually open the popup.
function popupMe() {
     if (show && PupEnable()) {
               ac = document.cookie;
               if (ac.indexOf("SEENPROMO=YES") != -1) return;
               document.cookie = "SEENPROMO=YES";
               pop = "https://web.archive.org/web/20031005172506/http://specialoffers.aol.com/specialoffers/pv_external.adp";

var lpos = (screen.availWidth/2);
var tpos = (screen.availHeight - 360);
var params = "width=330,height=330, top=" + tpos + ",ScreenY=" + tpos + ",left=" + lpos + ", ScreenX=" + lpos;
window.open(pop,"popup",params);
}
     else {
          show=1;
     }
}
/*
     FILE ARCHIVED ON 17:25:06 Oct 05, 2003 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:58:38 Oct 26, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 9.976
  LoadShardBlock: 117.21 (3)
  PetaboxLoader3.resolve: 160.573 (2)
  captures_list: 170.411
  exclusion.robots.policy: 0.279
  esindex: 0.021
  CDXLines.iter: 30.15 (3)
  PetaboxLoader3.datanode: 66.252 (4)
  load_resource: 131.555
  exclusion.robots: 0.301
*/