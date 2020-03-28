
var todoList = {
    // it should store the todos array on an object.
    todos: [],
    // it should have a function to display todos.
    displayTodos: function () { // now it (and the others) is a method
        if (this.todos.length === 0) {return console.log('It is empty!');}

        console.log('My todos:');
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                console.log('(x)', this.todos[i].todoText);
            } else {
                console.log('( )', this.todos[i].todoText);
            }
        }
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
todoList.addTodo('item 1');
todoList.addTodo('item 2');
todoList.addTodo('item 3');
todoList.addTodo('item 4');
todoList.addTodo('item 5');
todoList.toggleCompleted(1);
todoList.toggleCompleted(4);
