import {RECEIVE_ADDRESS,RECEIVE_FOOTERLIST,RECEIVE_SHOPS} from './mutations_types'

export default {

   [RECEIVE_ADDRESS](state,{address}){
     state.address= address
   },
  [RECEIVE_FOOTERLIST](state,{footerList}){
    state.footerList= footerList
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops= shops
  },
}
