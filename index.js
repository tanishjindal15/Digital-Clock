function createRain() {
    const body = document.body;
    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.classList.add('rain');
        drop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        drop.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random animation duration
        body.appendChild(drop);
    }
}
function clocktime()
{
    const date= new Date();
    const hours=date.getHours();
    const time= hours>12?"PM":"AM";
    const hour=(hours>=12? hours-12:hours).toString().padStart(2,0);// pads up to 2 zero and we have to convert it in string
    const minutes=date.getMinutes().toString().padStart(2,0);
    const seconds=date.getSeconds().toString().padStart(2,0);
    const textstring=`${hour}:${minutes}:${seconds}  ${time}`;
    document.getElementById("clock").textContent=textstring;
    if (seconds) {
        const audioPlayer = document.getElementById("audioPlayer");
        audioPlayer.play().catch(error => console.log('Audio playback failed:', error));
    }
}
clocktime();
setInterval(clocktime,1000);
createRain(); 