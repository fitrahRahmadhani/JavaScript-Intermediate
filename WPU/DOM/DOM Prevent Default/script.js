const closeButton = document.querySelectorAll('.close');

closeButton.forEach(function(element){
    element.addEventListener('click', (e) => {
        e.target.parentElement.style.display = 'none';
        // Menghilangkan aksi default menggunakan prevent default
        e.preventDefault()

    })
})