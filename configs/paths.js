// pathss.
var paths = {};
    paths.bower       = "bower_components/";
    paths.node        = "node_modules/";
    paths.public      = "public/";
    paths.html        = paths.public   + "html/";
    paths.templates   = paths.public   + "templates/";
    paths.assets      = paths.public   + "assets/";
    paths.build       = paths.public   + "build/";
    paths.app         = paths.public   + "app/";
    paths.js          = paths.assets   + "js/";
    paths.css         = paths.assets   + "styles/";
    paths.fonts       = paths.assets   + "fonts/";
    paths.img         = paths.assets   + "img/";
    paths.build_js    = paths.build    + "js/";
    paths.build_css   = paths.build    + "css/";
    paths.build_tpl   = paths.build    + "tpl/";
    paths.build_html  = paths.build    + "html/";
    paths.build_fonts = paths.build    + "fonts/";
    paths.build_img   = paths.build    + "img/";

// Export
module.exports = paths;