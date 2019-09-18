import axios from 'axios'

const state = {
    menus: []
};

const getters = {
    allMenus: (state) => state.menus
};

const actions = {
    async  fetchMenus({ commit }) {
        commit('setMenu', menuData);
    }
};
const mutations = {
    setMenu: (state, menu) => state.menus = menu
};



export default {
    state,
    getters,
    actions,
    mutations
}

/**
 * todo use api (json to fetch data)
 */
const menuData = [{
    "label": "Home",
    "link": "/"
},
{
    "label": "Artikel",
    "link": "/jadwal"
},
{
    "label": "Screencast",
    "link": "/jadwal"
},

{
    "label": "Screencast",
    "link": "/jadwal"
},

{
    "label": "Screencast",
    "link": "/jadwal"
},


{
    "label": "Screencast",
    "link": "/jadwal"
},

]