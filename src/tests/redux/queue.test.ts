import store from "../../redux/index";
import {
  addItem,
  deleteItem,
  setAll,
  cleanQueue,
} from "../../redux/slices/queue";

describe( 'test queue slice', () => {
  it( 'addItem', () => {
    store.dispatch( addItem( 'id' ) );

    const queue = store.getState().queue.data;

    expect( queue ).toStrictEqual([ 'id' ]);
  });

  it( 'addItem should not add already existing key', () => {
    store.dispatch( addItem( 'id' ) );

    const queue = store.getState().queue.data;

    expect( queue ).toStrictEqual([ 'id' ]);
  });

  it( 'deleteItem with wrong param', () => {
    store.dispatch( deleteItem( 'doesntexist' ) );

    const queue = store.getState().queue.data;

    expect( queue ).toStrictEqual([ 'id' ]);
  });

  it( 'deleteItem', () => {
    store.dispatch( deleteItem( 'id' ) );

    const queue = store.getState().queue.data;

    expect( queue ).toStrictEqual([]);
  });
});

describe( 'test setAll', () => {
  it( 'moveItem with wrong param', () => {
    store.dispatch( setAll([ 'first', 'second', 'third' ]) );

    const queue = store.getState().queue.data;

    expect( queue ).toStrictEqual( [ 'first', 'second', 'third' ] );
  });
});

describe( 'test cleanQueue', () => {
  it( 'moveItem with wrong param', () => {
    store.dispatch( setAll([ 'first', 'second', 'third' ]) );

    store.dispatch( cleanQueue() );

    const queue = store.getState().queue.data;

    expect( queue ).toStrictEqual( [] );
  });
});