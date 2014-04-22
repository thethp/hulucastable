javascript:(function(){
  $('.beacon-click').each(function(i, el) {
    var videoBase = $(el).find('img')[0];
    if(videoBase !== undefined) {
      var videoIDStr = $(el).find('img').attr('src');
      if(videoIDStr.indexOf('deo/') > 0) {
        videoIDStr = videoIDStr.substring(videoIDStr.indexOf('deo/')+4,videoIDStr.indexOf('?'));
        $(el).attr('href', '/stand_alone/'+videoIDStr);
        $('.beacon-click .description').css('background-color','#900');
      }
    }
  });
})();
