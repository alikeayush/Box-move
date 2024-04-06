const artPiece = document.getElementById('art-piece');
let x = 0, y = 0; 

document.getElementById('move-up').addEventListener('click', () => move(0, -10));
document.getElementById('move-down').addEventListener('click', () => move(0, 10));
document.getElementById('move-left').addEventListener('click', () => move(-10, 0));
document.getElementById('move-right').addEventListener('click', () => move(10, 0));

document.getElementById('color-picker').addEventListener('change', function() {
    artPiece.style.backgroundColor = this.value;
});

document.getElementById('reset').addEventListener('click', function() {
    x = 0;
    y = 0;
    updatePosition();
    artPiece.style.backgroundColor = '#3498db';
});

function move(dx, dy) {
    x += dx;
    y += dy;
    updatePosition();
}

function updatePosition() {
    artPiece.style.transform = `translate(${x}px, ${y}px)`;
}
