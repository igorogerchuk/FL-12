const root = document.querySelector('#root');
let title = document.createElement('h1');
root.appendChild(title);

//Main page wrapper
const mainDiv = document.createElement('div');
mainDiv.classList.add('hidden');
const addButton = document.createElement('button');
addButton.textContent = 'Add set';
addButton.addEventListener('click', onAddHandler);
function onAddHandler() {
    location.hash = '/add';
}
mainDiv.appendChild(addButton);

//Add new set wrapper
const addDiv = document.createElement('div');
addDiv.classList.add('hidden');

//Modify set wrapper
const modifyDiv = document.createElement('div');
modifyDiv.classList.add('hidden');

root.appendChild(mainDiv);
root.appendChild(addDiv);
root.appendChild(modifyDiv);



routesHandler();

window.addEventListener('hashchange', routesHandler);

function routesHandler() {
    if (location.hash.substring(1) === '/') {
        title.textContent = 'Main page';
        mainDiv.classList.remove('hidden');
        addDiv.classList.add('hidden');
        modifyDiv.classList.add('hidden');
    }

    if (location.hash.substring(1) === '/add') {
        title.textContent = 'Add new set';
        mainDiv.classList.add('hidden');
        addDiv.classList.remove('hidden');
        modifyDiv.classList.add('hidden');
    }

    if (location.hash.substring(1) === '/modify/:item_id') {
        title.textContent = 'Modify set';
        mainDiv.classList.add('hidden');
        addDiv.classList.add('hidden');
        modifyDiv.classList.remove('hidden');
    }
}