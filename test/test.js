WiFiControl = require("../lib/wifi-control.js");
WiFiControl.init({
  debug: true
});
//console.log( WiFiControl.scanForWiFi() );
console.log( WiFiControl.resetWiFi() );
/*
console.log( WiFiControl.connectToAP({
  ssid: "Photon-LDYW"
}) );
console.log( WiFiControl.getIfaceState() );
*/
