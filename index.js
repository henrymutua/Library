document.addEventListener("DOMContentLoaded", function(){

const myLibrary= [
    {
        title: 'Americanah',
        author: 'Chimamanda Ngozi Adichie',
        description: 'The story of a Nigerian woman\'s experiences in America and Nigeria'
    },
    {
        title: 'Ghana Must Go',
        author: 'Taiye Selasi',
        description: 'A moving family saga about the complexities of the immigrant experience'
    },
    {
        title: 'All Our Yesterdays',
        author: 'Natalia Ginzburg',
        description: 'The story of a family from a small town in Northern Italy'
    }
];

function Book(){
    //
}

// function addBookToLibrary(){

//         const bookInput = prompt();
//         return myLibrary.push(bookInput);


// }

function displayBooks(){

    const containerOne = document.getElementById("container-one");
    containerOne.innerHTML= "";
    
    myLibrary.forEach((book, index)=>{
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML = `
    <h3 class="title">${book.title} </h3>
    <div class="reading-status"><div class="status-text">Unfinished</div>
    <div class = "toggle-icon">
    <div class ="toggle-circle"> </div> 
    </div> 
    </div>
    <p class="description">${book.description}</p>
    <div class="delete-button" data-index = "${index}">Delete</div>
    `;
    console.log(containerOne);
    containerOne.appendChild(card);
        

});

addDeleteButtonEventListeners();
addToggleEventListeners();

}

function addToggleEventListeners() {
    const toggleCircles = document.querySelectorAll(".toggle-circle");

    toggleCircles.forEach((toggleCircle) => {
      toggleCircle.addEventListener('click', () => {
        toggleCircle.classList.toggle("toggle-change");

        const readingStatus = toggleCircle.parentElement.parentElement;

        const statusText = readingStatus.querySelector(".status-text");

        statusText.textContent = statusText.textContent === "Unfinished" ? "Finished": "Unfinished";

      });
    });
  }

function addDeleteButtonEventListeners() {
    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute("data-index");
            if (index !== null) {
                const indexToDelete = parseInt(index, 10);
                myLibrary.splice(indexToDelete, 1);
                displayBooks(); // Update the displayed books
                updateDataIndices(); // Update data-index attributes
            }
        });
    });
}

// Call addDeleteButtonEventListeners initially to set up the event listeners
    addDeleteButtonEventListeners();
    
    
    console.log(myLibrary);
    const form = document.getElementById("form");
    console.log(form);

    //const result = document.getElementById("submit");

    form.addEventListener('submit', (event)=>{
        event.preventDefault();
   
    const bookTitle= document.getElementById("title").value;
    const bookDescription = document.getElementById("description").value;
    const bookAuthor= document.getElementById("author").value;
    const pageNumbers = document.getElementById("pages").value;
    const readingStatus = document.getElementById("status").value;
    const readingSuggestion = document.getElementById("suggestions").value;

    const book = {
        title: bookTitle,
        description: bookDescription,
        author: bookAuthor,
        pages: pageNumbers,
        status: readingStatus,
        suggestion: readingSuggestion
    };

    myLibrary.push(book);
    form.reset(); 

    console.log(myLibrary);
    displayBooks();

})

    const newBookButton = document.getElementById("new-book-button");
    const backButton = document.getElementById("back-button");
    const dialog = document.getElementById("dialog");
    const deleteButtons = document.querySelectorAll(".delete-button");

    newBookButton.addEventListener('click', (e)=>{
        console.log(e);
        dialog.style.display = "flex";
        dialog.showModal();
    }

    );

    backButton.addEventListener('click', ()=>{
        dialog.style.display="none";
        dialog.close();
    });


    function updateDataIndices() {
        const deleteButtons = document.querySelectorAll(".delete-button");
        deleteButtons.forEach((button, index) => {
          button.setAttribute("data-index", index);
        });
      }
    
      
      displayBooks();

      
     
    
    
    
});












