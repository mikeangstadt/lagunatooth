var OBDReader = require('bluetooth-obd');
var btOBDReader = new OBDReader();
var dataReceivedMarker = {};

btOBDReader.on('dataReceived', function(data) {
  console.log(data);
  dataReceivedMarker = data;
});

btOBDReader.on('connected', function() {
  //this.requestValueByName("vss"); //vss = vehicle speed sensor

  this.addPoller("vss");
  this.addPoller("rpm");
  this.addPoller("temp");
  this.addPoller("load_pct");
  this.addPoller("map");
  this.addPoller("frp");
  this.addPoller("egt");
  this.addPoller("afr");
  this.addPoller("iat");
  this.addPoller("Individual wheel speed sensors");

  this.startPolling(1000); //Request all values each second.
});

// Use first device with 'bmw' in the name
btOBDReader.autoconnect('bmw');
