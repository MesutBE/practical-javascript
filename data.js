
var todoList = {
    // it should store the todos array on an object.
    todos: [],
    // it should have a function to display todos.
    displayTodos: function () { // now it (and the others) is a method
        console.log('My todos: ', this.todos);
    },
    // it should have an addTodo method. 
    addTodo: function (todo) {
        this.todos.push({
            todoText: todo,
            completed: false
        });
        this.displayTodos();
    },
    // it should have a changeTodo method.
    changeTodo: function (position, newValue) {
        this.todos[position].todoText = newValue;
        this.displayTodos();
    },
    // It should have a deleteTodo method.
    deleteTodo: function (position) {
        this.todos.splice(position, 1); // 5. Delete method
        this.displayTodos();
    },
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();    
    }
};

todoList.displayTodos();
todoList.addTodo('boolean testing');
todoList.toggleCompleted(0);
