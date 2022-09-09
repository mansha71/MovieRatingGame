

const ratOne = document.querySelector('#rati')
const ratTwo = document.querySelector('#secR')

score = 0;

function win() {
    score = score + 1;
    document.querySelector('#score').textContent = score
    console.log(score)
}

function lose() {
    alert(`You lost :( , your score was: ${document.querySelector('#score').textContent}. Press OK to try again:`)
    location.reload();
}

const api_url = (`https://k2maan-moviehut.herokuapp.com/api/random`)
async function getMovie() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    document.querySelector('#titl').textContent = data.name
    document.querySelector('#rati').textContent = data.imdbRating  
    }

getMovie()

const sec_url = (`https://k2maan-moviehut.herokuapp.com/api/random`)
async function getsecMovie() {
    const response = await fetch(sec_url);
    const data = await response.json();
    console.log(data);
    document.querySelector('#secT').textContent = data.name
    document.querySelector('#secR').textContent = data.imdbRating
    }

getsecMovie()

function firstReveal() {
    const x = document.querySelector("#rati");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function secReveal() {
    const x = document.querySelector("#secR");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

document.querySelector("#but").addEventListener('click', e => {
    if (ratOne.textContent > ratTwo.textContent) {
        getsecMovie()
        getMovie()
        win()
    }
    else if(ratOne.textContent === ratTwo.textContent) {
        console.log('its a tie')
        getsecMovie()
        getMovie()
    }
    else if(ratOne.textContent < ratTwo.textContent){
        console.log("GAME OVER")
        lose()
    }

})

document.querySelector("#sec_but").addEventListener('click', e => {
    if (ratOne.textContent < ratTwo.textContent) {
        getMovie()
        getsecMovie()
        win()
    }
    else if (ratOne.textContent === ratTwo.textContent) {
        console.log('its a tie')
        getMovie()
        getsecMovie()
    }
    else if (ratOne.textContent > ratTwo.textContent) {
        console.log("GAME OVER")
        lose()
    }
})


