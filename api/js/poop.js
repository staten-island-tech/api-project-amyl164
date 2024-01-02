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
    <img src="${data.imgUrl}" alt="" class="dogimg">
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
document.querySelector("h2").textContent = "api no work";
}
}
getData (URL);

function clearfields()
{
  DOMSelectors.container.innerHTML = "";
}
function clearh2()
{
  DOMSelectors.h2.innerHTML = "";
}

DOMSelectors.form.addEventListener("submit", function(event){
  event.preventDefault();
  clearfields()
  let x = DOMSelectors.searchname.value
  const husky = `https://api.algobook.info/v1/dogs/search/${x}`
async function getData (husky){
try {
const response = await fetch (husky);
if (response.status !=200){
throw new Error (response.statusText);
}
const data = await response.json();
function insertCards(arr){
    arr.forEach((data) => {
DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2 class="breed">${data.name}</h2>
    <img src="${data.imgUrl}" alt="" class="dogimg">
    <h3 class="personality">${"Temperament: "+data.temperament}</h3>
    <h3 class="lifespan">${"Lifespan: "+data.lifespan}</h3>
    <h3 class="weightlbs">${"Weight(lbs): "+data.weightLbs}</h3>
    <h3 class="heighinches">${"Height(in): "+data.heightInches}</h3>
  </div>`
)})};
insertCards(data)
}
catch (error) {
console.log(error, "oppsie daisy")
document.querySelector("h2").textContent = "Check your spelling or the API might not have that dog breed!";
DOMSelectors.form.addEventListener("submit", function(event){
  event.preventDefault();
  clearh2()
})
}
}

getData(husky)});