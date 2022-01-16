let searchInputEl = document.getElementById('searchInput');
let searchResultsEl = document.getElementById('searchResults');
let spinnerEl = document.getElementById('spinner');
let url = "https://apis.ccbp.in";

function createAndAppendResult(result) {
    let {
        title
    } = result;
    let {
        link
    } = result;
    let {
        description
    } = result;

    let resultContainer = document.createElement("div");
    resultContainer.classList.add("result-item");
    searchResultsEl.appendChild(resultContainer);

    let titleEl = document.createElement("a");
    titleEl.classList.add("result-title");
    titleEl.textContent = title;
    titleEl.href = link;
    titleEl.target = "_blank";
    resultContainer.appendChild(titleEl);

    let brEl = document.createElement("br");
    resultContainer.appendChild(brEl);

    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.textContent = link;
    urlEl.href = link;
    urlEl.target = "_blank";
    resultContainer.appendChild(urlEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultContainer.appendChild(descriptionEl);
}

function displayResults(search_results) {
    spinnerEl.classList.toggle("d-none");
    for (let result of search_results) {
        createAndAppendResult(result);
    }


}

function searchWikipedia(event) {
    if (event.key == "Enter") {

        searchResultsEl.textContent = "";
        spinnerEl.classList.toggle("d-none");
        let searchInputElText = searchInputEl.value;
        url = url + "/wiki-search?search=" + searchInputElText;

        options = {
            method: "GET",
        };
        fetch(url, options).then(function(response) {
            return response.json();
        }).then(function(parseData) {
            let {
                search_results
            } = parseData;
            console.log(search_results)
            displayResults(search_results);
        });
    }
}




searchInputEl.addEventListener("keydown", searchWikipedia);