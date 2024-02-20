const container = document.querySelector('.container');
container.addEventListener('click', (e) => {
    if(e.target.className == 'thumb'){
        let jumbo = e.target.parentElement.previousElementSibling.src;
        let thumb = e.target.src;
        [jumbo, thumb] = [thumb, jumbo];

        e.target.parentElement.previousElementSibling.setAttribute('src',jumbo);
        e.target.setAttribute('src',thumb);
        e.target.parentElement.previousElementSibling.classList.add('fade');
        setTimeout(function(){
            e.target.parentElement.previousElementSibling.classList.remove('fade');
        },500)
        
    }
})