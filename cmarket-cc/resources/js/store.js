import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        currentStep: 1,
        firstName: '',
        lastName: '',
        shopCategory: '',
        portfolioLink: '',
        existingStore: '',
        existingStoreUrls: '',
        email: '',
        qualityPespective: '',
        experienceLevel: '',
        businessMarketing: ''
    },
    mutations: {
        setCurrentStep(state, payload) {
            state.currentStep = payload.currentStep;
        },
        setFirstName(state, payload) {
            state.firstName = payload.firstName;
        },
        setLastName(state, payload) {
            state.lastName = payload.lastName;
        },
        setShopCategory(state, payload) {
            state.shopCategory = payload.shopCategory;
        },
        setPortfolioLink(state, payload) {
            state.portfolioLink = payload.portfolioLink;
        },
        setExistingStore(state, payload) {
            state.existingStore = payload.existingStore;
        },
        setExistingStoreUrls(state, payload) {
            state.existingStoreUrls = payload.existingStoreUrls;
        },
        setEmail(state, payload) {
            state.email = payload.email;
        },
        setQualityPespective(state, payload) {
            state.qualityPespective = payload.qualityPespective;
        },
        setExperienceLevel(state, payload) {
            state.experienceLevel = payload.experienceLevel;
        },
        setBusinessMarketing(state, payload) {
            state.businessMarketing = payload.businessMarketing;
        }
    }
});