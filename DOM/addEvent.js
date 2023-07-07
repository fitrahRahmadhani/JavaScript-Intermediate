const boxPink = document.getElementById("test-event");

function mouseOver() {
    boxPink.innerHTML = "Hai!"; // mengganti teks ketika mouse diarahkan ke dalam box
    boxPink.style.backgroundColor = "blue"; // mengganti warna background ketika mouse diarahkan ke dalam box
}

function mouseOut() {
    boxPink.innerHTML = "Mouse Over Me!"; // mengganti teks ketika mouse diarahkan ke luar box
    boxPink.style.backgroundColor = "pink"; // mengganti warna background ketika mouse diarahkan ke luar box
}
boxPink.addEventListener("mouseover", mouseOver);
boxPink.addEventListener("mouseout", mouseOut);