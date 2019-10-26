if (window.adsOne==0&&!window.adsOld){adsOne++
if (window.adsDel>0||(window.adsN4&&window.adsLNm>0))adsEndF()
if (window.adsCN>0)adsCFn()}
function adsOnL(){var w=window
if (w.adsPrO)w.adsPrO()
adsDelFn()}
function adsEndF(){var w=window
if (w.adsDel!=2||adsN4||(adsIE&&adsAV<=4)){if (w.adsN4){adsDelFn()}else{setTimeout('adsDelFn()', '1')}}else{w.adsPrO=w.onload
w.onload=adsOnL}}
function adsDelFn(){var w=window,n=0,s,z,r=1
while (n<w.adsLNm){s=w.adsLMN[n].split("|")
if (s[0].indexOf('Img')!=-1){z=eval("document."+s[0])
if(z)z.src=s[1]}else if(!w.adsN4){z=eval("window."+s[0])
if ((adsN6||(adsIE&&document.getElementById))&&n==0){var y="try{if (z.location.href!='about:blank'){r=0}}catch (err){r=0}"
eval(y)}
if (z&&r){if (adsN6){z.location.replace(s[1])}
else{z.location.href=s[1]}
}}else{document.write("<LAYER SRC='"+s[1]+"'")
document.write ("visibility=hidden onload=\"moveToAbsolute("+s[0]+".pageX,"+s[0]+".pageY-1);visibility='show';\"></LAYER>")}
n++}}
function adsCol(x){var o=eval('window.adsCol'+x),z='adsCo'+x,d=document
if (o.indexOf("no content")==-1&&o.indexOf("no_ad")==-1&&o.indexOf("<!---->")==-1){
if (d.getElementById)q=d.getElementById(z)
else if (d.all)q=d.all(z)
adsCS=adsCo[x].split("|")
if (adsCS[1]=='T'){q.innerHTML=o}else{if (o.indexOf('atwola_no_exp')==-1){q.width=adsCS[1]
q.height=adsCS[2]}
var y='try{q.src="javascript:parent.adsClFn('+x+')"}catch (err){}'
eval(y)}}}
function adsCFn(){for (var i=0;i<adsCN;i++){adsCS=adsCo[i].split("|")
document.write('<SCRIPT LANGUAGE="JavaScript1.1" SRC="'+adsCS[0]+'J&hw=coll'+i+'">')
document.write('</SCR','IPT>')}}
/*
     FILE ARCHIVED ON 13:37:35 Nov 30, 2003 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:58:50 Oct 26, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.325
  PetaboxLoader3.resolve: 113.458 (2)
  PetaboxLoader3.datanode: 169.096 (4)
  esindex: 0.019
  LoadShardBlock: 232.837 (3)
  CDXLines.iter: 74.141 (3)
  RedisCDXSource: 8.502
  load_resource: 74.725
  exclusion.robots.policy: 0.303
  captures_list: 1037.369
*/