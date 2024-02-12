const videoPlayer = document.querySelector(".mainvideo");
const video=videoPlayer.querySelector('.video');
const play=videoPlayer.querySelector('.play')

play.addEventListener('click',(e)=>{
    if(video.paused){
        video.play();
       
    }
    else{
        video.pause();
    }
})
