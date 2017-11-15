function TodoService() {
    // A local copy of your todos
    var todoList = []
    var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/BryceMurray'

    function logError(err) {
        console.error('UMM SOMETHING BROKEY: ', err)
            //CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
            //do this without breaking the controller/service responsibilities
    }

    this.getTodos = draw => {
        $.get(baseUrl)
            .then(res => { // <-- WHY IS THIS IMPORTANT????
                todoList = res;
                draw(res)
            })
            .fail(logError)
    }

    this.addTodo = (todo, getTodo) => {
        // WHAT IS THIS FOR???
        $.post(baseUrl, todo)
            .then(getTodos) // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?

        .fail(logError)
    }

    this.toggleTodoStatus = (todoIndex, getTodos) => {
        // MAKE SURE WE THINK THIS ONE THROUGH
        //STEP 1: Find the todo by its index **HINT** todoList
        var todo = todoList[todoIndex]
            //STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
        todo.completed = !todo.completed
            //STEP 3: Here is that weird Ajax request because $.put doesn't exist
        $.ajax({
                method: 'PUT',
                contentType: 'application/json',
                url: baseUrl + '/' + todoId,
                data: JSON.stringify(index)
            })
            .then(res => {
                //DO YOU WANT TO DO ANYTHING WITH THIS?
                draw(res)
            })
            .fail(logError)
    }

    this.removeTodo = () => {
        // Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
        $.ajax({
                method: 'DELETE',
                url: baseURl + '/' + todo,
                data: JSON.stringify(index)
            })
            .then(getTodos)
            .fail(logError)
    }

}