// Checker func.
module.exports = {
  init: function(params){
    // Set values to status.
    params.status.count = 0;
    params.status.paths = [];    
  },

  listener: function(event, params){
    
    // Should has long scrollbar. Minimum twice of viewport.
    var hasScrollbar = (event.window.scrollY !== 0 && event.window.height > event.window.viewport * 2);

    // Percent
    var percent = (event.window.scrollY >= (event.window.height - event.window.viewport) / 100 * params.badge.requirements.percent);

    // Different path.
    var diffPath = params.status.paths.indexOf(event.location.pathname) === -1;

    // Check for requiremetns.
    if (hasScrollbar && percent && diffPath) {
      // Increase count.
      params.status.count++;

      // Add path to paths.
      params.status.paths.push(event.location.pathname);

      // Check for count.
      if(params.status.count >= params.badge.requirements.count){
        // Reward!
        params.reward(params.badge.codename, params);
      }
    }
  }
}