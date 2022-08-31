import { getRandomPeerId } from "../../lib/getRandomPeerId";

describe( 'getQueueLength', () => {
  it( 'returns correct length', () => {
    const randomId = getRandomPeerId();

    expect( randomId.length ).toBe( 64 );
    expect( /^collectS[a-zA-Z0-9]*/.test( randomId ) ).toBeTruthy();
  });
});