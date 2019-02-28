var playing = false;

function getMetadata() {
	$.ajax({
		url: BASE_URL + "/metadata.php"
	}).done(function(data) {
		$('#artist').text(data.artist);
		$('#album').text(data.album);
		$('#track').text(data.track);
	});
}

$(document).ready(function() {

	$("#title").text(TITLE);

	$("#play_button").click(function() {
		if (playing) {
			$("#player").trigger('pause');
			$("#play_button_inner").removeClass("fa-stop");
			$("#play_button_inner").addClass("fa-play");
		}
		else {
			if (!$("#player").attr("src")) $("#player").attr("src", BASE_URL + "/stream.php?"+Date.now());
			$("#player").trigger('play');
			$("#play_button_inner").removeClass("fa-play");
			$("#play_button_inner").addClass("fa-stop");
			getMetadata();
		}
		playing = !playing;
	});

	document.getElementById("player").onended = function() {
		$("#player").attr("src", BASE_URL + "/stream.php?"+Date.now())
		$("#player").trigger('play');
		getMetadata();
	};

});
