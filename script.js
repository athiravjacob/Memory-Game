//Array cardArray stores objects with values name and image
const cardArray= [
   //one 
    {
        name: 'heart' ,
        img: 'images/heart.png'
    },
    {
        name: 'cake' ,
        img: 'images/cake.png'
    },

    {
        name: 'icecream' ,
        img: 'images/ice cream.png'
    },
    {
        name: 'leaf' ,
        img: 'images/leaf.png'
    },
    {
        name: 'rainbow' ,
        img: 'images/rainbow.png'
    },
    //two
    {
        name: 'cake' ,
        img: 'images/cake.png'
    },
    {
        name: 'heart' ,
        img: 'images/heart.png'
    },
    {
        name: 'icecream' ,
        img: 'images/ice cream.png'
    },
    {
        name: 'leaf' ,
        img: 'images/leaf.png'
    },
    {
        name: 'rainbow' ,
        img: 'images/rainbow.png'
    },
    // three
    {
        name: 'cake' ,
        img: 'images/cake.png'
    },
    {
        name: 'heart' ,
        img: 'images/heart.png'
    },
    {
        name: 'icecream' ,
        img: 'images/ice cream.png'
    },
    {
        name: 'leaf' ,
        img: 'images/leaf.png'
    },
    {
        name: 'rainbow' ,
        img: 'images/rainbow.png'
    },
    // four
    {
        name: 'cake' ,
        img: 'images/cake.png'
    },
    {
        name: 'heart' ,
        img: 'images/heart.png'
    },
    {
        name: 'icecream' ,
        img: 'images/ice cream.png'
    },
    {
        name: 'leaf' ,
        img: 'images/leaf.png'
    },
    
    {
        name: 'rainbow' ,
        img: 'images/rainbow.png'
    },
    //five
    {
        name: 'cake' ,
        img: 'images/cake.png'
    },
    {
        name: 'heart' ,
        img: 'images/heart.png'
    },
    {
        name: 'icecream' ,
        img: 'images/ice cream.png'
    },
    {
        name: 'leaf' ,
        img: 'images/leaf.png'
    },
    
    {
        name: 'rainbow' ,
        img: 'images/rainbow.png'
    },
    //six
    {
        name: 'cake' ,
        img: 'images/cake.png'
    },
    {
        name: 'heart' ,
        img: 'images/heart.png'
    },
    {
        name: 'icecream' ,
        img: 'images/ice cream.png'
    },
    {
        name: 'leaf' ,
        img: 'images/leaf.png'
    },
    
    {
        name: 'rainbow' ,
        img: 'images/rainbow.png'
    }
    
]
// randomly shuffles items in the array  by sort()
// Math.random() generates random number b/w 0 and 1.
// (0.5- Math.random()) gives positive/ negative or zero as return value.
// If the return value is negative, the first element is sorted before the second element. 
// If the return value is positive, the second element is sorted before the first element. 
// If the return value is zero, the order of the elements is unchanged. 


cardArray.sort(()=> 0.5- Math.random())
const gridDisplay= document.querySelector('#grid');
const result=document.getElementById('result');
let timer=document.getElementById('timer');
let easy=document.getElementById('easy');
let moderate=document.getElementById('moderate');
let hard=document.getElementById('hard');

let start_time;
let countdowntime;
let cardsChoosen=[]; 
let cardsChoosenId=[];
let score=0;
console.log(cardArray.length);
console.log(score);


function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=  document.createElement('img');
        //console.log(card)
        card.setAttribute('src','images/cover.png');
        card.setAttribute('id',i);
        card.addEventListener('click',flipcard);
        gridDisplay.appendChild(card)
    }
}

function checkMatch(){
    const cards=document.querySelectorAll('img')
    
    if(cardsChoosen[0]  == cardsChoosen[1] && cards[cardsChoosenId[0]]!=cards[cardsChoosenId[1]] ){
       
        cards[cardsChoosenId[0]].setAttribute('src','images/black.png');
        cards[cardsChoosenId[1]].setAttribute('src','images/black.png');
        cards[cardsChoosenId[0]].removeEventListener('click',flipcard);
        cards[cardsChoosenId[1]].removeEventListener('click',flipcard);
        score++;
        result.innerHTML=score;
        if(score=== cardArray.length/2){
           popUp();
        }
    }
    else{
        cards[cardsChoosenId[0]].setAttribute('src','images/cover.png');
        cards[cardsChoosenId[1]].setAttribute('src','images/cover.png');
    }
    cardsChoosen=[];
    cardsChoosenId=[];
    
}
function flipcard(){
    const cardId=this.getAttribute('id');
    cardsChoosen.push(cardArray[cardId].name);
    cardsChoosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChoosen.length===2){
        setTimeout(checkMatch,500);
    }
}
function popUp(){
    document.querySelector(".blur").classList.toggle('active');
    document.getElementById("popup").classList.toggle('active');
   
}

function countdown(){
    let min= Math.floor(countdowntime/60);  
    let sec= countdowntime%60;
    timer.innerHTML=min+":"+sec +"s";
    countdowntime--;
    if(min==0 && sec==20){
        
        timer.style.color="red"
    }
    if(min==0 && sec==0){
        timeOutPopUp();
    }
    
}
function timerEasy(){

    start_time=10;
    countdowntime=start_time*60;
    setInterval(countdown,1000);
    createBoard();
    moderate.disabled=true;
    hard.disabled =true;
    easy.disabled=true;

}
function timerModerate(){
    start_time=5;
    countdowntime=start_time*60;
    setInterval(countdown,1000);
    createBoard();
    easy.disabled=true;
    hard.disables=true;
    moderate.disabled=true;

}
function timerHard(){
    start_time=1;
    countdowntime=start_time*60;
    setInterval(countdown,1000);
    createBoard();
    moderate.disabled=true;
    easy.disabled=true;
    hard.disabled=true;
}

function timeOutPopUp(){
    let scoreDisplay=document.getElementById("scoreDisplay");
    scoreDisplay.innerHTML="Your Score :" + score;
    document.querySelector(".blur").classList.toggle('active');
    document.getElementById("timeout").classList.toggle('active');


}