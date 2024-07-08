
import { combineReducers } from 'redux';

import quote from './quote'
import category from './category';

const reducers = combineReducers({
  quote,
  category
});

export default reducers;
