
var todos = ['item 1', 'item 2', 'item 3'];

// it should have a function to display todos.
function displayTodos() {
    console.log(todos);
}

// display todos.
displayTodos();

// it should have a function to add new todos. 
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

// it should have a function to change a todo. 
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

// it should have a function to delete todos
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}


//  add new todos.
addTodo('item 4');
addTodo('item 5');

// change a todo.
changeTodo(0, 'item 1 updated');

// delete a todo.
deleteTodo(1);

