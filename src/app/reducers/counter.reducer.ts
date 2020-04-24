import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../core/actions';

export interface State {
  count: number
}
export const initialState = {
  count: 0
};

const counterReducer = createReducer(initialState,
  on(increment, state => ({ ...state, count: state.count + 1 })),
  on(decrement, state =>({ ...state, count: state.count - 1 })),
  on(reset, state => ({ ...state, count: 0 }))
);

export function reducer(state: State | undefined, action: Action) {
  return counterReducer(state, action);
}
