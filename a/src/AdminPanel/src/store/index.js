import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import ecommerceStoreModule from '@/views/apps/e-commerce/eCommerceStoreModule'
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state:({
    BackUrl: 'http://157.230.225.244',
    WsConnection: null,
    AllProducts: [],
    AllProductsCopy: [],
    Categories: null
  }),
  mutations: {
    ChProducts(state, updatedVersion) {
      state.AllProducts = updatedVersion
    },
    StartShopGetter(state){
      console.log(1)
      axios.get(`http://157.230.225.244/storage`)
      .then(response => {
        console.log('success')
        state.AllProducts = response.data
        state.AllProductsCopy = response.data
      })
      .catch(function (error) {
        console.log(error);
      })
  
      axios.get(`http://157.230.225.244/storage/getAllCategories`)
      .then(response => {
        console.log(response.data);
        state.Categories = response.data
      })
      .catch(function (error) {
        console.log(error);
      })
  
      const ws = new WebSocket(`ws://157.230.225.244:2000`)
      state.WsConnection = ws
      ws.onopen = function () {
        console.log('START WEBSOCKET CONNECTION');
      };
      ws.onclose = function () {
        console.log('CLOSE WEBSOCKET CONNECTION')
      };
  
      ws.onmessage = function (event) {
        let data = JSON.parse(event.data)
        state.AllProducts = data.products
        state.AllProductsCopy = data.products
      }
      setInterval(() => {
        ws.send("Hello Dimash))))")
        console.log('WS Update');
      }, 30000);
    },
    Filter(state, e) {
      var PriceRange
      switch (e[0]) {
        case '<=20000 тг.':
          PriceRange = [0,20000]
          break;
        case '20000 тг. - 100000 тг.':
          PriceRange = [20000,100000]
          break;
        case '100000 тг. - 300000 тг.':
          PriceRange = [100000,300000]
          break;
        case '300000 тг. - 1000000 тг.':
          PriceRange = [300000,1000000]
          break;
        case '1000000 тг. +':
          PriceRange = [1000000,10000000]
          break;
        default:
          PriceRange = false
      }
      if(!PriceRange){
        var JSON_Obj = 
        {
          "action": "search",
          "agent": "client",
          "data": {
            "query": "",
            "filters": {
              "firstLevelCategory": e[1]
            }
          }
        }        
      } else if(e[1] == '') {
        var JSON_Obj = 
        {
          "action": "search",
          "agent": "client",
          "data": {
            "query": "",
            "filters": {
              "priceRange": PriceRange
            }
          }
        }  
      } else {
        var JSON_Obj = 
        {
          "action": "search",
          "agent": "client",
          "data": {
            "query": "",
            "filters": {
              "priceRange": PriceRange,
              "firstLevelCategory": e[1]
            }
          }
        }  
      }
      console.log(JSON_Obj);
      state.WsConnection.send(JSON.stringify(JSON_Obj))
    }
  },
  modules: {
    app,
    appConfig,
    verticalMenu,
    'app-ecommerce': ecommerceStoreModule,
  },
  strict: process.env.DEV,
})
