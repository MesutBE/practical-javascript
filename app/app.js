// LOGIC
var todoList = {
    // it should store the todos array on an object.
    todos: entries,
    // it should have an addTodo method. 
    addTodo: function (todo) {
        this.todos.push({
            todoText: todo,
            completed: false
        });
    },
    // it should have a changeTodo method.
    changeTodo: function (position, newValue) {
        this.todos[position].todoText = newValue;
    },
    // It should have a deleteTodo method.
    deleteTodo: function (position) {
        this.todos.splice(position, 1); // 5. Delete method
    },
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get numbers of completed todos
        this.todos.forEach(function (todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });

        // Case 1: If everything is true, make everything false
        this.todos.forEach(function (todo) {
            // Case1 : If everything is true, make everything false
            if (completedTodos === totalTodos) {
                todo.completed = false;
            // Case2 : Otherwise, make everything true
            } else {
                todo.completed = true;
            }
        });
    }
};




