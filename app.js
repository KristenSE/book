const form = document.querySelector("form");
const titleinput = document.querySelector("#title");
const authorinput = document.querySelector("#author");
const isbninput = document.querySelector("#isbn");
const mytable = document.querySelector("table");



form.addEventListener("submit", addBook);
mytable.addEventListener("click", deleteBook);
document.getElementById("deleteall").addEventListener("click", deleteallbooks);
document.addEventListener("DOMContentLoaded", getTasksFromLocalStorage);

function getTasksFromLocalStorage() {
    let books;
    if (localStorage.getItem("books") === null) {
        books = [];
    }
    else {
        books = JSON.parse(localStorage.getItem("books"));
    }
    books.forEach(myfunction2);

    function myfunction2(e) {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const link = document.createElement("a");
        link.setAttribute("href", "#");
        link.className = "secondary-content";
        link.appendChild(document.createTextNode("X"));
        td1.appendChild(document.createTextNode(books[0]));
        td2.appendChild(document.createTextNode(books[1]));
        td3.appendChild(document.createTextNode(books[2]));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(link);
        mytable.append(tr);
    }


}


function deleteallbooks() {
    while(mytable.rows[1] !== undefined) {
        mytable.rows[1].remove();
    }
    deletealllocalstorage();




}

function deletealllocalstorage() {
    let books;
    if (localStorage.getItem("books") == null) {
        books = [];
        localStorage.setItem("books", JSON.stringify(books));
    }


    localStorage.removeItem("books");
}


function deleteBook(e) {
    let task;
    if (e.target.textContent === "X") {
        if (confirm("delete this?")) {
            e.target.parentElement.remove();
            let words = "";
            for (i = 0; i < 3; i++) {
                task = e.target.parentElement.children[i].textContent;
                console.log(task);
                words += task;
                console.log(words);
            }
            deletelocalstorage(words);

        }
    }
}



function addBook(e) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const title = titleinput.value;
    const author = authorinput.value;
    const isbn = isbninput.value;
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.className = "secondary-content";
    link.appendChild(document.createTextNode("X"));

    td1.appendChild(document.createTextNode(title));
    td2.appendChild(document.createTextNode(author));
    td3.appendChild(document.createTextNode(isbn));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(link);
    mytable.append(tr);
    addtolocalstorage(title, author, isbn);
    e.preventDefault();


}

function addtolocalstorage(item1, item2, item3) {
    let books;
    if (localStorage.getItem("books") == null) {
        books = [];
    }
    else {
        books = JSON.parse(localStorage.getItem("books"));
    }
    books.push([item1, item2, item3]);

    localStorage.setItem("books", JSON.stringify(books));



}

function deletelocalstorage(words) {
    let books;
    if (localStorage.getItem("books") == null) {
        books = [];
    }
    else {
        books = JSON.parse(localStorage.getItem("books"));
    }
    books.forEach(function (value, index) {
        if(value.join("") == words) {
            books.splice(index, 1);
        }


    });
    localStorage.setItem("books", JSON.stringify(books));


}