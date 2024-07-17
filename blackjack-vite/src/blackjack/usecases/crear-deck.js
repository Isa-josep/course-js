import _ from 'underscore'
/**
 * 
 * @param {array<string>} tiposDeCartas 
 * @param {array<string>} tiposEspeciales 
 * @returns array<string>
 */
export const crearDeck = (tiposDeCartas,tiposEspeciales) => {

    if( !tiposDeCartas || !tiposEspeciales || tiposDeCartas.length === 0 || tiposEspeciales.length === 0 ) {
        throw new Error('Tipos de cartas y especiales son neces' );
    }

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

