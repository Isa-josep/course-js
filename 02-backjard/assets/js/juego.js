let deck=[];
const types = ['C','D','H','S'];
const specials = ['J','Q','K','A'];
let pointsplayer=0,
    pointscomputer=0;
//referencias de html 
const addcard = document.querySelector('#add-card');
const stopGame = document.querySelector('#stop-game');
const newGame = document.querySelector('#new-game');
const smalls = document.querySelectorAll('small');
const divCardPlayer = document.querySelector('#player-cards');
const divCardComputer = document.querySelector('#pc-cartas');
// const imgcard=document.createElement('img');

const createdeck =()=>{
    for(let i=2;i<=10;i++){
        for(let j of types){
            deck.push(i+j)
        }
    }
    for(let j of types){
        for(let i of specials){
            deck.push(i+j)
        }
    }
    deck = _.shuffle(deck);

    return deck;
}

const haveAnewcard=()=>{
    if(deck.length===0){
        throw 'No hay cartas en el deck';
    }
    const card=deck.pop();
    console.log(deck);
    return card;
}

const valorcard=(card)=>{
    const value=card.substring(0,card.length-1);
    return (isNaN(value)) ? (value==='A') ? 11 : 10 : value*1;

}

//turno de pc
const turnpc=(minpoints)=>{
    do{
    const card=haveAnewcard();
    console.log(card);
    pointscomputer+=valorcard(card);
    console.log(pointscomputer);
    smalls[1].innerText=pointscomputer;
    const imgcard=document.createElement('img');
    imgcard.src=`assets/cartas/${card}.png`;
    imgcard.classList.add('card');
    divCardComputer.append(imgcard);
    if(minpoints>21){
        
        break;  
        }
    }
    while((pointscomputer<minpoints) && (minpoints<=21)){
        setTimeout(() => {
            if(pointscomputer===minpoints){
                alert('Nadie gana');
            }
            else if(pointscomputer>21){
                alert('Ganaste');
            }
            else if(minpoints>21){
                alert('Perdiste');
            }
            else{
                alert('Ganó la computadora');
            }
        }, 100);
        
    }
}




createdeck();

addcard.addEventListener('click',()=>{
    const card=haveAnewcard();
    console.log(card);
    pointsplayer+=valorcard(card);
    console.log(pointsplayer);
    smalls[0].innerText=pointsplayer;
    const imgcard=document.createElement('img');
    imgcard.src=`assets/cartas/${card}.png`;
    imgcard.classList.add('card');
    divCardPlayer.append(imgcard);

    if(pointsplayer>21){
        console.warn('Perdiste');
        addcard.disabled=true;
        turnpc(pointsplayer);
        
    }

    else if(pointsplayer===21){
        console.warn('21');
        addcard.disabled=true;
        turnpc(21);
    }
});

stopGame.addEventListener('click',()=>{
    if(pointsplayer===0){
        return;
    }
    addcard.disabled=true;
    stopGame.disabled=true; 
    turnpc(pointsplayer);
});

newGame.addEventListener('click',()=>{
    console.clear();
    deck=[];
    deck=createdeck();
    pointsplayer=0;
    pointscomputer=0;
    smalls[0].innerText=0;
    smalls[1].innerText=0;
    divCardPlayer.innerHTML='';
    divCardComputer.innerHTML='';
    addcard.disabled=false;
    stopGame.disabled=false;
});


