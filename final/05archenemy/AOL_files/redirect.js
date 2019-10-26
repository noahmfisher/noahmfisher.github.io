<!--
var TimeZones=new Array ();
var uk="https://web.archive.org/web/20031002160329/http://www.aol.co.uk/",australia="https://web.archive.org/web/20031002160329/http://www.aol.com.au/",brasil="https://web.archive.org/web/20031002160329/http://www.br.aol.com/",canada="https://web.archive.org/web/20031002160329/http://www.aol.ca/",deutschland="https://web.archive.org/web/20031002160329/http://www.aol.de/",france="https://web.archive.org/web/20031002160329/http://www.aol.fr/",hongkong="https://web.archive.org/web/20031002160329/http://www.aol.com.hk/",nihon="https://web.archive.org/web/20031002160329/http://www.aol.jp/",mexico="https://web.archive.org/web/20031002160329/http://www.aol.com.mx/",argentina="https://web.archive.org/web/20031002160329/http://www.aol.com.ar/",americaLatina="https://web.archive.org/web/20031002160329/http://www.la.aol.com/";
TimeZones = {
0:{'en-gb':uk},
1:{'en-gb':uk,'de':deutschland,'de-at':deutschland,'de-li':deutschland,'de-lu':deutschland,'de-ch':deutschland,'fr':france,'fr-be':france,'fr-lu':france,'fr-mc':france,'fr-ch':france},
2:{'de':deutschland,'de-at':deutschland,'de-li':deutschland,'de-lu':deutschland,'de-ch':deutschland,'fr':france,'fr-be':france,'fr-lu':france,'fr-mc':france,'fr-ch':france},
3:{},4:{},5:{},6:{},7:{},
8:{'en-au':australia,'en-nz':australia,'zh': hongkong,'zh-kh':hongkong,'zh-sg':hongkong,'zh-tw':hongkong},
9:{'en-au':australia,'en-nz':australia,'zh':hongkong,'zh-kh':hongkong,'zh-sg':hongkong,'zh-tw':hongkong,'jp':nihon},
10:{'en-au':australia,	'en-nz':australia,'jp':nihon},
11:{'en-au':australia,	'en-nz':australia},
12:{},
13:{'en-nz':australia},
"-12":{},"-11":{},"-10": {},"-9":{},
"-8":{'en-ca':canada,'fr-ca':canada},
"-7":{'en-ca':canada,'fr-ca':canada},
"-6":{'en-ca':canada,'fr-ca':canada,'es-mx':mexico,'es-ar':argentina},
"-5":{'en-ca':canada,'fr-ca':canada,'es-mx':mexico,'es-ar':argentina,'es-bo':americaLatina,'es-cl':americaLatina,'es-co':americaLatina,'es-cr':americaLatina,'es-do':americaLatina,'es-ec':americaLatina,'es-sv':americaLatina,'es-gt':americaLatina,'es-hn':americaLatina,'es-ni':americaLatina,'es-pa':americaLatina,'es-uy':americaLatina,'es-ve':americaLatina,'es-py':americaLatina,'es-pe':americaLatina,'es-pr':americaLatina,'es-ar':argentina	},
"-4":{'en-ca':canada,'fr-ca':canada,'es-bo':americaLatina,'es-cl'	:americaLatina,'es-co':americaLatina,'es-cr':americaLatina,'es-do':americaLatina,'es-ec':americaLatina,'es-sv':americaLatina,'es-gt':americaLatina,'es-hn':americaLatina,'es-ni':americaLatina,'es-pa':americaLatina,'es-uy':americaLatina,'es-ve':americaLatina,'es-py':americaLatina,'es-pe':americaLatina,'es-pr':americaLatina,'es-ar':argentina},
"-3":{'en-ca':canada,'fr-ca':canada,'pt-br':brasil,'es-bo':americaLatina,'es-cl':americaLatina,'es-co':americaLatina,'es-cr':americaLatina,'es-do':americaLatina,'es-ec':americaLatina,'es-sv':americaLatina,'es-gt':americaLatina,'es-hn':americaLatina,'es-ni':americaLatina,'es-pa':americaLatina,'es-uy':americaLatina,'es-ve':americaLatina,'es-py':americaLatina,'es-pe':americaLatina,'es-pr':americaLatina,'es-ar':argentina},
"-2":{'pt-br':brasil,'es-bo':americaLatina,'es-cl':americaLatina,'es-co':americaLatina,'es-cr':americaLatina,'es-do':americaLatina,'es-ec':americaLatina,'es-sv':americaLatina,'es-gt':americaLatina,'es-hn':americaLatina,'es-ni':americaLatina,'es-pa':americaLatina,'es-uy':americaLatina,'es-ve':americaLatina,'es-py':americaLatina,'es-pe':americaLatina,'es-pr':americaLatina,'es-ar':argentina},
"-1":{}
}
var curDateTime=new Date();
var offSet=new String();
offSet=String(-(curDateTime.getTimezoneOffset()/60));
var language=new String();
language=String(navigator_language() || navigator_userLanguage());
var country=TimeZones[offSet][language];
var byPass="byPass";
var localPortal="local_portal";
var byPassBool=get_cookie(byPass);
var myLocalPortal=get_cookie(localPortal);
if(!byPassBool){
 if(myLocalPortal != null){
  toggle();
  window.location.href=myLocalPortal+"?redirect";
 }
 if(country){
  toggle();
  document.cookie="localPortal="+country+";";
  window.location.href=country+"?redirect";
 }
}
function navigator_language (){
 if( typeof(navigator.language) == "string") return (navigator.language.toLowerCase());
 else return 0;
}
function navigator_userLanguage (){
if( typeof (navigator.userLanguage) == "string" ) return (navigator.userLanguage.toLowerCase());
else return 0;
}
function get_cookie(cookie_name){
 if(document.cookie.length>0) {
  begin=document.cookie.indexOf(cookie_name+"=");
  if(begin != -1) {
   begin+=cookie_name.length+1;
   end=document.cookie.indexOf(";", begin);
   if(end == -1) end = document.cookie.length;
   return unescape(document.cookie.substring(begin, end));
  }
  return null;
 }
 return null;
}
//-->
/*
     FILE ARCHIVED ON 16:03:29 Oct 02, 2003 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:58:39 Oct 26, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.168
  esindex: 0.015
  LoadShardBlock: 180.416 (3)
  captures_list: 211.85
  exclusion.robots: 0.181
  PetaboxLoader3.resolve: 1247.921
  CDXLines.iter: 12.227 (3)
  load_resource: 1313.82
  RedisCDXSource: 7.331
  PetaboxLoader3.datanode: 185.69 (4)
*/