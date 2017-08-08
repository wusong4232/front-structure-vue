/**
 * Created by zhouzhigang on 2017/6/15.
 */
import * as types from '../mutation-type'

// initial state
// shape: [{ id, quantity }]
const state = {
  options: ['q','w','e'],
  checkoutStatus: null,
  tt: '111',
  menuTab: {
    menuActiveName:'',
    tabValue:'',
    tabs:[],
  }
}

// const map =

// getters
const getters = {
  tabs: state => state.menuTab.tabs,
  menuActiveName: state => state.menuTab.menuActiveName,
  tabValue: state => state.menuTab.tabValue
    // checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  // checkout ({ commit, state }, products) {
  //   const savedCartItems = [...state.added]
  //   commit(types.CHECKOUT_REQUEST)
  //   shop.buyProducts(
  //     products,
  //     () => commit(types.CHECKOUT_SUCCESS),
  //     () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
  // )
  // }
}

// mutations
const mutations = {

  [types.MENU_TO_TAB] (state, tab){
    state.menuTab.tabs.push(tab);
    state.menuTab.menuActiveName = tab.name;
    state.menuTab.tabValue = tab.name;

  },

  [types.CHANGE_TAB] (state, tab){
    // if (tab){
    //   //如果menu 没有tab.name 不要切换
    // }
    // console.log(tab)
    state.menuTab.menuActiveName = tab.name;
    state.menuTab.tabValue = tab.name;
  },

  [types.ADD_TAB] (state, {tab}){
    state.menuTab.tabs.push(tab);
  },

  [types.DELETE_TAB] (state, {tab}){

  }

  // [types.ADD_TO_CART] (state, { id }) {
  //   state.lastCheckout = null
  //   const record = state.added.find(p => p.id === id)
  //   if (!record) {
  //     state.added.push({
  //       id,
  //       quantity: 1
  //     })
  //   } else {
  //     record.quantity++
  //   }
  // },

  // [types.CHECKOUT_REQUEST] (state) {
  //   // clear cart
  //   state.added = []
  //   state.checkoutStatus = null
  // },
  //
  // [types.CHECKOUT_SUCCESS] (state) {
  //   state.checkoutStatus = 'successful'
  // },
  //
  // [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
  //   // rollback to the cart saved before sending the request
  //   state.added = savedCartItems
  //   state.checkoutStatus = 'failed'
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
