window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    audioData: audios,
    currentAudio: {},
    curretplaying: 0,
    start() {

        this.update();

        this.audio.onended = () => this.next();
    },
    next() {
        this.curretplaying++;

        if (this.curretplaying == this.audioData.length) this.restart();
        this.update();
        this.audio.play();

    },
    update() {
        this.currentAudio = this.audioData[this.curretplaying];

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist;
        this.audio.src = path(this.currentAudio.file);

    },
    restart(){
        this.curretplaying = 0;
        this.update();
    }
};
