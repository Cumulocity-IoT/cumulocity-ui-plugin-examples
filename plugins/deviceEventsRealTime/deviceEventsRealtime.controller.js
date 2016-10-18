(function() {
  'use strict';

  angular.module('myapp.deviceEventsRealTime')
    .controller('deviceEventsRealTimeCtrl', DeviceEventsRealTimeController);

  function DeviceEventsRealTimeController($scope, $routeParams, c8yRealtime) {
    var deviceId = $routeParams.deviceId;
    var eventsChannel = '/events/' + deviceId;

    function startRealtime() {
      c8yRealtime.start($scope.$id, eventsChannel);
    }

    function setUpListeners() {
      c8yRealtime.addListener($scope.$id, $scope.realtimeChannel, $scope.$id + '-subscribed', subscribeListener);
      c8yRealtime.addListener($scope.$id, $scope.realtimeChannel, 'CREATE', createListener);
      c8yRealtime.addListener($scope.$id, $scope.realtimeChannel, 'DELETE', deleteListener);
    }

    function stopRealtime() {
      c8yRealtime.stop($scope.$id, eventsChannel);
    }

    function subscribeListener() {
      alert('works');
    }

    function createListener() {
      alert('created');
    }

    function deleteListener() {
      alert('created');
    }

    $scope.events = [];
    $scope.$on('$destroy', stopRealtime);

    startRealtime();
  }

}());
