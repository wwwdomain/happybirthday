function updateTime() {

    const now = new Date();

    const birthday = new Date(now.getFullYear(), 6, 14, 0, 0, 0);

    const diff = birthday - now;

    if (diff <= 0 && now.getMonth() === 6 && now.getDate() === 14) {
        document.getElementById("birthdayScreen").style.display = "flex";
        clearInterval(timer);
        return;
    }

    let target = birthday;

    if (diff < 0) {
        target = new Date(now.getFullYear() + 1, 6, 14, 0, 0, 0);
    }

    const remain = target - now;

    document.getElementById("days").textContent =
        Math.floor(remain / 86400000);

    document.getElementById("hours").textContent =
        Math.floor(remain / 3600000) % 24;

    document.getElementById("minutes").textContent =
        Math.floor(remain / 60000) % 60;

    document.getElementById("seconds").textContent =
        Math.floor(remain / 1000) % 60;
}

let timer;

timer = setInterval(updateTime, 1000);
updateTime();
        // ---------- MUSIC PLAYER ----------
        const songs = [
            "audio.mp3",
            "audio2.mp3",
            "audio3.mp3"
        ];

        let currentSong = 0;
        const player = document.getElementById("myaudio");
        player.src = songs[currentSong];

        // load first song metadata (optional)
        player.load();

        function playPause() {
            const icon = document.getElementById("playIcon");
            if (player.paused) {
                player.play();
                icon.className = "fas fa-pause";
            } else {
                player.pause();
                icon.className = "fas fa-play";
            }
        }

        function nextSong() {
            currentSong = (currentSong + 1) % songs.length;
            player.src = songs[currentSong];
            player.play();
            document.getElementById("playIcon").className = "fas fa-pause";
        }

        function prevSong() {
            currentSong = (currentSong - 1 + songs.length) % songs.length;
            player.src = songs[currentSong];
            player.play();
            document.getElementById("playIcon").className = "fas fa-pause";
        }

        // auto-play next when song ends
        player.addEventListener("ended", function() {
            nextSong();
        });

        // update play icon when user pauses via browser controls (optional)
        player.addEventListener("pause", function() {
            document.getElementById("playIcon").className = "fas fa-play";
        });
        player.addEventListener("play", function() {
            document.getElementById("playIcon").className = "fas fa-pause";
        });

        
        
