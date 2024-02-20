const closeButton = document.querySelectorAll('.close');

closeButton.forEach(function(element){
    element.addEventListener('click', (e) => {
        e.target.parentElement.style.display = 'none';
    })
})

console.log(closeButton[0].previousElementSibling);