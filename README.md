# Mountains

Mountains is a multi-user blog prototype with earning badge feature, this project uses MEAN stack and it is not production ready or something similar and only for demonstration.

## Badges

For now there is only four badges.

- Clicker : When you click links a few times.
- No Life : When you spend long time in site.
- Scroller: When you scroll 80% length of a few different long pages.
- Thief   : When you copy/paste and steel contents this web site. 

## Installation

First make sure that mongodb up & running in your system. You can configure settings under `configs/db.js`.

Then just run `npm run setup` in root. After installation app will start automatically. If wont, navigate to <a href="http://localhost:7007">http://localhost:7007</a>.

Other times you can start app with `npm run start` command in root.

Note: Be patient about installation, it can take a while.

## Background Info

When you start mountains it will run three service. The site, api and watcher.

## Requirements

- NodeJS 4.2.2 or later. (LTS Versions are Recommended) 
- Modern browsers.

Note: node-gyp not work well with NodeJS 5.x versions right now, so if you're getting node-gyp error, switch to LTS version of NodeJS like 4.2.2

## TODOs

- Improve API responses. Let user know what went wrong.
- Make controller/services load automatically. 
- Auto log-in user after registration.

## Thanks

Thanks to my friend <a href="http://hellocihan.com" target="_blank">Cihan</a> for design. But please note that i had to simplify a few details because of limited time.
