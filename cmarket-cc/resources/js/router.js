import FirstStep from '../components/steps/stepOne.vue'
import SecondStep from '../components/steps/stepTwo.vue'
import ThirdStep from '../components/steps/stepThree.vue'

export const routes = [
    { path: '/1', name: 'firstStep', component: FirstStep },
    { path: '/2', name: 'secondStep', component: SecondStep },
    { path: '/3', name: 'thirdStep', component: ThirdStep },
]

// const router = new VueRouter({ ... })

// router.beforeEach((to, from, next) => {
//     if (to.path === '/4' && !store.state.hasFourthStep) {
//         next(false)
//     } else {
//         next()
//     }
// })