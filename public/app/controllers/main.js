// Main controller.
module.exports = ['$scope', '$rootScope', '$document', 'Notification', function($scope, $rootScope, $document, Notification) {
  // socket instance.
  var socket;
  
  // On connect.
  function onConnect(){
    // When server want us to start report.
    socket.on('report', function(){
      // Register document events to send messages.
      $document.on('click scroll cut copy', function(event){
        // Send event directly to server.
        socket.send({
          event: {
            type    : event.type,
            target  : event.target.nodeName.toLowerCase()
          },

          window: {
            scrollY : window.scrollY,
            height  : Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
            viewport: window.innerHeight
          },

          location: {
            pathname: location.pathname
          }
        });
      });

      // Send heartbeat on every 30 second. 
      $scope.heartbeat = setInterval(function(){
        socket.send({event: { type: 'heartbeat' }});
      }, 30000);

      // Listen.
      socket.on('message', onMessage);
      socket.on('reward', onReward);
    });  

    // Send toket to socket.
    socket.emit('login', $rootScope.user.token);
  }

  // On message.
  function onMessage(msg){
  }

  // On message.
  function onReward(badgeInfo){
    $scope.badgeInfo = badgeInfo;
    Notification({delay:5000, templateUrl:'/tpl/notifications/badge.tpl', scope: $scope});
  }

  // Connect to socket.
  $scope.initWatcher = function(){
    // Create socket.
    socket = $scope.socket = io('http://localhost:7009', {'forceNew': true});
    
    // On socket connect.
    socket.on('connect', onConnect);
  };

  // Create socket if user logged in.
  if($rootScope.user.logged) $scope.initWatcher();
}];