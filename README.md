# Project Practical Javascript

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Development Strategy](#development-strategy)
- [Screen Capture of Project](#screen-capture-of-project)
- [Project Status](#project-status)
- [Contact](#contact)
- [Live Project](https://mesutbe.github.io/calculator-refactor/)

## General info

This project is gathered from `https://watchandcode.com` and upgraded step by step.
If you want to see how it is growing see [branches](https://github.com/MesutBE/practical-javascript/branches).

What you can do with this application:

- Save your todos typing some text and click add button.
- You can change your todos.
- And you can toggle(one by one/all) as completed or not.

## Technologies

Project is created with:

- JScript
- HTML5 /CSS3

## Setup

Clone this repository and start using it with your editor.

## Development Strategy

### First Step

This project builded in first step by following `https://watchandcode.com` tutorial in versions as user stories. And then all the code refactored from the final version of the project (1 file) into separate folders & files as learned in HYFBE class, on the master branch.

#### User Story 1 - Arrays

1. it should have a place to store todos.
1. it should have a place to display todos.
1. it should have a place to add new todos.
1. it should have a place to change a todo.
1. it should have a place to delete a todo.

#### User Story 2 - Functions

1. it should have a function to display todos.
1. it should have a function to add new todos.
1. it should have a function to change a todo.
1. it should have a function to delete a todo.

#### User Story 3 - Objects

1. it should store the todos array on an object.
1. it should have a displayTodos method.
1. it should have an addTodo method.
1. it should have a changeTodo method.
1. It should have a deleteTodo method.

#### User Story 4 - Booleans

1. todoList.addTodo should objects.
1. todoList.changeTodo should change the todoText property.
1. todoList.toggleCompleted should change the completed property.

#### User Story 5 - Loops of Logic

1. displayTodos should show .todoText.
1. displayTodos should tell if .todos is empty.
1. displayTodos should show completed.

#### User Story 6 - Thinking in Code

1. .toggleAll: If everything's true, make everything false.
1. .toggleAll: Otherwise, make everything true.

#### User Story 7 - HTML and the DOM

1. There should be a “Display todos” button and a “Toggle all” button in the app
1. Clicking “Display todos” should run todoList.displayTodos
1. Clicking “Toggle all” should run todoList.toggleAll

#### User Story 8 - Getting data from inputs

1. There should be a button for adding todos
1. There should be a button for changing todos
1. There should be a button for deleting todos
1. There should be a button for toggling a todo

#### User Story 9 - Escape from the console

1. There should be an li element for every todo
1. Each li element should contain .todoText
1. Each li element should show .completed

#### User Story 10 - Click to delete

1. There should be a way to create delete buttons
1. There should be a delete button for each todo
1. Each li should have an id that has the todo position
1. Delete buttons should have access to the todo id
1. Clicking delete should update todoList.todos and the DOM

#### User Story 11 - Destroy all for loops

1. todoList.toggleAll should use forEach
1. view.displayTodos should use forEach

### Second Step

#### User Story 12 - Refactoring

- Create development-strategy file.
- Rename html file to `index.html`.
- Create file `init.js` and refactor necessary codes.
- Create folder `app`
- Create folder `data`
- Create folder `handlers`
- Create folder `interactions`
- Create folder `view`
- Create folder `style`
- Create file `app.js` and refactor necessary codes.
- Create file `entries.js` and refactor necessary codes.
- Create file `handlers.js` and refactor necessary codes.
- Create file `interactions.js` and refactor necessary codes.
- Create file `view.js` and refactor necessary codes.
- Create file `style.css` and create new styles.

## Screen Capture of Project

![Screenshot from 2020-03-30 18-52-57](https://user-images.githubusercontent.com/59531743/77939598-b6391f80-72b7-11ea-8958-2833598deeb6.png)

## Project Status

Project finished

## Contact

You can contact me using [my repository](https://mesutbe.github.io/) whenever you want.
