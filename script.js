const addBookBtn = document.querySelector(".addBookBtn");
const formOuterContainer = document.querySelector(".form-outer-container");
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const pageNum = document.querySelector("#pageNum");
const finished = document.querySelector("#finished");
const unfinished = document.querySelector("#unfinished");
const add = document.querySelector(".add");
const close = document.querySelector(".close");
const bookContainer = document.querySelector(".bookContainer");


addBookBtn.addEventListener("click", () => {
    formOuterContainer.setAttribute("style", "display: block");
});

close.addEventListener("click", () => {
    formOuterContainer.setAttribute("style", "display: none");
});

add.addEventListener("click", () => {
    bookContainer.innerHTML = "";
    let status = false;
    if (finished.checked === true) {
        status = true;
    }
    addBook(bookTitle.value, bookAuthor.value, pageNum.value, status);
    for (let book of myLibrary) {
        let div = document.createElement("div");

        let title = document.createElement("p");
        title.textContent = `Title: ${book.title}`;
        div.append(title);

        let author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        div.append(author);

        let page = document.createElement("p");
        page.textContent = `Page Number: ${book.pageNum}`;
        div.append(page);

        let read = document.createElement("p");
        if (book.isRead) {
            read.textContent = "Status: Finished";
        }
        else {
            read.textContent = "Status: Unfinished";
        }
        div.append(read);

        let btn = document.createElement("button");
        btn.textContent = "Toggle Status"
        div.append(btn);
        btn.classList.add("toggle");
        
        btn.addEventListener("click", () => {
            if (read.textContent === "Status: Finished") {
                read.textContent = "Status: Unfinished";
            }
            else {
                read.textContent = "Status: Finished";
            }
        })
        div.classList.add("bookInfo");
        div.setAttribute("style", `background-color: rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}); border: 5px solid rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
        bookContainer.append(div);
    }
    formOuterContainer.setAttribute("style", "display: none");
});


let myLibrary = [];

function book(title, author, pageNum, isRead) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.isRead = isRead;
}

function addBook(title, author, pageNum, isRead) {
    let b1 = new book(title, author, pageNum, isRead);
    myLibrary.push(b1);
}

