const sets = [];
let idCount = 1;

const root = document.querySelector('#root');

//Main page wrapper
const mainDiv = document.createElement('div');
mainDiv.classList.add('hidden');

const mainTitle = createTitle('Main page');
const addButton = createButton('Add set', () => location.hash = '/add');
const setsList = document.createElement('ul');
appendItemstoSetsList();
appendChildren(mainDiv, mainTitle, addButton, setsList);


//Add new set wrapper
const addDiv = document.createElement('div');
addDiv.classList.add('hidden');

const addTitle = createTitle('Add new set');
const inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'name');
const termsButton = createButton('Add terms', termsButtonHandler);
function termsButtonHandler() {
    const termDiv = document.createElement('div');
    termDiv.classList.add('terms');
    const termInput = document.createElement('input');
    const definitionInput = document.createElement('input');
    const removeButton = createButton('Remove', () => termDiv.remove());
    appendChildren(termDiv, termInput, definitionInput, removeButton);
    addDiv.appendChild(termDiv);
}
const saveButton = createButton('Save changes', saveButtonHandler);
function saveButtonHandler() {
    const setName = document.querySelector('[name]').value;
    const termDivs = document.querySelectorAll('.terms');
    const terms = [];
    for (const termDiv of termDivs) {
        terms.push({ term: termDiv.children[0].value, definition: termDiv.children[1].value })
    }
    const set = { id: idCount, isStudied: false, name: setName, terms: terms };
    idCount++;
    sets.push(set);
    appendItemstoSetsList();
    location.hash = '';
}
const cancelButton = createButton('Cancel', () => location.hash = '');

appendChildren(addDiv, addTitle, inputName, termsButton, saveButton, cancelButton);


//Modify set wrapper
const modifyDiv = document.createElement('div');
modifyDiv.classList.add('hidden');

const modifyTitle = createTitle('Modify set');

appendChildren(modifyDiv, modifyTitle);

//append all pages to root
appendChildren(root, mainDiv, addDiv, modifyDiv);

routesHandler();

window.addEventListener('hashchange', routesHandler);

function routesHandler() {
    if (location.hash.substring(1) === '') {
        pageToShow(mainDiv);
    }

    if (location.hash.substring(1) === '/add') {
        pageToShow(addDiv);
    }

    if (location.hash.substring(1) === '/modify/:item_id') {
        pageToShow(modifyDiv);
    }
}

function createButton(textContent, clickEventListener) {
    const button = document.createElement('button');
    button.textContent = textContent;
    button.addEventListener('click', clickEventListener);
    return button;
}

function createTitle(textContent) {
    const title = document.createElement('h1');
    title.textContent = textContent;
    return title;
}

function pageToShow(pageDiv) {
    pages = root.children;
    for (const page of pages) {
        page.classList.add('hidden');
    }
    pageDiv.classList.remove('hidden');
};

function appendChildren(parent, ...children) {
    for (const child of children) {
        parent.appendChild(child);
    }
}

function appendItemstoSetsList() {
    sets.map(set => {
        const setItem = document.createElement('li');
        setItem.textContent = set.name;
        const editButton = createButton('Edit', () => location.hash = `/modify/${set.id}`);
        const removeButton = createButton('Remove', () => setItem.remove());

        appendChildren(setItem, editButton, removeButton);
        setsList.appendChild(setItem);
    })
}

function moveSets(oldIndex, newIndex) {
    sets.splice(newIndex, 0, sets.splice(oldIndex, 1)[0]);
}