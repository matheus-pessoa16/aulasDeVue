import Vue from 'vue'
import Vuex from 'vuex'
import almoxarifado from './almoxarifado/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        almoxarifado
    }
})
