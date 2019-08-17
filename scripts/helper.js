class Helper {

	    playPauseAndUpdate(song) {
	      player.playPause(song);
	      let totalTime = 'null';
          if (player.playState !== 'playing') {
	           totalTime = song.duration;
	      } else {
	        totalTime = player.getDuration();
	    }

	    $('#time-control .total-time').text(totalTime);

	};
}

const helper = new Helper();
