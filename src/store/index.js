import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://i.imgur.com/rRWen3h.jpg', id: 'asdfglz', title: 'title1', date: '2018-07-17' },
      { imageUrl: 'https://i.imgur.com/rRWen3h.jpg', id: 'asdfglfh', title: 'title2', date: '2018-07-19' }
    ],
    user: {
      id: 'asdfg',
      registeredMeetups: ['asdfglz']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
