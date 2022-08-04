import store from "../../redux/index";
import {
  setMessage
} from "../../redux/slices/errorMessage";

describe( 'test errorMessage slice', () => {
  it( 'setMessage', () => {
    store.dispatch( setMessage( 'test message' ) );

    const message = store.getState().errorMessage.message;

    expect( message ).toBe( 'test message' );
  })
});