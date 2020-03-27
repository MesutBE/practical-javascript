// it should have a place to store todos.
['item 1', 'item 2', 'item 3'];

// it should have a place to display todos.
console.log(['item 1', 'item 2', 'item 3']);

// upgrade
var todos = ['item 1', 'item 2', 'item 3'];
console.log(todos);

// it should have a place to add new todos.
todos.push('item 4');
console.log(todos);

todos.push('item 5');
console.log(todos);

// it should have a place to change a todo.
todos[0] = 'item 1 updated';
console.log(todos);

// it should have a place to delete a todo.
todos.splice(1, 2);
console.log(todos);

console.log('Things to do:', todos);

