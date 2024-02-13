// VIDEO PLAY PAUSE
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
// END

// FEATURED INVENTORY IMAGE CAROUSEL
const scrollContainer= document.querySelector(".Inventorycard")
const leftBtn= document.getElementById("left")
const rightBtn= document.getElementById("right")

leftBtn.addEventListener('click',(e)=>{
    console.log("click")
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -=350;
});
rightBtn.addEventListener('click',(e)=>{
    console.log("click")
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft +=350;
});
