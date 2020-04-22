import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions';

export const initialState = 0;

// tslint:disable-next-line:variable-name
const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
