let tasks = [];

// ADD
function addItem() {
    let input = document.getElementById("inputBox");
    let value = input.value;

    if (value === "") {
        alert("Enter something!");
        return;
    }

    tasks.push(value);
    input.value = "";

    displayItems();
}

// DISPLAY
function displayItems() {
    let container = document.getElementById("cardContainer");
    container.innerHTML = "";

    tasks.forEach((task, index) => {
        container.innerHTML += `
            <div class="card">
                <p>${task}</p>
                <button onclick="editItem(${index})">Edit</button>
                <button onclick="deleteItem(${index})">Delete</button>
            </div>
        `;
    });
}

// DELETE
function deleteItem(index) {
    tasks.splice(index, 1);
    displayItems();
}

// EDIT
function editItem(index) {
    let newValue = prompt("Edit task:", tasks[index]);

    if (newValue !== null && newValue !== "") {
        tasks[index] = newValue;
        displayItems();
    }
}

// SEARCH (basic)
function searchItem() {
    let search = document.getElementById("inputBox").value.toLowerCase();

    let filtered = tasks.filter(task =>
        task.toLowerCase().includes(search)
    );

    let container = document.getElementById("cardContainer");
    container.innerHTML = "";

    filtered.forEach(task => {
        container.innerHTML += `
            <div class="card">
                <p>${task}</p>
            </div>
        `;
    });
}