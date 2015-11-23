// Post Service.
module.exports = ['$resource', '$rootScope', function($resource, $rootScope){
  // Post service istance.
  var saveService = $resource($rootScope.settings.apiHost + '/api/private/post', {}, {
      post: {
        method  : 'POST',
        isObject: true
      }
  });

  // Get service.
  var getService = $resource($rootScope.settings.apiHost + '/api/public/posts', {}, {
      get: {
        method  : 'GET',
        isArray : true
      }
  });  

  // Read service.
  var readService = $resource($rootScope.settings.apiHost + '/api/public/read', {}, {
      read: {
        method  : 'POST',
        isObject: true
      }
  });

  // Create api.
  return {
    post: function(payload){
      return saveService.post(payload).$promise;
    },

    get : function(){
      return getService.get().$promise;
    },

    read : function(payload){
      return readService.read(payload).$promise;
    }
  }
}];