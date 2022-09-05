var doCache = true;

var CACHE_NAME = 'cache-worker';

self.addEventListener( "activate", ( event: any ) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then( keyList =>
        Promise.all( keyList.map( key => {
          if ( !cacheWhitelist.includes( key ) ) {
            return caches.delete( key );
          }
        }))
      )
  );
});

self.addEventListener( 'install', ( event: any ) => {
  if ( doCache ) {
    event.waitUntil(
      caches.open( CACHE_NAME )
        .then( ( cache ) => {
          fetch( "asset-manifest.json" )
            .then( response => {
              response.json()
            })
            .then( (assets: any ) => {
              const urlsToCache = [
                "/",
                assets["index-bundle.js"]
              ]
              cache.addAll( urlsToCache )
            })
        })
    );
  }
});

self.addEventListener( 'fetch', ( event: any ) => {
  if ( doCache ) {
    event.respondWith(
      caches.match( event.request ).then( response => {
        return response || fetch( event.request );
      })
    );
  }
});