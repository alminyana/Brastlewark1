import * as reducer from './brastlewark.reducer';
import * as fromActions from '../actions/brastlewark.actions';
import { BrastlewarkItem } from '../app/people/model/brastlewark-item.interface';
import { NewList, GET_BY_ID, NEW_LIST } from '../actions/brastlewark.actions';

describe('Reducer', () => {
  describe('undefined action', () => {

    it('should return the default state', () => {
      const initialState = reducer.initialState;
      const action = { type: undefined, id: 1 };
      const state = reducer.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('NewList action', () => {
    it('should return mock object value with NewList Action', () => {
        const list = [{
            age: 12345,
            friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
            hair_color: 'Pink',
            height: 107.75835,
            id: 0,
            name: 'Tobus Quickwhistle',
            professions: ['Metalworker', 'Woodcarver', 'Stonecarver', 'Tinker', 'Tailor', 'Potter'],
            thumbnail: 'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
            weight: 39.065952
        }];
        const value = 12345;
        const action: NewList = { type: NEW_LIST, payload: list };
        const state = reducer.reducer(undefined, action);

        expect(state[0].age).toBeTruthy();
        expect(state[0].age).toEqual(value);
      });

  });
});
