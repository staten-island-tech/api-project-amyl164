import "../css/style.css"
import { DOMSelectors } from "./dom";
const URL = `https://api.algobook.info/v1/dogs/all` ;
//goes before anything bfore getting data from api
async function getData (URL){
try {
//requesting response REST 'API'S
const response = await fetch (URL);
if (response.status !=200){
throw new Error (response.statusText);
//convert response to json
}
const data = await response.json();
function insertCards(arr){
    arr.forEach((data) => {
DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2 class="breed">${data.name}</h2>
    <img src="${data.imageURL}" alt="" class="cardimg">
  </div>`
)})};
insertCards(data)

data.forEach(data => {console.log(data.name)
});
}
catch (error) {
console.log(error, "uhoh")
document.querySelector("h2").textContent = "no work";
}
}
getData (URL);

