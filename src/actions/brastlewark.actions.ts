import { Action } from '@ngrx/store';
import { BrastlewarkItem } from '../app/people/model/brastlewark-item.interface';

export const NEW_LIST = '[LIST] new';

export class NewList implements Action {
    readonly type = NEW_LIST;

    constructor(public payload: BrastlewarkItem[]) {}
}

export type Actions = NewList;
