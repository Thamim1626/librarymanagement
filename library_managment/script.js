// input 
let searchInput = document.getElementById("searchInput");
// append container
let searchResult = document.getElementById("searchResults");
//notFound
let notFound = document.getElementById("notFound");
//spinner
let spinner = document.getElementById("spinner");

//---------------********************************------------------------//
//  append function start
function appendbooks(i) {
    spinner.classList.add("d-none")
    let imageLink = i.imageLink
    let title = i.title
    spinner.classList.add("d-none")
    // create row

    //create append all row col
    //create append single book container
    let singleBook = document.createElement("div");
    searchResults.appendChild(singleBook);
    singleBook.classList.add("col-6")
    singleBook.classList.add("col-md-4")
    singleBook.classList.add("col-lg-3")
    singleBook.classList.add("p-3")

    //create image and append to the single container
    let img = document.createElement("img");
    singleBook.appendChild(img);
    img.src = imageLink

    //create HTMLParagraphElement to append singleBook
    let authourEl = document.createElement("p");
    singleBook.appendChild(authourEl);
    authourEl.textContent = title;
    //end append
}
//  append function end
let newArray = []
//fetching start

//fetching end

//inputfunvtion
function userinputValueFun(event) {

    if (event.key === "Enter") {
        notFound.classList.add("d-none")
        searchResult.textContent = ''
        spinner.classList.remove("d-none")
        let searchInputValue = event.target.value;
        let link = "https://apis.ccbp.in/book-store?title=" + searchInputValue;
        event.target.value = ''
        let option = {
            method: "GET"
        }
        fetch(link, option)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let searchList = jsondata.search_results
                for (let i of searchList) {
                    appendbooks(i)
                }



            });
    } else {
        let searchInputValue = ''
    }



}
searchInput.addEventListener("keydown", userinputValueFun)

function userinputValuechange(event) {

}
searchInput.addEventListener("change", userinputValuechange)