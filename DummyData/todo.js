let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": true
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos);
}

const populateTodos = () => {
  var doc = document.getElementById("ol1");
  
  arrayOfTodos.forEach(element => {
      var li = document.createElement("li");
      var title = document.createTextNode(element.title);
      li.appendChild(title);
      doc.appendChild(li);
      if (!element.completed) {
          li.style.color = "red";
      }
  });
}