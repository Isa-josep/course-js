import { pedirCarta, valorCarta,crearCartaHTML } from './';
/**
 * 
 * @param {number} puntosMinimos 
 * @param {Array<string>} dek 
 */
const turnoComputadora = ( puntosMinimos,puntosHTML, divCartasComputadora,deck ) => {
    if(!puntosMinimos){
        throw new Error('puntosMinimos es requerido');
    }
    if(!deck){
        throw new Error('deck es requerido');
    }
    if(!puntosHTML){
        throw new Error('puntosHTML es requerido');
    }
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 150 );
}

export {turnoComputadora};