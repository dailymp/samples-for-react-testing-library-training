import {
  CONTACTS_LOAD,
  CONTACT_UPDATE,
  CONTACT_CREATE,
  CONTACTS_DELETE,
} from './types';

import { contactReducer } from './reducers';

describe('contact Reducer', () => {
  it('should handle CONTACTS_LOAD', () => {
    expect(
      contactReducer([], {
        type: CONTACTS_LOAD,
        contacts: [
          { id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' },
          { id: '2', name: 'Enrique Iglesias', email: 'enrique@gmail.com' },
        ],
      })
    ).toEqual([
      { id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' },
      { id: '2', name: 'Enrique Iglesias', email: 'enrique@gmail.com' },
    ]);
  });

  it('should handle CONTACT_CREATE', () => {
    expect(
      contactReducer([], {
        type: CONTACT_CREATE,
        contact: { id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' },
      })
    ).toEqual([{ id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' }]);

    expect(
      contactReducer(
        [{ id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' }],
        {
          type: CONTACT_CREATE,
          contact: {
            id: '2',
            name: 'Enrique Iglesias',
            email: 'enrique@gmail.com',
          },
        }
      )
    ).toEqual([
      { id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' },
      { id: '2', name: 'Enrique Iglesias', email: 'enrique@gmail.com' },
    ]);
  });

  it('should handle CONTACT_DELETE', () => {
    expect(
      contactReducer(
        [{ id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' }],
        {
          type: CONTACTS_DELETE,
          contact: { id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' },
        }
      )
    ).toEqual([]);

    expect(
      contactReducer(
        [
          { id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' },
          { id: '2', name: 'Enrique Iglesias', email: 'enrique@gmail.com' },
        ],
        {
          type: CONTACTS_DELETE,
          contact: {
            id: '2',
            name: 'Enrique Iglesias',
            email: 'enrique@gmail.com',
          },
        }
      )
    ).toEqual([{ id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' }]);
  });

  it('should handle CONTACT_UPDATE', () => {
    expect(
      contactReducer(
        [{ id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' }],
        {
          type: CONTACT_UPDATE,
          contact: {
            id: '1',
            name: 'Aga Skrobot',
            email: 'agaMalaga@gmail.com',
          },
        }
      )
    ).toEqual([{ id: '1', name: 'Aga Skrobot', email: 'agaMalaga@gmail.com' }]);

    expect(
      contactReducer(
        [
          { id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' },
          { id: '2', name: 'Enrique Iglesias', email: 'enrique@gmail.com' },
        ],
        {
          type: CONTACT_UPDATE,
          contact: {
            id: '2',
            name: 'Enrique Iglesias',
            email: 'iglesias@gmail.com',
          },
        }
      )
    ).toEqual([
      { id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' },
      { id: '2', name: 'Enrique Iglesias', email: 'iglesias@gmail.com' },
    ]);
  });
});
