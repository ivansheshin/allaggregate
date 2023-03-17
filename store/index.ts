import { ActionTree, GetterTree, MutationTree } from 'vuex'

export const state = () => ({
  userIDInfo: ''
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getUserInfo: state => state.userIDInfo
}

export const mutations: MutationTree<RootState> = {
  SET_USER_ID: (state, UID: string) => (state.userIDInfo = UID),
  RESET_USER_ID: state => (state.userIDInfo = ''),
  INIT_CART_FROM_LOCALSTORAGE (state) {
    const UID = localStorage.getItem('UID')

    state.userIDInfo = UID || ''
  }
}

export const actions: ActionTree<RootState, RootState> = {
  setUserId ({ commit }, UID) {
    commit('SET_USER_ID', UID)
  },
  resetUserId ({ commit }) {
    commit('RESET_USER_ID')
  },
  nuxtClientInit ({ commit }) {
    commit('INIT_CART_FROM_LOCALSTORAGE')
  }
}
