import { createStore } from 'vuex'
import UserModule from './user.module.js'
import createPersistedState from "vuex-persistedstate";

export default createStore({
modules: {
  user: UserModule
},
plugins: [createPersistedState()]
})