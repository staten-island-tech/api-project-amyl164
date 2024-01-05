import "../css/style.css"
import { DOMSelectors } from "./dom";
const URL = `https://api.algobook.info/v1/dogs/all`;
async function getData (URL){
try {
const response = await fetch (URL);
if (response.status !=200){
throw new Error (response.statusText);}
const data = await response.json();
function insertCards(arr){
    arr.forEach((data) => {
DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2 class="breed">${data.name}</h2>
    <img src="${data.imgUrl}" alt="${"image of " +data.name}" class="dogimg">
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
DOMSelectors.for_h2.insertAdjacentHTML(
  `afterbegin`,
  `<h2 class="h2" alt="Different Type of Dog Breeds">api no work</h2>`
)}}
getData (URL);
function clearfields()
{
  DOMSelectors.container.innerHTML = "";
}
function clearh2()
{
  DOMSelectors.for_h2.innerHTML = "";
}
function bye(){
  DOMSelectors.searchname.value = "";
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
    <img src="${data.imgUrl}" alt="${"image of " +data.name}" class="dogimg">
    <h3 class="personality">${"Temperament: "+data.temperament}</h3>
    <h3 class="lifespan">${"Lifespan: "+data.lifespan}</h3>
    <h3 class="weightlbs">${"Weight(lbs): "+data.weightLbs}</h3>
    <h3 class="heighinches">${"Height(in): "+data.heightInches}</h3>
  </div>`
)})};
bye()
insertCards(data)
}
catch (error) {
console.log(error, "oppsie daisy")
DOMSelectors.for_h2.insertAdjacentHTML(
  `afterbegin`,
  `<h2 class="h2" alt="Different Type of Dog Breeds">Check your spelling or the API might not have that dog breed!</h2>`
)
DOMSelectors.form.addEventListener("submit", function(event){
  event.preventDefault();
  clearh2()
})}}
getData(husky)});

DOMSelectors.button.addEventListener("click", function(event){
  event.preventDefault();
  clearfields()
  clearh2()
  const reset = `https://api.algobook.info/v1/dogs/all`;
async function getData (reset){
try {
const response = await fetch (reset);
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
    <img src="${data.imgUrl}" alt="${"image of " +data.name}" class="dogimg">
    <h3 class="personality">${"Temperament: "+data.temperament}</h3>
    <h3 class="lifespan">${"Lifespan: "+data.lifespan}</h3>
    <h3 class="weightlbs">${"Weight(lbs): "+data.weightLbs}</h3>
    <h3 class="heighinches">${"Height(in): "+data.heightInches}</h3>
  </div>`
)})}
insertCards(data)}
catch (error) {
console.log(error, "uhoh")
DOMSelectors.for_h2.insertAdjacentHTML(
  `afterbegin`,
  `<h2 class="h2" alt="Different Type of Dog Breeds">api no work</h2>`
)}}
getData(reset)});