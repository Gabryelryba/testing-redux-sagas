import { requestData, requestFailure, requestSuccess, changeJoke, actions } from '../modules/actions';

describe('actions tests', () => {
    it('request data action should have the right type', () => {
      const expectedAction = {
        type: actions.REQUEST_DATA,
      }
      expect(requestData()).toEqual(expectedAction)
    });
    it('request failure action should have the right type', () => {
      const expectedAction = {
        type: actions.REQUEST_FAILURE,
      }
      expect(requestFailure()).toEqual(expectedAction)
    })
    it('request success action should have the right type', () => {
      const expectedAction = {
        type: actions.REQUEST_SUCCESS,
      }
      expect(requestSuccess()).toEqual(expectedAction)
    })
    it('change joke action should have the right type and payload', () => {
      const expectedAction = {
        type: actions.CHANGE_JOKE,
        data: {
          joke: 'this is a test joke'
        }
      }
      expect(changeJoke('this is a test joke')).toEqual(expectedAction)
    })
  })