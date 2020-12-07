var childElem = document.firstChild;

let arrayOfTodos =
  [
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
    }
  ]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => arrayOfTodos = json)
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

const filterTodos = () => {
  const myNode = document.getElementById("ol1");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  var userId = document.getElementById("userInput");
  const filtered = arrayOfTodos.filter(item => item.userId == userId.value);
  console.log(filtered);
  var doc = document.getElementById("ol1");
  // // var doc2 = document.getElementById("ol1").innerHTML = "";
  // while (doc.firstChild) doc.removeChild(doc.firstChild);
  // var doc2 = document.getElementById("ol2").innerHTML = "";

  filtered.forEach(element => {
    var li = document.createElement("li");
    var text = document.createTextNode(element.title);
    li.appendChild(text);
    doc.appendChild(li);
  })
}

const clearTodos = () => {
  arrayOfTodos = [];
  console.log(arrayOfTodos);
  populateTodos();

  const myNode = document.getElementById("ol1");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

var toggle = true;

const toggleCompletion = () => {
  const myNode = document.getElementById("ol1");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  toggle = !toggle;
  console.log("toggle: " + toggle);
  var doc = document.getElementById("ol1");


  if (toggle) {
    arrayOfTodos.forEach(element => {
      if (element.completed) {
        let li = document.createElement("li");
        var title = document.createTextNode(element.title);
        li.appendChild(title);
        doc.appendChild(li);
      }
    })
  }
  else {
    arrayOfTodos.forEach(element => {
      if (!element.completed) {
        let li = document.createElement("li");
        li.style.color = "red";
        var title = document.createTextNode(element.title);
        li.appendChild(title);
        doc.appendChild(li);
      }
    })
  }
}
