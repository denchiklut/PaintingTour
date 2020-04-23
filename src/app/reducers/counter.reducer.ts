import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../core/actions';

export const initialState = 0;

const counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function reducer(state, action) {
  return counterReducer(state, action);
}
