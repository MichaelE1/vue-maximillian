import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert'

import {
  Vuetify,
  VAlert,
  VApp,
  VCard,
  VCarousel,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VDatePicker,
  VTimePicker,
  VTextField,
  VToolbar,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAlert,
    VCard,
    VCarousel,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VDatePicker,
    VTimePicker,
    VTextField,
    VToolbar,
    transitions
  }
})

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({apiKey: 'AIzaSyDQNVCA5AsqYO1RDmmPEuryha8-YOboanM',
      authDomain: 'devmeetup-fead1.firebaseapp.com',
      databaseURL: 'https://devmeetup-fead1.firebaseio.com',
      projectId: 'devmeetup-fead1',
      storageBucket: 'devmeetup-fead1.appspot.com'
    })
  }
})
