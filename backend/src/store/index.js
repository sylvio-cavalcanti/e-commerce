import {createStore} from "vuex";
import * as actions from './actions';
import * as mutations from './mutations';

const store = createStore({
    state: {
        user: {
            token: sessionStorage.getItem('TOKEN'),
            // token: 12345,
            data: {}
        }
    },
    getters: {},
    actions, // This is the same as 'actions: actions' (from the imports) but is not needed as of ESC6
    mutations,
})

export default store