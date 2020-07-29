import { radioPlayerInit } from './radioPlayer.js'
import { audioPlayerInit } from './audioPlayer.js'
import { videoPlayerInit } from "./videoPlayer.js"

const playerBtn = document.querySelectorAll('.player-btn')
const playerBlock = document.querySelectorAll('.player-block')

const deactivatePlayer = () => {
    playerBtn.forEach( (item) => {
        item.classList.remove('active')
    })
    playerBlock.forEach( (item) => {
        item.classList.remove('active')
    })
}

playerBtn.forEach( (btn, i) => {
    btn.addEventListener('click', () => {
        deactivatePlayer()
        btn.classList.add('active')
        playerBlock[i].classList.add('active')
    })
})

videoPlayerInit()
audioPlayerInit()
radioPlayerInit()