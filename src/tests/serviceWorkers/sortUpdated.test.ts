import { sortUpdated } from "../../serviceWorkers/utils/sortUpdated";
import { SavedState } from "../../redux/slices/saved";

describe( 'sortUpdated', () => {
  it( 'returns only new items', async () => {
    const saved = {
      data: [{
        id: '1',
        item: {
          id: '1',
          lastModified: 10,
        }
      },{
        id: '2',
        item: {
          id: '2',
          lastModified: 20,
        }
      }],
      deleted: [{
        id: '3',
        item: 10,
      },{
        id: '4',
        item: 20,
      }]
    } as SavedState;

    const expected = {
      data: [{
        id: '2',
        item: {
          id: '2',
          lastModified: 20,
        }
      }],
      deleted: [{
        id: '4',
        item: 20,
      }]
    } as SavedState;

    expect( sortUpdated( saved, 15 ) ).toStrictEqual( expected );
  });
});