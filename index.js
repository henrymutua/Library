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

function addBookToLibrary(){

        const bookInput = prompt();
        return myLibrary.push(bookInput);


}

function displayBooks(){

        myLibrary.forEach((book)=>
        console.log(book));

}

const buttonOne = document.getElementById("button");
 

console.log(buttonOne)
displayBooks();
if(buttonOne){
buttonOne.addEventListener('click', displayBooks)
};

const containerOne = document.getElementById("container-one");
myLibrary.forEach((book)=>{
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML = `
        <h3 class="title">${book.title}</h3>
        <p class="description">${book.description}</p>
        `;
    console.log(containerOne);
    containerOne.appendChild(card);
});












})