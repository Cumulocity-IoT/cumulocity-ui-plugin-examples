angular.module('myapp.deviceEventsRealTime')
.controller('deviceEventsRealTimeCtrl', ['$scope', '$routeParams', 'c8yNotifications', 'c8yAlert', 'c8yCepModule', 'gettext',
function ($scope, $routeParams, c8yNotifications, c8yAlert, c8yCepModule, gettext) {
  var deviceId = $routeParams.deviceId,
    eventsChannel = '/events/' + deviceId,
    cepModule = {
      name: 'c8yui_realtime_device_events',
      body: 'insert into\n' +
        '  SendNotification\n' +
        'select\n' +
        '  e.event as payload,\n' +
        '  "events/" || e.event.source.value as channelName\n' +
        'from\n' +
        '  EventCreated e;',
      status: 'DEPLOYED'
    },
    subscription;

  function subscribe() {
    if (!subscription) {
      c8yCepModule.createOrDeploy(cepModule)
      .then(c8yNotifications.configure)
      .then(angular.bind({}, c8yNotifications.subscribe, eventsChannel))
      .then(function (_subscription) {
        c8yAlert.success(gettext('Connected! Waiting for incoming events...'));
        subscription = _subscription;
        subscription.$on('message', onMessage);
      });
    }
  }

  function onMessage(evt, event) {
    $scope.events.push(event);

    while ($scope.events.length > 100) {
      $scope.events.shift();
    }
  }

  function onDestroy() {
    if (subscription && subscription.unsubscribe) {
      subscription.unsubscribe();
    }
  }
  
  function getEventText(event){
      return event.data.text || gettext('-- no text message --');
  }

  $scope.events = [];
  $scope.$on('$destroy', onDestroy);
  $scope.getEventText = getEventText;

  subscribe();
}]);