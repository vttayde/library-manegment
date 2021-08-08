console.log("this is index.js");

// constructor
function Book(givenName, givenAuthor, givenType) {
    this.name = givenName;
    this.author = givenAuthor;
    this.type = givenType;
}

function Display() {

}

// add method to display prototype
Display.prototype.add = function (book) {
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

// implimenting validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

// show function
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type}  alert-dismissible fade show" role="alert">
                        <strong>Message:</strong> ${displayMessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><button>
                        </div>`
}


// add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    // e.preventDefault();
    // console.log("sbmit")
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    // programimg,cooking,science
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let science = document.getElementById('science');


    if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    else if (science.checked) {
        type = science.value;
    }
    let book = new Book(name, author, type);
    // console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your Book has been Successfully added ');
    }
    else {
        // error
        display.show('danger', 'Sorry You can not add this Book');
    }

    e.preventDefault();
}
