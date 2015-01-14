var OBDReader = require('bluetooth-obd');
var btOBDReader = new OBDReader();
var dataReceivedMarker = {};

btOBDReader.on('dataReceived', function(data) {
  console.log("Data Recieved from BMW...");
  console.log(data);
  dataReceivedMarker = data;
});

btOBDReader.on('connected', function() {
  //this.requestValueByName("vss"); //vss = vehicle speed sensor
  console.log("Connected to BMW...")

  this.addPoller("vss");
  this.addPoller("rpm");
  this.addPoller("temp");
  this.addPoller("load_pct");
  this.addPoller("map");
  this.addPoller("frp");
  this.addPoller("egt");
  this.addPoller("afr");
  this.addPoller("iat");
  this.addPoller("iwss");

  this.startPolling(1000); //Request all values each second.
});

// Use first device with 'bmw' in the name
console.log("Connecting to BMW...");
btOBDReader.autoconnect('bmw');
