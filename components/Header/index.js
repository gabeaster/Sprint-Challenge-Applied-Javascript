// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


//entry point created
const headerParent = document.querySelector('.header-container');

//FUNCTION CREATED
function Header() {
    //define new elements
    const header = document.createElement('div');
    const dateSpan = document.createElement('span');
    const title = document.createElement('h1');
    const tempSpan = document.createElement('span');
    //setup structure
    header.appendChild(dateSpan);
    header.appendChild(title);
    header.appendChild(tempSpan);

    //classes
    header.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    //set content
    dateSpan.textContent = `SMARCH 28, 2019`;
    title.textContent = `Lambda Times`;
    tempSpan.textContent= `98°`;

    headerParent.appendChild(header);

    return header
}

Header();


