function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
  document.getElementById("Server").innerHTML = servername;
  document.getElementById("Map").innerHTML = mapname;
}
function DownloadingFile( fileName ) {
  document.getElementById("FileLoad").innerHTML = fileName;
}
function SetStatusChanged( status ) {
  document.getElementById("FileStatus").innerHTML = status;
}
