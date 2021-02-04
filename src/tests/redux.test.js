import reducer from '../modules/reducer';
import { actions } from '../modules/actions';

describe('testing reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        loading: false,
        joke: null
    });
  });

  it('should handle REQUEST_DATA', () => {
    expect(reducer({
      loading: false,
      joke: null
    }, {
      type: actions.REQUEST_DATA,
    })).toEqual({
        loading: true,
        joke: null
    });
  });

  it('should handle REQUEST_FAILURE', () => {
    expect(reducer({
      loading: true,
      joke: null
    }, {
      type: actions.REQUEST_FAILURE,
    })).toEqual({
        loading: false,
        joke: null
    });
  });

  it('should handle REQUEST_SUCCESS', () => {
    expect(reducer({
      loading: true,
      joke: null,
    }, {
      type: actions.REQUEST_SUCCESS,
    })).toEqual({
        loading: false,
        joke: null,
    });
  });

  it('should handle CHANGE_JOKE', () => {
    expect(reducer({
      loading: false,
    }, {
      type: actions.CHANGE_JOKE,
      payload: {
        joke: 'Joke not is null'
      }
    })).toEqual({
      loading: false,
      joke: 'Joke not is null'
    });
  });

  it('should handle DEFAULT CASE', () => {
    expect(reducer({
      loading: false,
      joke: null,
    }, {
      type: null,
    })).toEqual({
      loading: false,
      joke: null
    });
  });
});