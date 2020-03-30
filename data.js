
var todoList = {
    // it should store the todos array on an object.
    todos: [],
    // it should have a function to display todos.
    displayTodos: function () { // now it (and the others) is a method
        // debugger;
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
    },
    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get numbers of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        // Case 1: If everything is true, make everything false
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
            // Case 2: Otherwise, make everything true
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

var handlers = {
    displayTodos: function () {
        todoList.displayTodos();
    },
    addTodo: function () {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById(
            "changeTodoPositionInput"
        );
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(
            changeTodoPositionInput.valueAsNumber,
            changeTodoTextInput.value
        );
        changeTodoTextInput.value = "";
        changeTodoPositionInput.value = "";
    },
    deleteTodos: function () {
        var deleteTodoPositionInput = document.getElementById(
            "deleteTodoPositionInput"
        );
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById(
            "toggleCompletedPositionInput"
        );
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
    },
    toggleAll: function () {
        todoList.toggleAll();
    }
};



todoList.addTodo('item 1');
todoList.addTodo('item 2');
todoList.addTodo('item 3');
