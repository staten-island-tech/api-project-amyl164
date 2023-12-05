
const URL =`https://api.quotable.io/random`;

async function getData(URL){
    try {
        //requesting a response RELATIONAL STATE TRANSFER (REST) API'S
        const response = await fetch(URL);
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        //convert response to JSON
        const data = await response.json();
        document.querySelector("h1").textContent = data.content;
    } catch (error) {
        console.log(error,"UH OH SPAGHETTIOS");
        document.querySelector("h1").textContent =  "srgaer";
    }
}
getData(URL);