import { getDurationFromMs } from "../../lib/getDuration";

describe( 'getDurationFromMs', () => {
  it( 'returns correct string', () => {
    const res = getDurationFromMs( 20601000 );

    expect( res ).toBe( '5:43:21' );
  });

  it( 'returns only seconds if duration is less than 60 seconds', () => {
    const res = getDurationFromMs( 59000 );

    expect( res ).toBe( '59' );
  })
});