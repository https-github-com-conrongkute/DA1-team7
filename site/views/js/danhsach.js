var showtim = document.getElementById('showtim');
var an = document.getElementById('an');
var hien = document.getElementById('hien');

function showtimkiem() {
    showtim.style.display = 'block';
    an.style.display = 'none';
    hien.style.display = 'block';
}

function exit() {
    showtim.style.display = 'none';
    an.style.display = 'block';
    hien.style.display = 'none';
}