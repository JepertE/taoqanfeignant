const derniereVideo = new Date("2026-09-04T18:00:26Z");

let audioElement = null;
let alarmeActive = false;

function update() {
    const counterElement = document.getElementById('counter');
    let jours = parseInt(counterElement.dataset.jours, 10);

    if (isNaN(jours)) {
        const maintenant = new Date();
        jours = Math.floor((maintenant - derniereVideo) / (1000 * 60 * 60 * 24));
    }

    counterElement.textContent = jours;

    const container = document.getElementById('alarmeContainer');
    const btn = document.getElementById('alarmeBtn');

    if (jours === 0) {
        if (audioElement === null) {
            audioElement = new Audio('/alarme.mp3');
            audioElement.loop = true;
            audioElement.volume = 1;
        }
        audioElement.play()
            .then(() => {
                alarmeActive = true;
                console.log('Alarme autodéclenchée');
                container.style.display = 'none';
            })
            .catch(() => {
                if (!alarmeActive) {
                    container.style.display = 'block';
                    btn.textContent = 'Activer l\'alarme';
                }
            });
    } else {
        container.style.display = 'none';
        if (audioElement !== null) {
            audioElement.pause();
            audioElement.currentTime = 0;
            audioElement = null;
            alarmeActive = false;
        }
    }
}

document.getElementById('alarmeBtn').addEventListener('click', function() {
    if (audioElement === null) {
        audioElement = new Audio('/alarme.mp3');
        audioElement.loop = true;
        audioElement.volume = 1;
    }
    audioElement.play()
        .then(() => {
            alarmeActive = true;
            document.getElementById('alarmeContainer').style.display = 'none';
            console.log('Alarme activée');
        })
        .catch((err) => {
            console.warn('Erreur lecture audio:', err);
            alert('Recliquez sur la page please');
        });
});

document.addEventListener('click', function premierClic() {
    if (parseInt(document.getElementById('counter').textContent) === 0 && !alarmeActive) {
        document.getElementById('alarmeBtn').click();
    }
    document.removeEventListener('click', premierClic);
}, { once: true });

update();
setInterval(update, 300000);