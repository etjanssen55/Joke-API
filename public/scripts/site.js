
(async () => {
    const p = document.querySelector('p')
    const h3 = document.querySelector('h3')
    const button = document.querySelector('button')

    const { pathname } = window.location

    const url = (() => {
        return '/api/v1/random-joke'
    })()
    button.addEventListener('click', async () => {
    const result = await fetch(url)
    const { joke, punchline } = await result.json()

    
    p.textContent = punchline
    h3.textContent = joke
    })
})()
