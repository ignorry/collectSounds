import { getTheme } from "../../lib/theme";

describe( 'getTheme', () => {
  it( 'returns light theme', () => {
    expect( getTheme( false ).colors.font ).toBe( '#000000' );
  });

  it( 'returns dark theme', () => {
    expect( getTheme( true ).colors.font ).toBe( '#ffffff' );
  });
});