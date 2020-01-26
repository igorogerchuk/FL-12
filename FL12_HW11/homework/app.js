const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

function createFileTree(structureVariable, parent = rootNode) {
  let element = structureVariable.shift();
  let node;

  if (element.folder) {
    node = document.createElement('ul');
    node.innerHTML = "<i class='material-icons'>folder</i>";
  } else {
    node = document.createElement('li');
  }

  node.insertAdjacentText("beforeend", element.title);
  parent.appendChild(node);

  if (element.folder && element.children) {
    createFileTree(element.children, node);
  }
  if (structureVariable.length > 0) {
    createFileTree(structureVariable, parent);
  }
}

createFileTree(structure);

