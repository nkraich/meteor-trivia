/**
 * @author Alexander Manzyuk <admsev@gmail.com>
 * Copyright (c) 2012 Alexander Manzyuk - released under MIT License
 * https://github.com/admsev/jquery-play-sound
 * Usage: $.playSound('http://example.org/sound.mp3');
**/

initMisc = function() {

  $.extend({
    playSound: function(){
      return $("<embed src='"+arguments[0]+".mp3' hidden='true' autostart='true' loop='false' class='playSound'>" + "<audio autoplay='autoplay' style='display:none;' controls='controls'><source src='"+arguments[0]+".mp3' /><source src='"+arguments[0]+".ogg' /></audio>").appendTo('body');
    }
  });

};

//--------------
//  UI Helpers
//--------------

Handlebars.registerHelper('addLinks', function(text) {
  var result = Autolinker.link(text);
  return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('sanitizeContent', function(content){
  //content = jQuery(content).text();
  content = content.replace(/<(?:.|\n)*?>/gm, '');
  content = Autolinker.link(content);
  return new Handlebars.SafeString(content);
  //content = XBBCODE(content);
  //return _.escape(content);
});
