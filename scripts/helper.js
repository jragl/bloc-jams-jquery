class Helper {

	    playPauseAndUpdate(song) {
	      player.playPause(song);
	      let totalTime = 'null';
          if (player.playState !== 'playing') {
//	           totalTime = song.duration;
						totalTime = song.duration;
	      } else {
	        totalTime = player.getDuration();
	    }

	    $('#time-control .total-time').text(player.duration);

	};
}

const helper = new Helper();
