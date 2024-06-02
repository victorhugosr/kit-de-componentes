document.addEventListener('DOMContentLoaded', function() {
    const togglePlayerBtn = document.getElementById('togglePlayer');
    const player = document.getElementById('player');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeRange = document.getElementById('volumeRange');
    const audio = document.getElementById('audio');

    togglePlayerBtn.addEventListener('click', function() {
        player.classList.toggle('show');
    });

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = '<img src="files/favicons/pause.svg" alt="Pause">';
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '<img src="files/favicons/play.svg" alt="Play">';
        }
    });

    volumeBtn.addEventListener('click', function() {
        volumeSlider.classList.toggle('hidden');
    });

    volumeRange.addEventListener('input', function() {
        audio.volume = volumeRange.value / 100;
    });
});
