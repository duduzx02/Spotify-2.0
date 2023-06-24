const songName = document.querySelector('#song-name');
const song = document.querySelector('#song');
const play = document.querySelector('#play');

songName.innerHTML = 'Pai Eu Quero Viver em Ti'

function playSong() {
    song.play();
}

play.addEventListener('click', playSong)


