const root = document.querySelector('#root');
let title = document.createElement('h1');
root.appendChild(title);
const addButton = document.createElement('button');
addButton.textContent = 'Add set';
addButton.addEventListener('click', onAddHandler);
function onAddHandler() {
    location.hash = '/add';
}
title.textContent = 'Main page';
root.appendChild(addButton);

window.addEventListener('hashchange', onHashChangeHandler);

function onHashChangeHandler() {
    if (location.hash.substring(1) === '/') {
        title.textContent = 'Main page';
        root.appendChild(addButton);
    }

    if (location.hash.substring(1) === '/add') {
        title.textContent = 'Add new set';
    }
}