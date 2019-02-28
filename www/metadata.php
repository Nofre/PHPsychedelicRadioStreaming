<?php

session_start();

# Filename Format: Artist - Album - Track Title.ogg

$metadata = array("artist" => "artist", "album" => "album", "track" => "track");

if (array_key_exists("file", $_SESSION) && preg_match("/(.+) - (.+) - [0-9]{2} (.+).mp3/", $_SESSION["file"], $match)) {
	$metadata["artist"] = $match[1];
	$metadata["album"] = $match[2];
	$metadata["track"] = $match[3];
}

header("Content-type: application/json");
echo utf8_decode(json_encode($metadata));

?>