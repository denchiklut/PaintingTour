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
  counter: counterReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
