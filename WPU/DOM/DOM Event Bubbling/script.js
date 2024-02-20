// const closeButton = document.querySelectorAll('.close');

// closeButton.forEach(function(element){
//     element.addEventListener('click', (e) => {
//         e.target.parentElement.style.display = 'none';
//         // Menghilangkan aksi default menggunakan prevent default
//         e.preventDefault()

//     })
// })

const container = document.querySelector('.container');
container.addEventListener('click', (e) =>{
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault()
    }
})