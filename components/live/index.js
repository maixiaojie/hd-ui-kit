import Live from './live.vue'

Live.install = function (Vue) {
    Vue.component(Live.name, Live)
}
export default Live