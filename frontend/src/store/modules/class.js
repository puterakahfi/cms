import axios from 'axios'

const state = {
    classes: []
};

const getters = {
    allClasses: (state) => state.classes
};

const actions = {
    async fetchClassess({ commit }) {
        const response = await axios.get('static/class.json');
        commit('setTodos', response.data);
    },

};
const mutations = {
    setTodos: (state, todo) => state.todos = todo,
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id != id),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1) {
            state.todos.splice(index,1, updTodo)
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}