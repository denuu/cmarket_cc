import Vue from "vue";
import VueRouter from "vue-router";
import StepOne from "./components/steps/stepOne.vue";
import StepTwo from "./components/steps/stepTwo.vue";
import StepThree from "./components/steps/stepThree.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "firstStep",
        component: StepOne
    },
    {
        path: "/2",
        name: "secondStep",
        component: StepTwo
    },
    {
        path: "/3",
        name: "thirdStep",
        component: StepThree
    }
];

export default new VueRouter({
    mode: "history",
    routes
});
