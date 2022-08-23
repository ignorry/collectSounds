import { getVal, setVal, deleteVal } from "../../lib/redux/arrayUtils";

describe( 'getVal', () => {
  it( 'getVal returns correct val', () => {
    const data = [{
      id: 'first',
      item: 'first item',
    }, {
      id: 'second',
      item: 'second item',
    }, {
      id: 'third',
      item: 'third item',
    }];

    const res = getVal( data, 'second' );

    expect( res ).toBe( 'second item' );
  });
});

describe( 'setVal', () => {
  it( 'setVal returns correct val', () => {
    const data = [{
      id: 'first',
      item: 'first item',
    }, {
      id: 'second',
      item: 'second item',
    }];

    setVal( data, 'third', 'third item' );

    expect( data ).toStrictEqual([{
      id: 'first',
      item: 'first item',
    }, {
      id: 'second',
      item: 'second item',
    }, {
      id: 'third',
      item: 'third item',
    }]);
  });
});

describe( 'deleteVal', () => {
  it( 'deleteVal returns correct val', () => {
    const data = [{
      id: 'first',
      item: 'first item',
    }, {
      id: 'second',
      item: 'second item',
    }, {
      id: 'third',
      item: 'third item',
    }];

    deleteVal( data, 'second' );

    expect( data ).toStrictEqual([{
      id: 'first',
      item: 'first item',
    }, {
      id: 'third',
      item: 'third item',
    }]);
  });
});