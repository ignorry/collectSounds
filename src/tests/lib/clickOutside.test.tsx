import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { baseTheme } from "../../lib/theme/baseTheme";

import { clickOutside } from "../../lib/clickOutside";

describe( 'clickOutside', () => {
  it( 'calls callback on click outside', () => {
    const result = render(
      <div>
        <button></button>
        <span></span>
      </div>
    );

    const elem = result.container.querySelector( 'button' );
    const callback = jest.fn();

    clickOutside( elem, callback );

    result.container.querySelector( 'span' ).click();

    expect( callback ).toBeCalled();
  });

  it( 'doesn`t call callback on click on the item', () => {
    const result = render(
      <div>
        <button></button>
        <span></span>
      </div>
    );

    const elem = result.container.querySelector( 'button' );
    const callback = jest.fn();

    clickOutside( elem, callback );

    result.container.querySelector( 'button' ).click();

    expect( callback ).toBeCalledTimes( 0 );
  });
});