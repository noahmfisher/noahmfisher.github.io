var AIMExpress = new Object();
AIMExpress.defaults = {
    host: 'https://web.archive.org/web/20031005172505/http://aimexpress.aol.com/',
    checkurl: 'https://web.archive.org/web/20031005172505/http://www.aol.com/ae/CheckAIM.html',
    buddyListWidth: 170,
    buddyListHeight: 430,
    buddyListX: 630,
    buddyListY: 5,
    useNative: true,
    autoLaunch: false,
    autoThrottle: 0,
    END:0
};
AIMExpress.versionString = "$Revision: 1.11 $";
AIMExpress.start = function() {
    var ae = window.AIM_EXPRESS;
    var ad = AIMExpress.defaults;
    ae = ae ? ae : new Object();
    for (var key in ad) {
        if (ae[key] == void 0) {
            ae[key] = ad[key];
        }
    }
    var x=(screen.width-w)/2;
    var y=(screen.height-h)/2;
    var url = ae.host + '/Login.svc';
    var w =725;
    var h = 400;
    if (ae.useNative) {
        w = 100;
        h = 100;
        x = y = 2000;
        url = ae.checkurl;
    }
    window.open(
        url + '?' + 
        'host=' + escape(ae.host) + 
        '&width=' + ae.buddyListWidth + 
        '&height=' + ae.buddyListHeight + 
        '&x=' + ae.buddyListX + 
        '&y=' + ae.buddyListY,
        '',
        'resizable=yes,scrollbars=yes,width=' + w + ',height=' + h + ',left=' + x + ',top=' + y
    );
}
AIMExpress.onload = function(anEvent) {
    if (AIMExpress._oldload) {
        AIMExpress._oldload(anEvent);
    }
    if (window.AIM_EXPRESS && window.AIM_EXPRESS.autoLaunch) {
        if (AIMExpress._canAutolaunch(AIM_EXPRESS.autoThrottle)) {
            setTimeout('AIMExpress.start()', 500);
        }
    }
}
AIMExpress._canAutolaunch = function(aLimit) {
    var throttle = document.cookie.match(/ae40Throttle=([^;]*)/);
    if (!throttle) {
        throttle=Math.floor(Math.random()*10000);
        var xdate = new Date(new Date().getTime() + 365*24*3600*1000).toGMTString();
        document.cookie='ae40Throttle=' + throttle + '; expires=' + xdate;
    } else {
        throttle = throttle[1];
    }

    return (throttle >= aLimit);
}
AIMExpress._oldload = window.onload;
window.onload = AIMExpress.onload;
/*
     FILE ARCHIVED ON 17:25:05 Oct 05, 2003 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:58:38 Oct 26, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.221
  PetaboxLoader3.resolve: 62.798
  PetaboxLoader3.datanode: 142.716 (4)
  esindex: 0.021
  LoadShardBlock: 130.024 (3)
  CDXLines.iter: 22.715 (3)
  RedisCDXSource: 8.446
  load_resource: 89.934
  exclusion.robots.policy: 0.207
  captures_list: 174.106
*/