// Require model.
var Badge = require('server/models/badge');

// Scroller badge.
new Badge({
  codename      : 'scroller',
  imagename     : 'scroller.png',
  name          : 'Scroller',
  info          : 'You saw what lives at deepest.',
  requirements  : {
    event   : ['scroll'],
    count   : 3,
    percent : 80,
    paths   : [String]
  }
}).save();

// Clicker badge.
new Badge({
  codename      : 'clicker',
  imagename     : 'clicker.png',
  name          : 'Clicker',
  info          : 'You clicked buttons like there is no tomorrow.',
  requirements  : {
    event : ['click'],
    count : 5
  }
}).save();

// No life badge.
new Badge({
  codename      : 'nolife',
  imagename     : 'nolife.png',
  name          : 'No Life',
  info          : 'You dont have any other life than site.',
  requirements  : {
    event : ['heartbeat'],
    time: 1 * 60 * 1000
  }
}).save();

// Thief.
new Badge({
  codename      : 'thief',
  imagename     : 'thief.png',
  name          : 'Thief',
  info          : 'You steel everything from this blog! You need GoT kinda shaming!',
  requirements  : {
    event: ['copy', 'cut'],
    count: 10
  }
}).save();

// Log
console.log('Badges saved.');