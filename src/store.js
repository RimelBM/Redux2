import reducer from './reducers/rootReducer'
import {increment ,decrement , reset} from './actions/action'
import { createStore ,applyMiddleware  } from "redux";


const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
   }
  
  
const store = createStore(reducer,applyMiddleware(logger));
  
  
   store.dispatch(increment);
   store.dispatch(increment);
   store.dispatch(decrement);
   store.dispatch(reset);

   export default store ;