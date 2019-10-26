
			function IECheckClient
				dim result, GSTlbarName
				result = 0
				GSTlbarName = "eBayToolbar.Helper"
				on error resume next
				if IsObject(CreateObject(GSTlbarName)) = False then
					result = 0
				else
					result = 1
				end if
				on error goto 0
				IECheckClient = result
			end function
			function IECheckPilotClient
				dim result, GSTlbarName
				result = 0
				GSTlbarName = "GStlbar.GShelper"
				on error resume next
				if IsObject(CreateObject(GSTlbarName)) = False then
					result = 0
				else
					result = 1
				end if
				on error goto 0
				IECheckPilotClient = result
			end function


/*
     FILE ARCHIVED ON 12:47:44 Dec 02, 2002 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:52:41 Oct 26, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.317
  RedisCDXSource: 1.05
  CDXLines.iter: 14.371 (3)
  LoadShardBlock: 116.258 (3)
  exclusion.robots.policy: 0.297
  load_resource: 215.086
  PetaboxLoader3.resolve: 135.739
  captures_list: 136.879
  esindex: 0.013
  PetaboxLoader3.datanode: 100.698 (4)
*/