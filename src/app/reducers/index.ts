import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as counterReducer from './counter.reducer';

export interface State {
  count: number;
}

export const reducers: ActionReducerMap<State> = {
  count: counterReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
