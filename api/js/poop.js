import "../css/style.css"
import { DOMSelectors } from "./dom";
const URL = `https://api.algobook.info/v1/dogs/all`;
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
    <h3 class="personality">${"Temperament: "+data.temperament}</h3>
    <h3 class="lifespan">${"Lifespan: "+data.lifespan}</h3>
    <h3 class="weightlbs">${"Weight(lbs): "+data.weightLbs}</h3>
    <h3 class="heighinches">${"Height(in): "+data.heightInches}</h3>
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

function clearfields()
{
  DOMSelectors.container.innerHTML = "";
}

DOMSelectors.form.addEventListener("submit", function(event){
  event.preventDefault();
  clearfields()
  const URLtwo = `https://api.algobook.info/v1/dogs/search/:`+ new data.name;
  DOMSelectors.searchname.value = new data.name
  async function getData(URLtwo){
    try {
      const responsetwo = await fetch (URLtwo);
      if(response.status !=200){
        throw new Error (responsetwo.statusText);
      }
      const datatwo = await response.json();
      function insertCards(arr){
        arr.forEach((data) => {
    DOMSelectors.container.insertAdjacentHTML(
      )})};
insertCards(data)
    }}})
