/**
 * 
 * @param {Array<string>} deck 
 * @returns String retorna la carta del deck
 */

const pedirCarta = (deck) => {
    
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
export { pedirCarta };