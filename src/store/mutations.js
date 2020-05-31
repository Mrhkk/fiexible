const mutations = {
    increment(state) {
        state.count++
    },
    deincrement(state) {
        state.count--
    },
    isShow(state) {
        state.show = !state.show
    }
}
export default mutations