# PHPsychedelicRadioStreaming
Simple radio streaming webapp that can be hosted on a simple shared PHP server, without any depencende like shoutcast, icecast or any transcoder.
And with psychedelic backgrounds :)

## Configuration

1. Put songs into `data` with the filename format `ARTIST - ALBUM - TRACK TITLE.mp3`. `TRACK` are two digits.
2. Put background images into `www/imgs` with the filename format `img{N}.jpg`. `N` starts with 1.
3. Copy `www/js/config.js.example` to `www/js/config.js` and set your own variables.
4. Configure your server to make the files from `www` public but not the folder `data`.
5. Run your server.
6. Play music!