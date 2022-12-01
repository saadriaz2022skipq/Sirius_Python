const todolist = require('./todolist')

//Define a function that gets all the todos from the 
// todolist array declared asynchronously after 2 seconds
getAllTodos = (arr) => {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        for (var i=0; i<arr.length; i++){
            resolve(i)
        }
        reject("No Todo remaining")

    }, 2000)    
})     
}
// Define a function to add a todo to the todolist array
createTodo = (todo) => {
   return new Promise((resolve,reject)=>{
        resolve(todolist.push(todo))
        reject("No todo is added")
   })
}
module.exports ={
    createTodo,getAllTodos
}