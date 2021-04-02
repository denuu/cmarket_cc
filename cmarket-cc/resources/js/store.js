import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        form: {
            currentStep: 1,
            firstName: '',
            lastName: '',
            shopCategory: '',
            portfolioLink: '',
            contentOwner: '',
            existingStore: '',
            existingStoreUrls: '',
            // email: '',
            qualityPerspective: '',
            experienceLevel: '',
            businessMarketing: ''
        }
    },
    getters: {
        getField
    },
    mutations: {
        updateField
    }
});