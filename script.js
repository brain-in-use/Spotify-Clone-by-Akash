let songIndex=0;
let audioElement= new Audio("songs/indie-folk-king.mp3");
let MasterPlay= document.getElementById('MasterPlay');
let progressBar= document.getElementById('progressBar');
let progress=0;
let gif=document.getElementById('wave');
let bottomName=document.getElementById('SongBottomName');
let NextSong=document.getElementById('NextSong');
let PreviousSong=document.getElementById('PreviousSong');
let songItems=Array.from(document.getElementsByClassName('songItem'));
// let songCover=document.getElementById('songCover');
let songs=[
    {songName: "indie-folk-king", filePath:"songs/indie-folk-king.mp3" ,coverPath:"images/indie-folk-king.jpg"},
    {songName: "Fluidity", filePath:"songs/Fluidity.mp3" ,coverPath:"images/Fluidity.jpg"},
    {songName: "Let-it-go", filePath:"songs/Let-it-go.mp3" ,coverPath:"images/Let-it-go.jpg"},
    {songName: "The-way-home", filePath:"songs/The-way-home.mp3" ,coverPath:"images/The-way-home.jpg"},
    {songName: "Candy_Shop", filePath:"songs/50_Cent_ft_Olivia_-_Candy_Shop.mp3" ,coverPath:"images/50_Cent_ft_Olivia_-_Candy_Shop.jpg"},
    {songName: "Lost_Sky", filePath:"songs/Lost_Sky.mp3" ,coverPath:"images/Lost_Sky.jpg"},
    {songName: "The-future-bass", filePath:"songs/The-future-bass.mp3" ,coverPath:"images/The-future-basse.jpg"},
    {songName: "Some Body", filePath:"songs/Some Body.mp3" ,coverPath:"images/Some Body.jpg"},
    {songName: "Thrift Shop", filePath:"songs/Thrift Shop.mp3" ,coverPath:"images/Thrift Shop.jpg"},
]
// songCover.src=songs[songIndex].coverPath;

MasterPlay.addEventListener('click', ()=>{
if(audioElement.paused||audioElement.currentTime==0)
{
    audioElement.play();
    MasterPlay.classList.remove('fa-circle-play');
    MasterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
    bottomName.style.opacity=1;

    // Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    //     element.classList.remove('fa-play');
    //     element.classList.add('fa-pause');
    // })

}
else{
    audioElement.pause();
    MasterPlay.classList.remove('fa-circle-pause');
    MasterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
    // Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    //     element.classList.remove('fa-pause');
    //     element.classList.add('fa-play');
    // })
}
});

const makeAllPlay= ()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
      element.classList.remove('fa-pause');
      element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        // audioElement.src=songs[songIndex].filePath;
        if(audioElement.paused||audioElement.currentTime==0)
        {
            if(songs[songIndex].filePath != audioElement.src.substring(22)){
                audioElement.src=songs[songIndex].filePath;
                bottomName.innerText=songs[songIndex].songName;
            }
        audioElement.play();
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        bottomName.style.opacity=1;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        }
        else{
            if(songs[songIndex].filePath == audioElement.src.substring(22))
            {
                audioElement.pause();
                // audioElement.src=songs[songIndex].filePath;
                // bottomName.innerText=songs[songIndex].songName;
                MasterPlay.classList.remove('fa-circle-pause');
                MasterPlay.classList.add('fa-circle-play');
                gif.style.opacity=0;
                e.target.classList.remove('fa-pause');
                e.target.classList.add('fa-play');
            }
        else{
        audioElement.src=songs[songIndex].filePath;
        bottomName.innerText=songs[songIndex].songName;
        audioElement.play();
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        bottomName.style.opacity=1;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        }
        }
            // e.target.classList.remove('fa-play');
            // e.target.classList.add('fa-pause');
            // audioElement.currentTime=0;
            // audioElement.play();
            })
        })

NextSong.addEventListener('click', ()=>{
    audioElement.pause();
    if(songIndex==(songs.length-1))
    songIndex=0;
    else
    ++songIndex;
    audioElement.src=songs[songIndex].filePath;
    audioElement.play();
    bottomName.innerText=songs[songIndex].songName;
})

PreviousSong.addEventListener('click', ()=>{
    audioElement.pause();
    if(songIndex==0)
    songIndex=songs.length-1;
    else
    --songIndex;
    audioElement.src=songs[songIndex].filePath;
    audioElement.play();
    bottomName.innerText=songs[songIndex].songName;
})

audioElement.addEventListener('timeupdate',()=>{
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
progressBar.value=progress;
document.getElementById('timeStampMin').innerText=parseInt(audioElement.currentTime/60);
document.getElementById('timeStampSec').innerText=parseInt(audioElement.currentTime)%60;
})

progressBar.addEventListener('change',()=>{
audioElement.currentTime=(audioElement.duration/100)*progressBar.value;
})
