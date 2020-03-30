
var view = {
    displayTodos: function () {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";

        // forEach(callback function, this) and
        // forEach(callback function(this function have optional argument as index(position) ), this)

        todoList.todos.forEach(function (todo, position) {
            var todoLi = document.createElement("li");
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText;
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
};