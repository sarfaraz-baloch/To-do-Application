// 
var input = document.getElementsByClassName("input");
var add = document.getElementById("add");
var delete_all = document.getElementById("delete_all");
var ul = document.getElementById("ul");
var resultContainer = document.getElementById('result-container');

// Display a message if the list is empty
if (ul.innerHTML.trim() === "") {
  ul.innerHTML = `<h2 class="h2">:-( Fill the form</h2>`;
}

let marks = [];
let per = [];
add.addEventListener("click", function () {
  ul.innerHTML = ""; // Clear the list before adding new items
  resultContainer.innerHTML = ""; // Clear previous results

  let sum = 0; // Initialize sum for numeric inputs
  let validInputs = true;
  let username = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      alert("Fill the form");
      return;
    }

    let list = `<li>  
      <span>${input[i].placeholder}</span>  
      <span>${input[i].value}</span> 
      <button class="btn" id="edit" onclick="edit(this)">Edit</button>
      <button class="btn" id="del" onclick="del(this)">Del</button>
    </li>`;
    
    ul.innerHTML += list;

    if (i === 0) { // Username input
      username = input[i].value;
    } else {
      let value = parseFloat(input[i].value);
      if (isNaN(value)) {
        alert(`Input ${input[i].placeholder} is not a valid number`);
        validInputs = false;
        break;
      } else {
        marks.push(value);
        sum += value; // Sum the numeric inputs
      }
    }
  }

  if (validInputs) {
    per.push(sum); // Store the sum of valid numeric inputs
    let result = document.createElement("p");
    result.id = "result";
    result.innerText = `Username: ${username}, Total-Marks: ${sum}`;
    resultContainer.appendChild(result);
  }
});

delete_all.addEventListener("click", function () {
  ul.innerHTML = "";
  marks = [];
  per = [];
  resultContainer.innerHTML = ""; // Clear results
});

function edit(e) {
  var previousValue = e.previousElementSibling.innerText;
  var updated = prompt("Write update message", previousValue);
  e.previousElementSibling.innerText = updated;
}

function del(e) {
  e.parentElement.remove();
  // Optionally update marks and per arrays if required
}
