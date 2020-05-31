const actions = {
    increment(content) {
        content.commit('increment')
    },
    deincrement(content) {
        content.commit('deincrement')
    }
}
export default actions