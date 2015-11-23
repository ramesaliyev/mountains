// Checker func.
module.exports = {
  init: function(params){
    // Set values to status.
    params.status.time = 0
  },

  listener: function(event, params){
    // If clicked element is a.
    params.status.time += 30000;
    
    // If count is enough for badge.
    if(params.status.time >= params.badge.requirements.time){
      // Reward!
      params.reward(params.badge.codename, params);
    }
  }
}