//<!--
//\include\js\popout\promo_popout_mediaplex.js@@\main\5
<!--
var bPopUpWindow=true;var platform=navigator.platform.toLowerCase();function eBayIsIE4()
{var agent=navigator.userAgent.toLowerCase();var is_ie=(agent.indexOf("msie")!=-1);var minor=is_ie?parseFloat(agent.substring(agent.indexOf('msie')+5)):parseFloat(navigator.appVersion);var isie4=parseInt(minor)==4;return isie4;}
function setPopOutSwitch(bOnOrOff,myfunction)
{bPopUpWindow=bOnOrOff;}
function popupWindow(mypage,target,w,h,scroll,no){if(target=="_self")
return false;LeftPosition=(screen.width)?(screen.width-w)/2:0;TopPosition=(screen.height)?(screen.height-h)/2:0;settings='height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable='+no+'';win=window.open(mypage,target,settings);return false;}
function checkHome(){var valueOfCheckHome=false;if(eBayIsIE4())
{return false;}
if(platform.indexOf('mac')==-1)
{valueOfCheckHome=oHomePage.isHomePage("http://"+document.location.host+"/");}
else
{valueOfCheckHome=oHomePage.isHomePage(document.location.host);}
return valueOfCheckHome;}
function findForms()
{var formsArray=document.forms;var i;var strFormSubmit="";for(i=0;i<formsArray.length;i++)
{strFormSubmit+='<SC'+'RIPT FOR=\"'+formsArray[i].name+'\" EVENT=\"onsubmit\" LANGUAGE=\"JavaScript\">';strFormSubmit+='setPopOutSwitch(false)\;';strFormSubmit+='<\/SC'+'RIPT>';}
document.write(strFormSubmit);}
function startCounterCookie(){var now="";var countscookie="";var countcookie="";now=new Date();Year=now.getUTCFullYear();Month=now.getMonth();Day=now.getDate();now=new Date(Year,Month,Day);now.setTime(now.getTime()+24*60*60*1000);countcookie=ReadCookie("count");if(!countcookie){countcookie=1;}else{countcookie=parseInt(countcookie)+1;}
WriteCookie("count",countcookie,"ebay.com","/",now);testIt();}
function popOutWindow(pURL,width,height)
{if(typeof(width)=='undefined')
width='275';if(typeof(height)=='undefined')
width='375';var valueOfCounts=0;var valueOfCheckHome=false;var valueOfKeepMeSignIn=null;var valueOfEbaySignIn=null;valueOfKeepMeSignIn=ReadCookie("keepmesignin");valueOfEbaySignIn=ReadCookie("ebaysignin");valueOfCheckHome=checkHome();valueOfCounts=ReadCookie("count");testIt();if(bPopUpWindow)
{if((valueOfCheckHome!=true)&&(valueOfCounts<2))
{if((valueOfEbaySignIn!="in")&(valueOfKeepMeSignIn!="in"))
{return popupWindow(pURL,'SureYouWantToLeave',width,height,'no','yes');}}}}
function writeClickListener()
{var string='';string+='<SCR'+'IPT FOR="document" EVENT="onclick()" LANGUAGE="JavaScript">';string+='var eventTag = window.event.srcElement.tagName.toLowerCase();';string+='if(eventTag == "a" || eventTag == "img" || eventTag =="area")';string+='{';string+='setPopOutSwitch(false)\;';string+='}';string+='<\/SC'+'RIPT>';document.write(string);}
function eBayIsFramed()
{if(top==self)
{return false;}
else
{return true;}}
function eBayToolbarPluginDetect()
{var plugin=false;var mimetype="application/x-eBay-Toolbar-Plugin-Functions";var nsname="eBay Plugin Functions";if(navigator.mimeTypes&&navigator.mimeTypes[mimetype]&&navigator.mimeTypes[mimetype].enabledPlugin)
{if(navigator.plugins)
plugin=true;}
else if(navigator.userAgent&&navigator.userAgent.indexOf("MSIE")>=0&&(navigator.userAgent.indexOf("Windows")>=0)){plugin=IECheckClient();}
return plugin;}
if(eBayToolbarPluginDetect()){setPopOutSwitch(false,"toolbar");}
if(eBayIsFramed()){setPopOutSwitch(false,"framed");}
function testIt()
{}
// -->

/*
     FILE ARCHIVED ON 12:47:44 Dec 02, 2002 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:52:41 Oct 26, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 20.587
  exclusion.robots: 0.204
  exclusion.robots.policy: 0.188
  CDXLines.iter: 11.036 (3)
  esindex: 0.016
  captures_list: 256.373
  PetaboxLoader3.datanode: 169.665 (4)
  load_resource: 132.971
  PetaboxLoader3.resolve: 177.703 (2)
  LoadShardBlock: 220.908 (3)
*/