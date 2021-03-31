import VueRouter from "vue-router"
import StepOne from "./components/steps/stepOne.vue"
import StepTwo from "./components/steps/stepTwo.vue"
import StepThree from "./components/steps/stepThree.vue"
import Vue from "vue"

Vue.use(VueRouter)

export const routes = [
    { path: "/1", name: "firstStep", component: StepOne },
    { path: "/2", name: "secondStep", component: StepTwo },
    { path: "/3", name: "thirdStep", component: StepThree }
]

export default new VueRouter({
    routes,
    mode: "history"
})

// router.beforeEach((to, from, next) => {
//     if (to.path === '/4' && !store.state.hasFourthStep) {
//         next(false)
//     } else {
//         next()
//     }
// })
