{
  $('button#play-pause').on('click', function() {
    helper.playPauseAndUpdate(player.currentlyPlaying);
    $(this).attr('playState', player.playState);
  });

$('button#next').on('click', function() {
  if (player.playState !== 'playing') { return; }

  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  const nextSongIndex = currentSongIndex + 1;
  if (nextSongIndex >= album.songs.length) { return; }

  const nextSong = album.songs[nextSongIndex];
  helper.playPauseAndUpdate(nextSong);
});

$('button#previous').on('click', function() {
  if (player.playState !== 'playing') { return; }

  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  const previousSongIndex = currentSongIndex - 1;
  if (previousSongIndex <= -1) { return; }

  const previousSong = album.songs[previousSongIndex];
  helper.playPauseAndUpdate(previousSong);
  });

$('#time-control input').on('input', function (event) {
  player.skipTo(event.target.value);
});

setInterval( () => {
   if (player.playState !== 'playing') { return; }
   const currentTime = player.getTime();
   const duration = player.getDuration();
   const percent = (currentTime / duration) * 100;
   $('#time-control .current-time').text(player.humanReadableTime(currentTime));
   $('#time-control .total-time').text(player.humanReadableTime(duration));
   $('#time-control input').val(percent);
}, 1000);

$('#volume-control input').on('input', function (event) {
   player.setVolume(event.target.value);
   changeVolume();
});

function changeVolume () {
  if (player.playState !== 'playing') { return; }
     const currentVolume = player.soundObject.getVolume(); //changed player.getVolume() to player.soundObject.getDuration()()
     const maxVolume = 100;
     const percent = (currentVolume / maxVolume) * 100;
     $('#volume-control .current-volume').text( currentVolume );
     $('#volume-control input').val(percent);
}
}
