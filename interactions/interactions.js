var interactions = {
    setUpEventListeners: function () {
        let todoUl = document.querySelector("ul");
        todoUl.addEventListener("click", function (event) {
            let elementClicked = event.target;

            if (elementClicked.className === "deleteButton") {
                handlers.deleteTodos(parseInt(elementClicked.parentNode.id));
            }
        });
    }
}