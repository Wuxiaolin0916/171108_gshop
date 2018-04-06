import {RECEIVE_ADDRESS,RECEIVE_FOOTERLIST,RECEIVE_SHOPS} from './mutations_types'

import {reqAddress,reqFoodList,reqShops} from '../api'


export default {

   async getAddress({commit,state}){
    const {latitude,longitude} =state;
    const result = await reqAddress(latitude + ',' +longitude);
     if(result.code===0){
        const address = result.data;
       commit(RECEIVE_ADDRESS,{address})
     }
   },
  async getFooterList({commit}){
    const result = await reqFoodList();
    if(result.code===0){
      const footerList = result.data;
      commit(RECEIVE_FOOTERLIST,{footerList})
    }
  },
  async getShops({commit,state}){
    const {latitude,longitude} =state;
    const result = await reqShops(latitude,longitude);
    if(result.code===0){
      const shops = result.data;
      commit(RECEIVE_SHOPS,{shops})
    }
  }


}






