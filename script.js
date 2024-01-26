let jokes = document.querySelector("#joke");
let btn = document.querySelector("#joke-change")
btn.addEventListener("click", clickModular);

function clickModular(){
    let joke = " ";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.api-ninjas.com/v1/dadjokes?limit=2");
    xhr.setRequestHeader('X-Api-key', "/kKbBkDCP6NzStP5TmuARQ==weULnBZuaArhNg8n");
    xhr.send();

    btn.innerText = "Fetching jokes...";

    xhr.onload = function(){
        if(xhr.status === 200){
            const result = JSON.parse(xhr.responseText);
            console.log(result);
            joke = result[0].joke;
            
            // update the jokes in
            jokes.innerText = joke;

            btn.innerText = "Tell Me A Joke";
        }
    }
}