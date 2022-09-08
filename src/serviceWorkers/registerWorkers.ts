const registerWorker = ( name: string ) => navigator.serviceWorker.register( name ).then( ( registration ) => {
}, ( err ) => {
  console.log( 'ServiceWorker registration failed: ', err );
}).catch( ( err ) => {
  console.log( err )
});

if ( 'serviceWorker' in navigator ) {
  window.addEventListener( 'load', () => {
    registerWorker( 'cache-worker-bundle.js' );
  });
} else {
  console.log( 'service worker is not supported' );
}