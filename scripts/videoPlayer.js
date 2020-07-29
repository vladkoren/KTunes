export const videoPlayerInit = () => {

    const videoPlayer = document.querySelector('.video-player')
    const videoButtonPlay = document.querySelector('.video-button__play')
    const videoButtonStop = document.querySelector('.video-button__stop')
    const videoTimePassed = document.querySelector('.video-time__passed')
    const videoProgress = document.querySelector('.video-progress')
    const videoTimeTotal = document.querySelector('.video-time__total') 

    const toggleIcon = () => {
        if(videoPlayer.paused){
            videoButtonPlay.classList.remove('fa-pause')
            videoButtonPlay.classList.add('fa-play')
        }else{
            videoButtonPlay.classList.remove('fa-play')
            videoButtonPlay.classList.add('fa-pause')
        }
    }

    const togglePlay = () => {
        if(videoPlayer.paused){
            videoPlayer.play()
        }else{
            videoPlayer.pause()
        }    
    }

    const stopPlay = () => {
        videoPlayer.pause()
        videoPlayer.currentTime = 0
    }

    videoPlayer.addEventListener('click', togglePlay)
    videoButtonPlay.addEventListener('click', togglePlay)
    
    videoPlayer.addEventListener('play', toggleIcon)
    videoPlayer.addEventListener('pause', toggleIcon)

    videoButtonStop.addEventListener('click', stopPlay)

    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime
        const duration = videoPlayer.duration

        let minutesPassed = Math.floor(currentTime / 60)
        let secondsPassed = Math.floor(currentTime % 60)

        let minutesTotal = Math.floor(duration / 60)
        let secondsTotal = Math.floor(duration % 60)

        videoTimePassed.textContent = minutesPassed + ':' + (secondsPassed < 10 ? '0' + secondsPassed : secondsPassed)
        videoTimeTotal.textContent = minutesTotal + ':' + (secondsTotal < 10 ? '0' + secondsTotal : secondsTotal)

        videoProgress.value = (currentTime / duration) * 100

        videoProgress.addEventListener('change', () => {
            const duration = videoPlayer.duration
            const value = videoProgress.value

            videoPlayer.currentTime = (value * duration) / 100
        })
    })
} 