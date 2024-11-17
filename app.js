const path = require('path')
const express = require('express')
const app = express()
const port = 3000

const root = path.join(__dirname, 'public')

const jokes = [
        {
            id: 1,
            joke: "Why did the scarecrow win an award?",
            punchline: "Because he was outstanding in his field."
        },
        {
            id: 2,
            joke: "Why did the bicycle fall over?",
            punchline: "Because it was two-tired."
        },
        {
            id: 3,
            joke: "What do you call a fake noodle?",
            punchline: "An im-pasta"
        },
        {
            id: 4,
            joke: "What did one plate whisper to the other plate?",
            punchline: "Dinner is on me"
        },
        {
            id: 5,
            joke: "Did you hear about the famous pickle?",
            punchline: "He was a big dill!"
        },
        {
            id: 6,
            joke: "Why didn't the teddy bear eat dessert?",
            punchline: "He was stuffed"
        },
        {
            id: 7,
            joke: "What do you give a sick lemon?",
            punchline: "A Lemon-aid"
        },
]


app.use(express.json())

app.use(express.static('public'))


app.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

app.get('/api/v1/random-joke', (request, response) => {
    const r = Math.floor(Math.random() * 7)
    response.send(jokes[r])
})

app.listen(port, () => console.log(`http://localhost:${port}/`))