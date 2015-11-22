// Login Service.
module.exports = ['$resource', '$rootScope', function($resource, $rootScope){
  // Create login service istance.
  var service = $resource($rootScope.settings.apiHost + '/api/public/login', {}, {
      login: {
        method  : 'POST',
        isObject: true
      }
  });

  // Create api.
  return {
    login: function(payload){
      return service.login(payload).$promise;
    }
  }
}];