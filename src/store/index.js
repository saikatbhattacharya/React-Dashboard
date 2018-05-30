import { createStore } from 'redux';
import App from '../reducer';

const store = createStore(App);

export default store;