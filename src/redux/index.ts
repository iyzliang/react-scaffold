import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import testReducer from './reducers/test'

const reducers = () => {
  return combineReducers({
    test: testReducer
  })
}

const rootReducers = reducers()

export default createStore(rootReducers, composeWithDevTools(compose(applyMiddleware(thunk))))

export type RootState = ReturnType<typeof rootReducers>
