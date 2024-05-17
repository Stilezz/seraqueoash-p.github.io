document.getElementById('btnSim').addEventListener('click', function() {
    alert('fodase vai tomar no cu.');
});

const btnNao = document.getElementById('btnNao');
let pos = 0;
const speed = 1; // Velocidade de movimento do botão "Não"

function moveButton() {
    pos += speed;
    btnNao.style.left = pos + 'px';
    
    if (pos > window.innerWidth) {
        pos = -btnNao.offsetWidth;
    }

    requestAnimationFrame(moveButton);
}

moveButton();
