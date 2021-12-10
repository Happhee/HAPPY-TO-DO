import { createStore } from 'redux';
import RootReducers from './reducers/RootReducers';

const store = createStore(RootReducers);

export default store;