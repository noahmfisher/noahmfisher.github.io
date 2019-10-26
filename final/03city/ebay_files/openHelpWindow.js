//<!--
//\include\js\help\openHelpWindow.js@@\main\10

var hw=""
var nhw=""
function openHelpWindow(path){if(navigator.appName.indexOf("WebTV")==-1){hw=window.open(path,"helpwin","height=420,width=350,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no,resizable=yes,titlebar=no");if((navigator.userAgent.toLowerCase().indexOf("msie")==-1)||(parseInt(navigator.appVersion)>=5))
hw.focus();return false;}
else{document.location.href=path;}}
function openNonHelpWindow(path){if(navigator.appName.indexOf("WebTV")==-1){nhw=window.open(path,"third","height=400,width=600,scrollbars=yes,status=yes,toolbar=yes,menubar=yes,location=yes,resizable=yes,titlebar=yes");nhw.focus();return false;}
else{document.location.href=path;}}
// -->

/*
     FILE ARCHIVED ON 09:09:03 Dec 02, 2002 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:52:41 Oct 26, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.283
  esindex: 0.033
  LoadShardBlock: 178.354 (3)
  captures_list: 211.083
  exclusion.robots: 0.303
  PetaboxLoader3.resolve: 52.188
  CDXLines.iter: 13.388 (3)
  load_resource: 175.514
  RedisCDXSource: 10.411
  PetaboxLoader3.datanode: 299.666 (4)
*/