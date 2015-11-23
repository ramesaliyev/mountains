// Checker func.
module.exports = {
  init: function(params){
    // Set values to status.
    params.status.count = 0
  },

  listener: function(msg, params){
    // If clicked element is a.
    params.status.count++;
    
    // If count is enough for badge.
    if(params.status.count >= params.badge.requirements.count){
      // Reward!
      params.reward(params.badge.codename, params);
    }  
  }
}