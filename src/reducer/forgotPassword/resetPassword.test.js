import resetPasswordReducer from './resetPassword.reducer';
import { ERROR_OR_SUCCESS } from '../../action/forgotPassword/forgotPassword.action';

describe('Forgot Password Reducer', () => {
  test('Initial state', () => {
    const action = { type: 'dummy_action' };
    const initialState = {
      message: {}
    };

    expect(resetPasswordReducer(undefined, action)).toEqual(initialState);
  });

  test('Initial state', () => {
    const action = { type: 'ERROR_OR_SUCCESS', payload: { name: 'test' } };
    const expectedState = {
      message: { name: 'test' }
    };

    expect(resetPasswordReducer(undefined, action)).toEqual(expectedState);
  });
});
