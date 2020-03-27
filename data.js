
var todoList = {
    // it should store the todos array on an object.
    todos: ['item 1', 'item 2', 'item 3'],
    // it should have a function to display todos.
    displayTodos: function () { // now it (and the others) is a method
        console.log('My todos: ', this.todos);
    },
    // it should have an addTodo method. 
    addTodo: function (todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    // it should have a changeTodo method.
    changeTodo: function (position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    // It should have a deleteTodo method.
    deleteTodo: function (position) {
        this.todos.splice(position, 1); // 5. Delete method
        this.displayTodos();
    }
};

todoList.displayTodos();
//  add new todos.
todoList.addTodo('item 4');
todoList.addTodo('item 5');

// change a todo.
todoList.changeTodo(0, 'item 1 updated');

// delete a todo.
todoList.deleteTodo(1);
