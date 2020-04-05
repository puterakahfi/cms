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

    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
        commit('newTodo', response.data);
    },

    async deleteTodo({ commit }, id) {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    async filterTodos({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data);
    },
    async updateTodo({ commit }, updTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
        commit('updateTodo', response.data);
    }
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