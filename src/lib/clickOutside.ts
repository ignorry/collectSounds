/**
 * Listen to clicks outside of the element
 * @param {HTMLElement} elem
 * @param {Function} callback 
 * @returns {void}
 */
export const clickOutside = ( elem: HTMLElement, callback: Function ): void =>
  document.addEventListener( 'click', (e) => {
    const target: Node = e.target as Node;
    
    if ( target !== elem && ! elem.contains( target ) )
      callback();
  });