/**
 * Created by 30411 on 2016/12/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import * as getters from './getters'

import account from './modules/account'
import auth from './modules/auth'
import center from './modules/center'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    actions,
    getters,
    modules: {
      center,
      account,
      auth,
    },
    // strict: false,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

export default store

