
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

let deck=[];
const types = ['C','D','H','S'];
const specials = ['J','Q','K','A'];
createdeck();

console.log(deck);
const haveAnewcard=()=>{
    if(deck.length===0){
        throw 'No hay cartas en el deck';
    }
    const card=deck.pop();
    console.log({deck});
    return card;
}

const valorcard=(card)=>{
    const value=card.substring(0,card.length-1);
    return (isNaN(value)) ? (value==='A') ? 11 : 10 : value*1;

}
console.log(valorcard('JD'));
console.log(haveAnewcard());


