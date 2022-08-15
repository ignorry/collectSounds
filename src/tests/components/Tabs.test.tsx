import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";

import Tabs from "../../components/primitives/Tabs";

describe( 'Tabs component', () => {
  it( 'display label and content', () => {
    const tabs = [{
      content: <span>content</span>,
      label: 'nav'
    }];

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Tabs tabs={tabs}/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const button = result.container.querySelector( 'button' );
    const content = result.container.querySelector( 'span' );

    expect( button.textContent ).toBe( 'nav')
    expect( content.textContent ).toBe( 'content' );
  });

  it( 'inactive tab should be hidded', () => {
    const tabs = [{
      content: <span>content</span>,
      label: 'label'
    },{
      content: <span>content</span>,
      label: 'label'
    }];

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Tabs tabs={tabs}/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const content = result.container.querySelectorAll( 'span' )[1].parentElement;

    expect( window.getComputedStyle( content ).display ).toBe( 'none' );
  });

  it( 'handle change of active tab', async () => {
    const user = userEvent.setup()

    const tabs = [{
      content: <span>content</span>,
      label: 'label'
    },{
      content: <span>content</span>,
      label: 'second'
    }];

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Tabs tabs={tabs}/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    await user.click( screen.getByText( 'second' ) )

    const content = result.container.querySelectorAll( 'span' )[1].parentElement;

    expect( window.getComputedStyle( content ).display ).toBe( 'block' );
  });

  it( 'matches to snapshot', () => {
    const tabs = [{
      content: 'content',
      label: 'label'
    }];

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Tabs tabs={tabs}/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});