import { combineReducers } from 'redux';
import { showProducts} from './users'

const rootReducer = combineReducers({
  user: showProducts
});

export default rootReducer;
