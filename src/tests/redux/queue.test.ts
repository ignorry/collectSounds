import store from "../../redux/index";
import {
  addItem,
  deleteItem,
  moveItem
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

describe( 'test moveItem', () => {
  beforeEach( () => {
    store.dispatch( deleteItem( 'first' ) );
    store.dispatch( deleteItem( 'second' ) );
    store.dispatch( deleteItem( 'third' ) );
    store.dispatch( deleteItem( 'fourth' ) );
    store.dispatch( deleteItem( 'fifth' ) );

    store.dispatch( addItem( 'first' ) );
    store.dispatch( addItem( 'second' ) );
    store.dispatch( addItem( 'third' ) );
    store.dispatch( addItem( 'fourth' ) );
    store.dispatch( addItem( 'fifth' ) );
  });

  it( 'moveItem with wrong param', () => {
    store.dispatch( moveItem({ id: 'doesnt exist', shift: 1 }));

    const queue = store.getState().queue.data;

    expect( queue ).toStrictEqual(['first', 'second', 'third', 'fourth', 'fifth']);
  });

  it( 'moveItem moves further', () => {
    store.dispatch( moveItem({ id: 'second', shift: 2 }));

    const queue = store.getState().queue.data;

    expect( queue ).toStrictEqual(['first', 'third', 'fourth', 'second', 'fifth']);
  });

  it( 'moveItem moves back', () => {
    store.dispatch( moveItem({ id: 'fourth', shift: -2 }));

    const queue = store.getState().queue.data;

    expect( queue ).toStrictEqual(['first', 'fourth', 'second', 'third', 'fifth']);
  });

  it( 'moveItem moves further than length of array', () => {
    store.dispatch( moveItem({ id: 'third', shift: 3 }));

    const queue = store.getState().queue.data;

    expect( queue ).toStrictEqual(['first', 'second', 'fourth', 'fifth', 'third']);
  });

  it( 'moveItem moves back than 0', () => {
    store.dispatch( moveItem({ id: 'third', shift: -3 }));

    const queue = store.getState().queue.data;

    expect( queue ).toStrictEqual(['third', 'first', 'second', 'fourth', 'fifth']);
  });
});