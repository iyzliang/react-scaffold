import { Dispatch, AnyAction } from 'redux'

export interface ITestState {
  testA: string
  testB: string
}

const initState: ITestState = {
  testA: 'aaa',
  testB: 'bbb'
}

const SET_TEST_A = 'SET_TEST_A'
const SET_TEST_B = 'SET_TEST_B'

export const actions = {
  setAData: (data: any) => {
    return (dispatch: Dispatch) => {
      dispatch({
        type: SET_TEST_A,
        payload: data
      })
    }
  },
  setBData: (data: any) => {
    return (dispatch: Dispatch) => {
      dispatch({
        type: SET_TEST_B,
        payload: data
      })
    }
  }
}

export default (state = initState, action: AnyAction) => {
  switch (action.type) {
    case SET_TEST_A:
      return {
        ...state,
        testA: action.payload
      }
    case SET_TEST_B:
      return {
        ...state,
        testB: action.payload
      }
    default:
      return state
  }
}
