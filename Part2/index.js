let id = document.getElementById('id')
let color = document.getElementById("color")

function setCard() {
   let pokerCard = document.getElementById(id.value)
   pokerCard
   pokerCard.style.color = color.value
}

function reset() {
    for(let i = 0; i < 4; i++){
       let clear = document.getElementsByClassName("clear")[i]
        clear.style.color = null
    }
    id.value = null
    color.value = null
}