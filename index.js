async function getAdvice() {
    const rawData = await fetch('https://api.adviceslip.com/advice')
    const data = (await rawData.json()).slip
    document.getElementById('advice-id').innerHTML = data.id
    document.getElementById('advice').innerHTML = data.advice
}

function putDice() {
    const container = document.getElementById("container")
    const diceBlock = document.getElementById("dice-block")
    diceBlock.style.top = `${container.offsetTop + container.offsetHeight - 30}px`
    diceBlock.style.visibility = "visible"
}

async function load() {
    await getAdvice()
    putDice()
}

window.addEventListener("load", async () => {
    load()
})

