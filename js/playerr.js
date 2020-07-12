 
  var video = document.getElementById("video");

  var playButton = document.getElementById("play-pause");
  var playBigButton = document.getElementById("player__start");
  var muteButton = document.getElementById("mute");
  

  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");


// vladimirovskie shtuchki 


var i = setInterval(function() {
	if(video.readyState > 0) {
		var minutes = parseInt(video.duration / 60, 10);
		var seconds = video.duration % 60;

		// (Put the minutes and seconds in the display)

		clearInterval(i);
  }
  
  console.log(i);
}, 200);

  
 



// end of vladimirovskie

playButton.addEventListener("click", function() {
  if (video.paused == true) {
    
    video.play();

    $('.player__start').css({
      'display': 'none'
    });
    
    $('.playback-icon').css({
      'display': 'none'
    });

    $('#play-pause').removeClass('player__playback-button');
    $('#play-pause').addClass('paused');
    
  } else {
   
    video.pause();

    if ($('.player__start').css('display') == 'none') {
      $('.player__start').css({
        'display': 'block'
      })
    }

    if ($('.playback-icon').css('display') == 'none') {
      $('.playback-icon').css({
        'display': 'block'
      })
    }

    $('#play-pause').removeClass('paused');
    $('#play-pause').addClass('player__playback-button');
    
  }
});

playBigButton.addEventListener("click", function() {
  if (video.paused == true) {
    
    video.play();

    $('.player__start').css({
      'display': 'none'
    })

    $('.playback-icon').css({
      'display': 'none'
    });

    $('#play-pause').removeClass('player__playback-button');
    $('#play-pause').addClass('paused');

  } else {
   
    video.pause();
    
  }
});


muteButton.addEventListener("click", function() {
  if (video.muted == false) {
  
    video.muted = true;

  } else {
    
    video.muted = false;

  }
});

seekBar.addEventListener("click", function() {
  
})
