//Interesting scenario: hulu does not actually load a new page every time, they simply replace everything with javascript.
//So a onload for the page alone will not work, you have to do a set timeout, which, incidentally is what they do.

window.onload = setInterval(addHuluCastable, 100);

function addHuluCastable() {
  $('.beacon-click').each(function(i, el) {
    var videoBase = $(el).find('img')[0];
    if(videoBase !== undefined) {
      var videoIDStr = $(el).find('img').attr('src');
      if(videoIDStr.indexOf('deo/') > 0) {
        videoIDStr = videoIDStr.substring(videoIDStr.indexOf('deo/')+4,videoIDStr.indexOf('?'));
        $(el).attr('href', '/stand_alone/'+videoIDStr);
        $('.beacon-click .description').css('background-color','#A1CB39');
      }
    }
  });
}
