import store from "../../redux/index";
import { addItem } from "../../redux/slices/saved";
import { addItem as addQueueItem } from "../../redux/slices/queue";
import { Video } from "../../models/content";

import {
  getQueueLength
} from "../../lib/redux/getQueueLength";

describe( 'getQueueLength', () => {
  it( 'returns correct length', () => {
    store.dispatch( addItem([ { type: 'video', id: 'first', duration: 1000 } as Video ]) );
    store.dispatch( addItem([ { type: 'video', id: 'second', duration: 2000 } as Video ]) );

    store.dispatch( addQueueItem( 'first' ) );
    store.dispatch( addQueueItem( 'second' ) );

    const length = store.dispatch( getQueueLength() );

    expect( length ).toBe( '03' );
  });
});