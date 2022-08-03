import store from "../../redux/index";
import {
  setPeer,
  addConnectedPeer,
  removeConnectedPeer,
  setDarkTheme
} from "../../redux/slices/options";

describe( 'test options slice', () => {
  it( 'setPeer', () => {
    store.dispatch( setPeer( 'newpeer' ) );

    const peer = store.getState().options.peer;
  
    expect( peer ).toBe( 'newpeer' );

    store.dispatch( setPeer( '' ) ); //clean side effects
  });

  it( 'addConnectedPeer', () => {
    store.dispatch( addConnectedPeer( 'newpeer' ) );

    const connected = store.getState().options.connectedPeers;

    expect( connected ).toStrictEqual([ 'newpeer' ]);
  });

  it( 'addConnectedPeer have not to add already existing peer', () => {
    store.dispatch( addConnectedPeer( 'newpeer' ) );

    const connected = store.getState().options.connectedPeers;

    expect( connected ).toStrictEqual([ 'newpeer' ]);
  });

  it( 'removeConnectedPeer with wrong param', () => {
    store.dispatch( removeConnectedPeer( 'notexist' ) );

    const connected = store.getState().options.connectedPeers;

    expect( connected ).toStrictEqual([ 'newpeer' ]);
  });

  it( 'removeConnectedPeer', () => {
    store.dispatch( removeConnectedPeer( 'newpeer' ) );

    const connected = store.getState().options.connectedPeers;

    expect( connected ).toStrictEqual([]);
  });

  it( 'setDarkTheme', () => {
    store.dispatch( setDarkTheme( false ) );

    const darkTheme = store.getState().options.darkTheme;

    expect( darkTheme ).toBe( false );
  });
});