const mutations = {
    increment(state) {
        state.count++
    },
    deincrement(state) {
        state.count--
    },
    isShow(state) {
        state.show = !state.show
    },
    changeKey(state) {
        state.keyShow = !state.keyShow
    }
}
export default mutations