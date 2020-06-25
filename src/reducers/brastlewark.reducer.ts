import { Action } from '@ngrx/store';
import { BrastlewarkItem } from '../app/people/model/brastlewark-item.interface';
import * as Actions from '../actions/brastlewark.actions';

const initialState: BrastlewarkItem[] = [
    {
        age: 2222222,
        friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
        hair_color: 'Pink',
        height: 107.75835,
        id: 0,
        name: 'Tobus Quickwhistle',
        professions: ['Metalworker', 'Woodcarver', 'Stonecarver', 'Tinker', 'Tailor', 'Potter'],
        thumbnail: 'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
        weight: 39.065952
    }
];

export function reducer(state: BrastlewarkItem[] = initialState, action: Actions.Actions) {
    switch (action.type) {
        case Actions.NEW_LIST:
            return [...action.payload];
        case Actions.FILTER_EMPTY_LIST:
            return [...action.payload.filter( (item) => item[action.prop].length === 0)];
        case Actions.FILTER_FULL_LIST:
                return [...action.payload.filter( (item) => item[action.prop].length > 0)];
        case Actions.GET_LIST:
            return [...action.payload];
        default:
            return state;
    }
}
