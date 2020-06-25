import { Action } from '@ngrx/store';
import { BrastlewarkItem } from '../app/people/model/brastlewark-item.interface';

export const NEW_LIST = '[LIST] new';
export const FILTER_EMPTY_LIST = '[LIST] filter empty';
export const FILTER_FULL_LIST = '[LIST] filter full';
export const GET_LIST = '[LIST] get';

export class NewList implements Action {
    readonly type = NEW_LIST;

    constructor(public payload: BrastlewarkItem[]) {}
}

export class FilterEmptyList implements Action {
    readonly type = FILTER_EMPTY_LIST;

    constructor(public prop: string, public payload: BrastlewarkItem[]) {}
}

export class FilterFullList implements Action {
    readonly type = FILTER_FULL_LIST;

    constructor(public prop: string, public payload: BrastlewarkItem[]) {}
}

export class GetList implements Action {
    readonly type = GET_LIST;

    constructor(public payload: BrastlewarkItem[]) {}
}

export type Actions = NewList | FilterEmptyList | FilterFullList | GetList;
