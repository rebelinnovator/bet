import {combineReducers} from 'redux';
import task from './tasks.reducer'
import promotions from './promotions.reducer'
import owntasks from './owntasks.reducer'

const reducer = combineReducers({
    task,
    promotions,
    owntasks
});

export default reducer;