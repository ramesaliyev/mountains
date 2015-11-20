// Require model.
var Badge = require('server/models/badge.js');

// Scroller badge.
new Badge({
  name          : 'scroller',
  imagename     : 'scroller.png',
  requirements  : {
    event   : 'scroll',
    count   : 3,
    percent : 80
  }
}).save();

// Clicker badge.
new Badge({
  name          : 'clicker',
  imagename     : 'clicker.png',
  requirements  : {
    event : 'click',
    count : 3
  }
}).save();