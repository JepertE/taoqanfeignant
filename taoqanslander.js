const derniereVideo = new Date("2026-11-04T16:00:35Z");

let audioElement = null;
let alarmeActive = false;
let alarmeCoupee = false;

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
        if (alarmeCoupee) return;
        if (audioElement === null) {
            audioElement = new Audio('/alarme.mp3');
            audioElement.loop = true;
            audioElement.volume = 1;
        }
        audioElement.play()
            .then(() => {
                alarmeActive = true;
                console.log('Alarme autodéclenchée');
                btn.textContent = 'Couper l\'alarme';
                container.classList.add('visible');
            })
            .catch(() => {
                if (!alarmeActive) {
                    container.classList.add('visible');
                    btn.textContent = 'Activer l\'alarme';
                }
            });
    } else {
        container.classList.remove('visible');
            if (audioElement !== null) {
                audioElement.pause();
                audioElement.currentTime = 0;
                audioElement = null;
                alarmeActive = false;
        }
    }
}

document.getElementById('alarmeBtn').addEventListener('click', function() {
    const container = document.getElementById('alarmeContainer');
    if (alarmeActive) {
        audioElement.pause();
        audioElement.currentTime = 0;
        alarmeActive = false;
        alarmeCoupee = true;
        container.classList.remove('visible');
        console.log('Alarme coupée');
        return;
    }
    if (audioElement === null) {
        audioElement = new Audio('/alarme.mp3');
        audioElement.loop = true;
        audioElement.volume = 1;
    }
    audioElement.play()
        .then(() => {
            alarmeActive = true;
            this.textContent = 'Couper l\'alarme';
            container.classList.add('visible');
            console.log('Alarme activée');
        })
        .catch((err) => {
            console.warn('Erreur lecture audio:', err);
            alert('Recliquez sur la page please');
        });
});

document.addEventListener('click', function premierClic() {
    if (parseInt(document.getElementById('counter').textContent) === 0 && !alarmeActive && !alarmeCoupee) {
        document.getElementById('alarmeBtn').click();
    }
    document.removeEventListener('click', premierClic);
}, { once: true });

update();
async function rafraichir() {
    if (document.visibilityState !== 'visible') return;
    try {
        const reponse = await fetch('/', { cache: 'no-store' });
        const doc = new DOMParser().parseFromString(await reponse.text(), 'text/html');
        const valeur = doc.getElementById('counter')?.dataset.jours;
        if (!isNaN(parseInt(valeur, 10))) {
            document.getElementById('counter').dataset.jours = valeur;
        }
    } catch (e) {
    }
    update();
}

document.addEventListener('visibilitychange', rafraichir);
setInterval(rafraichir, 1800000);

(function () {
    const overlay = document.getElementById('bienvenue');
    const closeBtn = document.getElementById('bienvenue-finito');
    const infoBtn = document.getElementById('info-btn');

    if (!overlay || !closeBtn || !infoBtn) return;

    const ouvrir = () => {
        overlay.hidden = false;
        closeBtn.focus();
    };

    const fermer = () => {
        overlay.hidden = true;
        infoBtn.focus();
    };

    infoBtn.addEventListener('click', ouvrir);
    closeBtn.addEventListener('click', fermer);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !overlay.hidden) fermer();
    });
})();