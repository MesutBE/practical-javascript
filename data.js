
var todoList = {
    // it should store the todos array on an object.
    todos: [],
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

var handlers = {
    addTodo: function () {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
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
        view.displayTodos();
    },
    deleteTodos: function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById(
            "toggleCompletedPositionInput"
        );
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
    displayTodos: function () {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
        
        // forEach(callback function, this) and
        // forEach(callback function(this function have optional argument as index(position) ), this)

        todoList.todos.forEach(function (todo, position) {
            var todoLi = document.createElement("li");
            var todo = todoList.todos[i];
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(X) " + todo.todoText;
            } else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this); // this refers to view object

    },
    createDeleteButton: function () {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
    setUpEventListeners: function () {
        let todoUl = document.querySelector("ul");
        todoUl.addEventListener("click", function (event) {
            let elementClicked = event.target;

            if (elementClicked.className === "deleteButton") {
                handlers.deleteTodos(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();

todoList.addTodo('item 1');
todoList.addTodo('item 2');
todoList.addTodo('item 3');
