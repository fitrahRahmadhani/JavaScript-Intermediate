const p3 = document.querySelector('section#b p');
let counter = 3;
p3.addEventListener('click', () => {
    const ul = document.querySelector('section#b ul');
    const newLiElement = document.createElement('li');
    const newLiContent = document.createTextNode(`Item ${++counter}`);
    newLiElement.appendChild(newLiContent);
    ul.appendChild(newLiElement);
})
