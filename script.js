
let songIndex=0;
let index=0;
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('progressBar')
myProgressBar.value=0;
let next=document.getElementsByClassName('button3')
let songInfo=document.getElementsByClassName("songInfo")[0];


let songs=[
    {songName:'Hai Apna Dil to Awara', filePath:'awara.mp3'},
    {songName:'Baarishein', filePath:'baarishein.mp3'},
    {songName:'gul', filePath:'gul.mp3'},
    {songName:'jadui', filePath:'jadui.mp3'},
    {songName:'Mere liye tum Kaafi ho', filePath:'kaafiHo.mp3'},
    {songName:'Tum apna khayaal rakhya kar', filePath:'khayaalRakhyaKar.mp3'},
    {songName:'I Hate how much I Love You', filePath:'loveYou.mp3'},
    {songName:'Mera Safar', filePath:'meraSafar.mp3'},
    {songName:'Ek Zindagi', filePath:'ekZindagi.mp3'},
    {songName:'Yaari', filePath:'yaari.mp3'},
]

let audioElement=new Audio('awara.mp3');

//handle play/pause click
masterPlay.addEventListener('click',()=>{

    songInfo.innerHTML=songs[index].songName;

    if( (audioElement.paused || audioElement.currentTime<=0 )){
        audioElement.play();
        masterPlay.src="pause.png"     
    }
    else{
        audioElement.pause();
        masterPlay.src="https://img.icons8.com/fluency/48/play-button-circled.png"
    }
    
})


let songItems=Array.from(document.getElementsByClassName('button2'));
const makeAllPlay=()=>{
    songItems.forEach((element)=>{
        element.src="https://img.icons8.com/fluency/48/play-button-circled.png";
    })
}

audioElement.addEventListener('timeupdate',()=>{  
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})



let buttons=Array.from(document.getElementsByClassName("button2"));
buttons.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        element.src="pause.png";
        audioElement.pause();
        index=parseInt(e.target.id);
        audioElement.src= (songs[index].filePath);
        audioElement.currentTime=0;
        
        if( (audioElement.paused || audioElement.currentTime<=0)){
            audioElement.play();
            masterPlay.src="pause.png"
            element.src="pause.png";
            
        }
        else{
            audioElement.pause();
            masterPlay.src="https://img.icons8.com/fluency/48/play-button-circled.png"
            element.src="https://img.icons8.com/fluency/48/play-button-circled.png";
        }
        songInfo.innerHTML=songs[index].songName;
    })
})

let previous=document.getElementsByClassName('button1')[0];
previous.addEventListener('click',(e)=>{
    if(index==0){
        index=9;
    }
    else{
        index=index-1;
    }
    
    console.log(index)
    audioElement.pause();
    audioElement.src=(songs[index].filePath);
    audioElement.currentTime=0;
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src="pause.png";
    }
    else{
        audioElement.pause();
        masterPlay.src="https://img.icons8.com/fluency/48/play-button-circled.png"         
    }
    songInfo.innerHTML=songs[index].songName;
})





next[0].addEventListener('click',(e)=>{
    if(index==9){
        index=0;
    }
    else{
        index=index+1;
    }
    console.log(index)
    audioElement.pause();
    audioElement.src=(songs[index].filePath);
    audioElement.currentTime=0;
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src="pause.png";
    }
    else{
        audioElement.pause();
        masterPlay.src="https://img.icons8.com/fluency/48/play-button-circled.png"      
    }

    songInfo.innerHTML=songs[index].songName;
    
})
audioElement.addEventListener('ended', () => {
    masterPlay.src = "https://img.icons8.com/fluency/48/play-button-circled.png";
})



buttons.forEach((element)=>{
    audioElement.src=(songs[index].filePath);
    audioElement.addEventListener('ended', ()=>{
        element.src = "https://img.icons8.com/fluency/48/play-button-circled.png";
    })
})