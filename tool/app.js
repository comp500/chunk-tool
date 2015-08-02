angular.module('chunk-app', [])
  .controller('ServerController', function() {
    var server = this;
    server.online = "Offline";
  });
