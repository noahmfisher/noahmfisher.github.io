 validChars="0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,-_(";
 var isEmbedded=navigator.userAgent.indexOf("AOL");
 function checkError(inputText,err){
   for (i=0; i<inputText.length; i++) {
      ch=inputText.charAt(i);
      if (validChars.indexOf(ch) == -1) {
         alert(err);
         return 0;
      }
   }
   return 1;
}
function lookup(f,clickpath) {
   if (f.textfield.value!='') {
      if(checkError(f.textfield.value,'Please enter a city, state, country, or zip code.'))
     if(isEmbedded==1) {
      window.open("https://web.archive.org/web/20031005172509/http://my.aol.com/weather/index.psp?citytext="+f.textfield.value);
     } else 
 {
        window.open("https://web.archive.org/web/20031005172509/http://my.aol.com/weather/index.psp?citytext="+f.textfield.value);
      }
   } else
       alert("Please enter a city, state, country, or zip code.");
}
 function wrapperWin(path,winWidth,winHeight,isEmbedded){
   //stoprefresh();
   if (winWidth==null||winWidth=="") winWidth=553;
   if (winHeight==null||winHeight=="") winHeight=420;
   var sw = screen.width;
   var sh = screen.height;
   var wrapper_win="";
   var options="";
   if ( isEmbedded == "1" ) {
      options= 'width='+winWidth+',height='+winHeight+',scrollbars=no,resizable=no';
   } else {
      options='width='+winWidth+',height='+winHeight+',left='+((sw-winWidth)/2 )+',top='+((sh-winHeight)/2)+',scrollbars=no,resizable=no';
   }
   if (typeof(wrapper_winn) == "object" && !wrapper_winn.closed ) wrapper_winn.close();
   wrapper_winn=window.open('https://web.archive.org/web/20031005172509/http://my.aol.com/core/loadurl.psp?path='+escape(path).replace(/\./g,'%2E'),'wrapper_winn',options);
   wrapper_winn.focus();
}
/*
     FILE ARCHIVED ON 17:25:09 Oct 05, 2003 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:58:38 Oct 26, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 30.407 (3)
  CDXLines.iter: 13.812 (3)
  esindex: 0.016
  captures_list: 49.597
  exclusion.robots.policy: 0.164
  load_resource: 90.069
  PetaboxLoader3.datanode: 39.208 (4)
  RedisCDXSource: 0.626
  exclusion.robots: 0.177
  PetaboxLoader3.resolve: 79.465
*/