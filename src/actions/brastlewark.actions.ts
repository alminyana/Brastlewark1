import { Action } from '@ngrx/store';
import { BrastlewarkItem } from '../app/people/model/brastlewark-item.interface';

export const NEW_LIST = '[LIST] new';
export const FILTER_LIST = '[LIST] filter';

export class NewList implements Action {
    readonly type = NEW_LIST;

    constructor(public payload: BrastlewarkItem[]) {}
}

export class FilterList implements Action {
    readonly type = FILTER_LIST;

    constructor(public prop: string, public items: boolean, public payload: BrastlewarkItem[]) {}
}

export type Actions = NewList | FilterList;
