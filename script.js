//assigning Variables

const jokeEl = document.getElementById('joke');

const jokeBtn = document.getElementById("joke-btn")

jokeBtn.addEventListener('click', generateJoke)

// setInterval(generateJoke,2000)

generateJoke()

async function generateJoke() {
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
       }
    })

    const data = await res.json()

    console.log(data)

    jokeEl.innerHTML = data.joke

}


