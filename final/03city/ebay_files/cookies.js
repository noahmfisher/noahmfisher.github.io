function ReadCookie(name){
	var allCookie, cookieVal, length, start, end;
	cookieVal="";
	name=name+"=";
	allCookie=document.cookie;
	length=allCookie.length;
	if (length>0){
		start=allCookie.indexOf(name, 0);
		if (start!=-1){
			start+=name.length;
			end=allCookie.indexOf(";",start);
			if (end==-1) {
				end=length;
			}
			cookieVal=unescape(allCookie.substring(start,end));
		}
	}
	return(cookieVal);
}

function Write2YearCookie(name,value,domain,path,expires,secure){
	var CookieVal, CookError, deleteMeInAYear;
	CookieVal = CookError = "";
	if (name){
		CookieVal = CookieVal + escape(name) + "=";
		if (value){
			CookieVal += escape(value);
			if (domain){
				CookieVal += "; domain=" + domain;
			}
			if (path){
				CookieVal += "; path=" + path;
			}
			if (expires == 'yes'){
				CookieVal += "; expires=Tuesday, 04-Jan-02 12:00:00 GMT"
			}
			else if (expires == 'delete'){
				CookieVal += "; expires=Saturday, 99-May-01 12:00:00 GMT"
			}
			if (secure){
				CookieVal += "; secure=" + secure;
			}
		}
		else{
			CookError = CookError + "Value failure";
		}
	}
	else{
		CookError = CookError + "Name failure";
	}
	if (!CookError){
		document.cookie = CookieVal;  // sets the cookie
		if (value != ReadCookie(name)){
			CookError = "Write failure";
		}
	}
	return CookError;
}

function WriteCookie(name,value,domain,path,expires,secure){ 
	var CookieVal, CookError;
	CookieVal=CookError="";
	if (name){
		CookieVal=CookieVal+escape(name)+"=";
	}
	if (value){
		CookieVal=CookieVal+escape(value);
	}
	if (domain){
		CookieVal=CookieVal+"; domain="+domain;
	}
	if (path){
		CookieVal=CookieVal+"; path="+path;
	}
	if (expires){
		CookieVal=CookieVal+"; expires="+expires.toGMTString();
	}
	if (secure){
		CookieVal=CookieVal+"; secure="+secure;
	}
	else{
		CookError=CookError+"Write failure";
	}
	document.cookie=CookieVal;  // sets the cookie
}
function DeleteCookie (name,domain,path){
   var expireDate=new Date(1);
   if (ReadCookie(name)){
      WriteCookie(name, " ", domain, path, expireDate);
   }
}
var CookieDomain = ".ebay.com";
var thisHost = location.hostname.toLowerCase();
if (thisHost.indexOf(".ebay") > 0){
	CookieDomain = thisHost.substring(thisHost.indexOf(".ebay"));
}
var cookieJS = 1;
/*
     FILE ARCHIVED ON 09:18:31 Dec 02, 2002 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:52:41 Oct 26, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 99.204
  PetaboxLoader3.datanode: 129.846 (4)
  captures_list: 139.046
  RedisCDXSource: 0.738
  CDXLines.iter: 15.295 (3)
  PetaboxLoader3.resolve: 45.914
  esindex: 0.015
  exclusion.robots.policy: 0.275
  LoadShardBlock: 114.106 (3)
  exclusion.robots: 0.295
*/