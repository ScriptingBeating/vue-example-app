import Vuex from 'vuex';

import users from './modules/users';
import posts from './modules/posts';

export default new Vuex.Store({
    modules: {
        users,
        posts,
    }
})