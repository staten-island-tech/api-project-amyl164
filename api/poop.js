
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
const data = await response. json();
data.forEach(data => {document.querySelector("h1").textContent = data.name;
});
data.forEach(data => {console.log(data.name)
});
}
catch (error) {
console.log(error, "uhoh")
document.querySelector("h1").textContent = "no work";
}
}
getData (URL);
