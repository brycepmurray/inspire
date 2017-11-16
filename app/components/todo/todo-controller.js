function TodoController() {
    // new up the TodoService that has already been configured for your use
    // You will need four methods
    // getTodos should request your api/todos and give an array of todos to your callback fn
    // addTodo takes in a todo and posts it to the server
    // toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
    // removeTodo takes in a todoId and sends a delete request to the server
    // **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
    var todoService = new TodoService()

    // Use this getTodos function as your callback for all other edits
    function getTodos() {
        //FYI DONT EDIT ME :)
        todoService.getTodos(draw)
    }

    function draw(todos) {

        //WHAT IS MY PURPOSE?
        //BUILD YOUR TODO TEMPLATE HERE
        var template = ''
            //DONT FORGET TO LOOP
        for (var i = 0; i < todos.length; i++) {
            var myTodo = todos[i]
            template += `
			<div class="checkbox" onclick="app.controllers.todoController.removeTodo(${i})">
			<label><input type="checkbox" value="">${myTodo.description}</label>
			</div>`
        }
        document.getElementById('todo').innerHTML = template
    }
    var todoFormElem = document.getElementById('addtodo-form')
    var todoShowButton = document.getElementById('todo-show-button')

    this.addTodoFromForm = e => {
        e.preventDefault() // <-- hey this time its a freebie don't forget this
            // TAKE THE INFORMATION FORM THE FORM
        var form = e.target
        var todo = {
                description: form.todo.value,
                // DONT FORGET TO BUILD YOUR TODO OBJECT
                completed: false
            }
            //todoFormElem.classList.toggle('hidden', true)
            //PASSES THE NEW TODO TO YOUR SERVICE
            //DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
            //YOU SHOULDN'T NEED TO CHANGE THIS
        todoService.addTodo(todo, getTodos)

        //^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
        todoService.getTodos(draw)
    }

    this.toggleTodoStatus = todo => {
        // asks the service to edit the todo status
        todoService.toggleTodoStatus(todo, getTodos)
            // YEP THATS IT FOR ME
    }

    this.removeTodo = todoIndex => {
        // ask the service to run the remove todo with this id
        todoService.removeTodo(todoIndex, getTodos)
            // ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
    }

    // IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
    var formstate = true

    thisshowAddTodoForm = showAddTodoForm => {
        if (formstate) {
            todoShowButton.innerText = 'Add'
            todoShowButton.className = 'btn btn-info'
            todoFormElem.classList.add('hidden')
            formstate = false
        } else {
            todoShowButton.innerText = 'Cancel'
            todoShowButton.className = 'btn btn-danger'
            todoFormElem.classList.add('hidden')
            formstate = true
        }
    }
    getTodos()
}
//Todo Controller and Service collaborated and done with Dan on 11/13