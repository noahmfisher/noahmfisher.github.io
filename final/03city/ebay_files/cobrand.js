/****************************************************************************************************
** JS Cobrand (cobrand_top.js)
** Tim Michaels (tmichaels) 11/16/00
** Last major update: Choon Chong (cchong) 11/21/2001
** Description: Allows a single page to display cobranded elements based on current and previous
** URL and, in some cases, parameters passed by the ISAPI code.  Cobranded elements include headers
** and footers, promos, links, forms actions, and certain form attributes.  SSI vars are defined    
** in localdefs.  Available functions: ReadCookie(name); DeleteCookie (name,domain,path);
** WriteCookie(name,value,domain,path,expires,secure); cobrandLinks(); cobrandFormRedirect(chosen);
** cobrandForms(); searchAttribs(); writeRegCookie(); writeHeader(); writeHeaderNoATC(); writeFooter();
** getException(); detectCobrand(inThisPage, inLastPage, type); cobrandURL(inputURL)
*****************************************************************************************************/
var QA = "", motorQA = "", QAFolder ="", siteID = "0", isCobranded = false, ssl_copartnerid, ebayDomain = ".ebay";
var servers= new Array();
var thisPage = location.href.toLowerCase(), lastPage = document.referrer.toLowerCase();

if(thisPage.indexOf("corp.ebay.com")!=-1 && thisPage.indexOf("?testurl")!=-1){
	thisPage = location.search.replace("?testurl=","")								//accept parameter for testing cobrand
}   
if(thisPage.indexOf(".qa")!=-1){ 													//setting QA environment, we should hide this from prod
//remove for prod
}									

if ((thisPage.indexOf("https://")!=-1) || (thisPage.indexOf("scgi.")!=-1)){
	thisPage=thisPage+ "?co_partnerid="+ssl_copartnerid+"&";  			//  include ssl variable pass by isapi
	var machine = "https://web.archive.org/web/20021130082955/https://scgi/" + QA + ".ebay.com/"; 					//  machine these files are hosted on
	var path = "saw/pics/js/cobrand" + QAFolder + "Secure/";			//  and path to the files -- leave thse two blank for relative paths 
} 
else{
	var machine = "https://web.archive.org/web/20021130082955/http://include/" + QA + ".ebay.com/"; 				//  machine these files are hosted on
	var path = "aw/pics/js/cobrand" + QAFolder + "/"; 					//  and path to the files -- leave thse two blank for relative paths 
}
var CobrandSiteID =	new Array("0","1","2","3","4","5","6","7","8","9");
var cobrands=	 	new Array("ebay","aol","aol","compuserve","digitalcity","go","icq","netscape","lycos","carpoint"); // use for cobrand_function.js
var cobrandDomain=	new Array(false,false,false,false,false,true,false,false,false,false); 
var ht=				new Array("1","5","500","6","7","10","8","9","37","28");

var CobrandSite = new Array(CobrandSiteID.length);
var SiteLogic = new Array(CobrandSiteID.length);

for(i=1;i<CobrandSiteID.length;i++){
	CobrandSite[i] = new Array("."+cobrands[i]+".", "ht="+ht[i]+"&", "s_partnerid="+ht[i]+"&", "co_partnerid="+ht[i]+"&");
}
//  hard code the cobrand exception
CobrandSite[0]    = new Array(".ebaystores.","crs.ebay.com",".liveauctions.","arribada.","skippy.");
CobrandSite[2][1] = "ht=2&";

function checkLastPage(){   //  disable lastpage when last page is not an ebay link
	disbaleLastPage = false;
	for(h=1;h<CobrandSiteID.length;h++){
		if (lastPage.indexOf("." + cobrands[h] + ".")!=-1 && lastPage.indexOf(".ebay")==-1){
			disbaleLastPage = true;
		}
	}
	return disbaleLastPage;
}

if (lastPage.indexOf("web.aol.com")!=-1 || checkLastPage()){lastPage="";} 		//disable cobrand by lastPage due to aol ad redirect	

//  hard code the cobrand exception
function getException(SiteID, InputLogic, inThisPage, inLastPage){	
	if(SiteID=="1"){
		OutputLogic = "(" + InputLogic + ") && ( ((inThisPage.indexOf(\".com/aol/\")>0)&&(inThisPage.indexOf(\".aol.\")>0)) || (((inThisPage.indexOf(\".com/aol/\")==-1)&&(inThisPage.indexOf(\".aol.\")==-1))&&((inThisPage.indexOf(\"ht=5&\") > 0)||(inThisPage.indexOf(\"s_partnerid=5&\") > 0)||(inThisPage.indexOf(\"co_partnerid=5&\") > 0))) || ((inLastPage.indexOf(\".com/aol/\")>0)&&(inLastPage.indexOf(\".aol.\")>0)) || ((inLastPage.indexOf(\".com/aol/\")==-1)&&(inLastPage.indexOf(\".aol.\")==-1)&&(inThisPage.indexOf(\".aol.\")==-1)))" //return string with addtional code		
		}	
	else if(SiteID=="5"){
		OutputLogic = "((" + InputLogic + ") && (inThisPage.indexOf(\"ebaymotors/\") ==-1) && (inThisPage.indexOf(\"motors.\") ==-1))"    //do not cobrand ebaymotors for GO
		}
	else if(SiteID=="9"){
		OutputLogic = "((" + InputLogic + ") && ( (inThisPage.indexOf(\"ebaymotors/\") > 0) || (inThisPage.indexOf(\"motors.\") > 0)  || ((inThisPage.indexOf(\"pages.\") ==-1) && (inThisPage.indexOf(\"www.ebay.com\") ==-1) && (inThisPage.indexOf(\"cgi\") ==-1)  && (inThisPage.indexOf(\"listings\") ==-1))))" //return string with addtional code
		}
	else{
		OutputLogic = InputLogic; //no change
		}
	return OutputLogic; 
}

function detectCobrand(inThisPage, inLastPage, type){	
	//  write condition statement for each cobrand
	var elseStatement = ""; 								 
	var setSiteID = ""; 								
	for (s=0; s<CobrandSiteID.length; s++){
		SiteLogic[s] = ""; orStatement = "";				
		for(i=0;i< CobrandSite[s].length;i++){ 				//  inner loop for each ID
			if ((i == 0) && (type == "location"))
			{
				var itpURL = inThisPage;
				var qInd = itpURL.indexOf("?");
				if (qInd != -1)
					itpURL = itpURL.substring(0,qInd);
				var ilpURL = inLastPage;
				qInd = ilpURL.indexOf("?");
				if (qInd == -1)
					ilpURL = ilpURL.substring(0,qInd);
				var itpInd = itpURL.indexOf(CobrandSite[s][i]);
				var ilpInd = ilpURL.indexOf(CobrandSite[s][i]);
				SiteLogic[s] = SiteLogic[s] + orStatement +"("+itpInd+" > 0) || ("+ilpInd+" > 0)";
			}
			else
			{
				SiteLogic[s] = SiteLogic[s] + orStatement +"(inThisPage.indexOf(\"" +CobrandSite[s][i]+ "\") > 0) || (inLastPage.indexOf(\"" +CobrandSite[s][i]+ "\") > 0)";
			}
			orStatement = " || ";
		}
		SiteLogic[s] = getException(s, SiteLogic[s]); 	//  check for exception
		if(type=="location"){
			setSiteID = setSiteID + elseStatement + " if(" + SiteLogic[s] + ") {siteID =\"" +CobrandSiteID[s] + "\"}";
		}
		else{
			setSiteID = setSiteID + elseStatement + " if(" + SiteLogic[s] + ") {isCobranded =\"true\"}";
		}
		elseStatement = " else";  
	}	
	if(type=="location"){
		eval(setSiteID); 										//  set cobrand SiteID according to if else condition in the array.
	}
	else{
		checkCobrand = setSiteID;
	}
}
detectCobrand(thisPage, lastPage, "location");  				// set cobrand SiteID according to if else condition in the array.

// cookie functions
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
	document.cookie=CookieVal;  						//  sets the cookie
}

function DeleteCookie (name,domain,path){
   var expireDate=new Date(1);
   if (ReadCookie(name)){
      WriteCookie(name, " ", domain, path, expireDate);
   }
}
//  begin micro-branding code
var mbID = "0";
var pageName;
if (!pageName)pageName = "";
if ((pageName.toLowerCase() == "pageviewitem")||(pageName.toLowerCase() == "pageacceptbid")||(pageName.toLowerCase() == "pageautosviewitemforvehicle")||(pageName.toLowerCase() == "pagebinconfirm")||(pageName.toLowerCase() == "pagebincongrats")||(pageName.toLowerCase() == "pagemakebid")){
	if (lastPage.indexOf('techrepublic.com') > -1){
		siteID = "0";
		document.write("<SCRIPT SRC=\"" + machine + path + "mb/techrepublic.js\"></SCRIPT>");
	}
	else if (lastPage.indexOf('lego.com') > -1){
		siteID = "0";
		document.write("<SCRIPT SRC=\"" + machine + path + "mb/lego.js\"></SCRIPT>");
	}
	else if ((lastPage.indexOf('tmichaels') > -1)||(lastPage.indexOf('smccarth') > -1)){
		siteID = "0";
		document.write("<SCRIPT SRC=\"" + machine + path + "mb/mb_test.js\"></SCRIPT>");
	}
}
//  end microbranding code
if ((siteID != "0") || (thisPage.indexOf("https://")!=-1) || (thisPage.indexOf("scgi.")!=-1)){
	document.write("<SCRIPT SRC=\"" + machine + path + "cobrand_functions.js\"></SCRIPT>");
	//document.write("<SCRIPT SRC=\"cobrand_functions.js\"></SCRIPT>");
	var HeaderName = cobrands[siteID];
	if(siteID=="1"){  									//exception for aol.com
		HeaderName = cobrands[siteID]+"com"; 
	}
}

function writeHeader(){
	if (siteID != "0"){
		var autos = "";
		if ((( (thisPage.indexOf("motors/") > 0) || (thisPage.indexOf("motors.") > 0)) && (thisPage.indexOf("ebayisapi.dll?signin&usingssl=1") == -1))){
			autos="autos."; 							//  use auto header when it's ebaymotors
			}
		document.write("<SCRIPT SRC=\"" + machine + path + "headers/top/" +autos + "header." + HeaderName + ".js\"></SCRIPT>");
	}
}

function writeBrow(){
	document.write("<SCRIPT SRC=\"" + machine + path + "headers/brow.js\"></SCRIPT>");
}

function writeATC(){ 									//  writes the ATC logo
	if (siteID != "4"){
	document.write("<SCRIPT SRC=\"" + machine + path + "headers/ATC.js\"></SCRIPT>");
	}
}

function writeFooter(){
	//Tim's temporary checkout code-- to be removed once ISAPI fix rollout
	if(QA==""){
		if ((siteID == "0") && ((thisPage.indexOf('/cgi.ebay.com/aw-cgi/ebayisapi.dll?viewitem&item')>-1) || (thisPage.indexOf('/cgi.ebay.com/aw-cgi/ebayisapi.dll?mfcisapicommand=viewitem&item')>-1))){
			document.links[3].href = "https://web.archive.org/web/20021130082955/http://pages.ebay.com/sitemap.html";
			if(document.forms.length > 0){
				if ((document.forms[0].action.indexOf(".ebay.com") < 0)){
					var endedItem = 1;
					for(i=0;i<document.forms[0].length;i++){
						if (document.forms[0].elements[i].name == "transactionid")endedItem++;
						if (document.forms[0].elements[i].value == "UnifiedCheckoutShippingDispatcher")endedItem++;
					}
					if (endedItem >= 3){
						document.forms[0].action = "https://web.archive.org/web/20021130082955/http://cgi3.ebay.com/aw-cgi/eBayISAPI.dll";
						for(i=0;i<document.forms[0].length;i++){
							if (document.forms[0].elements[i].type == "submit")document.forms[0].elements[i].value = "Checkout";
						}
					}
				}
			}
		} 
	} //end of Tim's temporary checkout code
	if (siteID != "0"){
		document.write("<SCRIPT SRC=\"" + machine + path + "footers/footers." + HeaderName + ".js\"></SCRIPT>");
	}
}
var brow = 1;
var atc = 1;
var cbc = 1; 											//  is this file loaded?


/*
     FILE ARCHIVED ON 08:29:55 Nov 30, 2002 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:52:41 Oct 26, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 249.629 (3)
  exclusion.robots: 0.184
  captures_list: 278.486
  load_resource: 164.008
  exclusion.robots.policy: 0.172
  PetaboxLoader3.resolve: 269.945 (3)
  CDXLines.iter: 14.939 (3)
  PetaboxLoader3.datanode: 66.214 (4)
  esindex: 0.013
  RedisCDXSource: 0.934
*/