/**
 * 
 * @param {String} carta 
 * @returns Number retorna el valor de la carta
 */

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
export { valorCarta };