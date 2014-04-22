hulucastable
============

A tool to make it so hulu videos open in a chrome castable manner


Simply drag the link below to your bookmarks bar, and click it on a page in hulu.  Any video link where the background behind the text is now red, you can click to open it in the correct mode to cast it to your chromecast.  Eventually I hope to make this a plugin or extension so it will do this automatically, but for now it's a bookmarklet.

<a href="javascript:(function(){;var%20numDependencies=0,loadedDependencies=0;function%20scriptLoaded()%7BloadedDependencies++;if(numDependencies===loadedDependencies)%7BafterDepsLoaded()%7D%7Dfunction%20afterDepsLoaded()%7Bjavascript:(function()%7B$(%22.beacon-click%22).each(function(i,el)%7Bvar%20videoBase=$(el).find(%22img%22)%5B0%5D;if(videoBase!==undefined)%7Bvar%20videoIDStr=$(el).find(%22img%22).attr(%22src%22);if(videoIDStr.indexOf(%22deo/%22)%3E0)%7BvideoIDStr=videoIDStr.substring(videoIDStr.indexOf(%22deo/%22)+4,videoIDStr.indexOf(%22?%22));$(el).attr(%22href%22,%22/stand_alone/%22+videoIDStr);$(%22.beacon-click%20.description%22).css(%22background-color%22,%22#900%22)%7D%7D%7D)%7D)()%7DafterDepsLoaded();})()">dragme</a>
