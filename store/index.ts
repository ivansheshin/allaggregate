import { ActionTree, GetterTree, MutationTree } from 'vuex'

export const state = () => ({
  userInfo: {
    UID: ''
  }
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getUserInfo: state => state.userInfo
}

export const mutations: MutationTree<RootState> = {
  SET_USER_ID: (state, UID: string) => (state.userInfo.UID = UID),
  RESET_USER_ID: state => (state.userInfo.UID = '')
}

export const actions: ActionTree<RootState, RootState> = {
  setUserId ({ commit }, UID) {
    commit('SET_USER_ID', UID)
  },
  resetUserId ({ commit }) {
    commit('RESET_USER_ID')
  }
}
