import {combineReducers} from 'redux';

import robotsReducers from '../../../redux/robots/reducer';
import userReducers from '../../../redux/users/reducer';

export default combineReducers({
    robots:robotsReducers,
    users:userReducers,
});