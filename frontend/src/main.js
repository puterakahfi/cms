// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/css/styles.scss'
import Vuex from 'vuex'
import store from '~/store';

export default function (Vue, { router, head, isClient,  appOptions  }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  appOptions.store = store;

}
