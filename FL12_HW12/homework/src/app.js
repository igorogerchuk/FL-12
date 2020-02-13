const sets = !localStorage.getItem('setsArray') ? [] : JSON.parse(localStorage.getItem('setsArray'));
const root = document.querySelector('#root');

//Main page
function createMainPage() {
    const mainDiv = document.createElement('div');

    const mainTitle = createTitle('Main page');
    const addButton = createButton('Add set', () => location.hash = '/add');
    const setsList = document.createElement('ul');
    sets.map(set => {
        if (!set.isStudied) {
            setsList.appendChild(createSetListItem(set))
        }
    });
    sets.map(set => {
        if (set.isStudied) {
            setsList.appendChild(createSetListItem(set))
        }
    });
    appendChildren(mainDiv, mainTitle, addButton, setsList);
    return mainDiv;
}

//Add new set
function createAddPage() {
    const addDiv = document.createElement('div');

    const addTitle = createTitle('Add new set');
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    const termsButton = createButton('Add terms', termsButtonHandler);
    const saveButton = createButton('Save changes', saveButtonHandler());
    const cancelButton = createButton('Cancel', () => location.hash = '');

    appendChildren(addDiv, addTitle, nameInput, termsButton, saveButton, cancelButton);
    return addDiv;
}

//Modify set
function createModifyPage(setId) {
    const modifyDiv = document.createElement('div');
    const modifyTitle = createTitle('Modify set');

    const set = sets.find(set => set.id == setId);
    const setPosition = sets.indexOf(set);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.value = set.name;
    const termsButton = createButton('Add terms', termsButtonHandler);
    const saveButton = createButton('Save changes', saveButtonHandler(setPosition));
    const cancelButton = createButton('Cancel', () => location.hash = '');

    appendChildren(modifyDiv, modifyTitle, nameInput, termsButton, saveButton, cancelButton);
    set.terms.map(term => modifyDiv.appendChild(createTerm(term.term, term.definition)));
    return modifyDiv;
}

routesHandler();

window.addEventListener('hashchange', routesHandler);

function routesHandler() {
    root.innerHTML = '';
    const hash = location.hash.substring(1);
    if (hash === '/add') {
        root.appendChild(createAddPage());
        return;
    }
    if (hash.match(/\/modify\/(.*)/)) {
        root.appendChild(createModifyPage(hash.substring(8)));
        return;
    }
    root.appendChild(createMainPage());
}

function termsButtonHandler(e) {
    const setName = document.querySelector('[name]').value;
    if (!setName) {
        alert('Set\'s name can\'t be empty');
        return;
    }
    const pageDiv = e.target.parentElement;
    pageDiv.appendChild(createTerm());
}

function createTerm(term = '', definition = '') {
    const termDiv = document.createElement('div');
    termDiv.classList.add('terms');
    const termInput = document.createElement('input');
    termInput.value = term;
    const definitionInput = document.createElement('input');
    definitionInput.value = definition;
    const removeButton = createButton('Remove', () => termDiv.remove());
    appendChildren(termDiv, termInput, definitionInput, removeButton);
    return termDiv;
}

function saveButtonHandler(setPosition = null) {
    return function () {
        const setName = document.querySelector('[name]').value;
        if (!setName) {
            alert('Set\'s name can\'t be empty');
            return;
        }
        const termDivs = document.querySelectorAll('.terms');
        const terms = [];
        for (const termDiv of termDivs) {
            terms.push({ term: termDiv.children[0].value, definition: termDiv.children[1].value })
        }
        const set = { id: Date.now(), isStudied: false, name: setName, terms: terms };
        console.log(setPosition);

        if (!setPosition) {
            sets.push(set);
        } else {
            sets.splice(setPosition, 1, set);
        }
        localStorage.setItem('setsArray', JSON.stringify(sets));
        location.hash = '';
    };
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

function appendChildren(parent, ...children) {
    for (const child of children) {
        parent.appendChild(child);
    }
}

function createSetListItem(set) {
    const setItem = document.createElement('li');
    setItem.classList.add('sets__item');
    setItem.textContent = set.name;
    if (set.isStudied) {
        setItem.classList.add('studied');
    }
    setItem.addEventListener('click', () => {
        set.isStudied = !set.isStudied;
        if (set.isStudied) {
            setItem.classList.add('studied');
        } else {
            setItem.classList.remove('studied');
        }
        localStorage.setItem('setsArray', JSON.stringify(sets));
        routesHandler();
    });
    const editButton = createButton('Edit', () => location.hash = `/modify/${set.id}`);
    const removeButton = createButton('Remove', () => {
        setItem.remove();
        sets.splice(sets.indexOf(set), 1);
        localStorage.setItem('setsArray', JSON.stringify(sets));
    });

    appendChildren(setItem, editButton, removeButton);
    return setItem;
}

// function moveSets(oldIndex, newIndex) {
//     sets.splice(newIndex, 0, sets.splice(oldIndex, 1)[0]);
// }