let player;
const playerContainr = $('.player');

let eventsInit = () => {
  $(".player__playback-button").click(e => {
    e.preventDefault();

      const btn = $(e.currentTarget);

      //playerContainer.addClass("paused");
      player.playVideo();
  })
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '405',
    width: '660',
    videoId: '6eHN3daGoYQ',
    events: {
      //'onReady': onPlayerReady,
      //'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  });
}




const onPlayerReady = () => {
  let interval;
  const durationSec = video.getDuration();
  $(".duration_finally").text(durationSec);

  if (typeof interval !== "undefined") {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec / durationSec) * 100;

    $(".player__duration_btn").css({
      left: `${completedPercent}%`
    });

  })
}