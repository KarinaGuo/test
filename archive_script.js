// Retrieve necessary elements from the DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const archivedList = document.getElementById('archived-list');

// Counter to generate unique IDs
let counter = 1;

// Event listener for form submission
todoForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const todoName = todoInput.value.trim(); // Get the trimmed value of the input

  if (todoName !== '') {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = todoName;

    // Generate unique ID for the list item
    const id = 'list-item-' + counter;
    listItem.setAttribute('id', id);
    counter++;

    // Create a button to archive the list item
    const archiveButton = document.createElement('button');
    archiveButton.textContent = 'Archive';
    archiveButton.addEventListener('click', function () {
      // Move the list item to the Archived Lists section
      listItem.remove();
      archivedList.appendChild(listItem);
      archiveButton.remove();
    });

    // Append the button to the list item
    listItem.appendChild(archiveButton);

    // Append the list item to the To-Do List section
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = '';

    // Create a link between the archived list item and the to-do list item
    const archivedListItem = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = todoName;
    archivedListItem.appendChild(summary);

    const detailList = document.createElement('ul');

    // Retrieve all checked checkboxes
    const checkboxes = document.querySelectorAll('#checkbox-list input:checked');
    checkboxes.forEach(function (checkbox) {
      const detailItem = document.createElement('li');
      detailItem.textContent = checkbox.nextElementSibling.textContent;
      detailList.appendChild(detailItem);
    });

    archivedListItem.appendChild(detailList);

    // Append the archived list item to the Archived Lists section
    archivedList.appendChild(archivedListItem);
  }
});
