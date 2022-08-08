import MockDate from "mockdate";
import store from "../../redux";
import { addItem, deleteItem } from "../../redux/slices/saved";
import { Video } from "../../models/content";

import {
  getMaxLastModifiedInMap,
  getMaxLastModified,
  syncPeers
} from "../../redux/middleware/syncPeers";
import { getAll } from "../../lib/redux/getAll";

describe( 'getMaxLastModifiedInMap', () => {
  beforeAll(() => {
    MockDate.set( 1434319925275 );

    store.dispatch( addItem([{
      type: 'video',
      id: 'videoId',
      lastModified: 1434319925275,
    } as Video, {
      type: 'video',
      id: 'video2',
      lastModified: 1434319925275,
    } as Video ]));

    store.dispatch( deleteItem(['video2']));
  });

  it( 'returns mocked timestamp', () => {
    const content = [{
      type: 'video',
      id: 'videoId',
      lastModified: 1434319925275
    } as Video ];

    const res = store.dispatch( getMaxLastModifiedInMap(content) );

    expect( res ).toBe( 1434319925275 );
  });
});

describe( 'getMaxLastModified', () => {
  beforeAll(() => {
    MockDate.set( 1434319925275 );

    store.dispatch( addItem([{
      type: 'video',
      id: 'videoId',
      lastModified: 1434319925275,
    } as Video, {
      type: 'video',
      id: 'video2',
      lastModified: 1434319925275,
    } as Video ]));

    store.dispatch( deleteItem(['video2']));
  });

  it( 'returns mocked timestamp', async () => {
    const res = store.dispatch( getMaxLastModified() );

    expect( res ).toBe( 1434319925275 );
  });
});