import axios from 'axios'
export const state = () => ({
  categories: null,
  products: null,
  productsFilteredCopy: null,
  productsFilteredCopyCopy: null,
  BackUrl: 'https://textforeva.ru',
  ws: null,
  filters: []
})
export const mutations = {
  SetProducts(state, response){
    state.products = response
    state.productsFilteredCopy = response
    state.productsFilteredCopyCopy = response
  },
  SetCategories(state, response){
    state.categories = response
  },
  SetWs(state, ws){
    state.ws = ws
  },
  ChFilters(state,filters){
    state.filters = filters
  },
  ChProductsCopy(state, products){
    var arr = products
    while(arr.length%3 != 0 && arr.length>3 ){
      arr.pop()
    }
    if(arr.length == 6 || arr.length%30 == 6) arr.pop()
    state.productsFilteredCopy = arr
    state.productsFilteredCopyCopy = arr
  },
  FilterProducts(state, MyArray){
    var ExceptionsArray = []
    MyArray[0].forEach(element => {
      ExceptionsArray.push(
        {
          name: element[0],
          value: element[1]
        }
      )
    });
    if(MyArray[2][0] == 'FCat'){
      var JSON_Obj = 
      {
        "action": "search",
        "agent": "client",
        "data": {
          "query": "",
          "filters": {
            "firstLevelCategory": MyArray[2][1],
            "priceRange": MyArray[1],
            "exceptions": ExceptionsArray
          }
        }
      }
    } else if(MyArray[2][0] == 'SCat') {
      var JSON_Obj = 
      {
        "action": "search",
        "agent": "client",
        "data": {
          "query": "",
          "filters": {
            "secondLevelCategory": MyArray[2][1],
            "priceRange": MyArray[1],
            "exceptions": ExceptionsArray
          }
        }
      }
    } else if(MyArray[2][0] == 'TCat') {
      var JSON_Obj = 
      {
        "action": "search",
        "agent": "client",
        "data": {
          "query": "",
          "filters": {
            "thirdLevelCategory": MyArray[2][1],
            "priceRange": MyArray[1],
            "exceptions": ExceptionsArray
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
            "priceRange": MyArray[1],
            "exceptions": ExceptionsArray
          }
        }
      }
    }
    var send = function(){
      if(state?.ws){
        state.ws.send(JSON.stringify(JSON_Obj))
      } else {
        setTimeout(() => {
          send()
        }, 200);
      }
    }
    send()
  },
  FilterProductsQuery(state, MyArray){
    var ExceptionsArray = []
    MyArray[0].forEach(element => {
      ExceptionsArray.push(
        {
          name: element[0],
          value: element[1]
        }
      )
    });
      var JSON_Obj = 
      {
        "action": "search",
        "agent": "client",
        "data": {
          "query": MyArray[2],
          "filters": {
            "priceRange": MyArray[1],
            "exceptions": ExceptionsArray
          }
        }
    }
    var send = function(){
      if(state?.ws){
        state.ws.send(JSON.stringify(JSON_Obj))
      } else {
        setTimeout(() => {
          send()
        }, 200);
      }
    }
    send()
  },
  DefaultSorting(state){
    state.productsFilteredCopyCopy = state.productsFilteredCopy
  },
  SortByPopularity(state, arr){
    state.productsFilteredCopyCopy = arr
  },
  ThirdCategoryFilter(state,string){
    var JSON_Obj = 
    {
      "action": "search",
      "agent": "client",
      "data": {
        "query": "",
        "filters": {
          "thirdLevelCategory": string,
        }
      }
    }
    var send = function(){
      if(state?.ws){
        state.ws.send(JSON.stringify(JSON_Obj))
      } else {
        setTimeout(() => {
          send()
        }, 200);
      }
    }
    send()
  },
  FirstCategoryFilter(state,string){
    var JSON_Obj = 
    {
      "action": "search",
      "agent": "client",
      "data": {
        "query": "",
        "filters": {
          "firstLevelCategory": string,
        }
      }
    }
    console.log(JSON_Obj);
    var send = function(){
      if(state?.ws){
        state.ws.send(JSON.stringify(JSON_Obj))
      } else {
        setTimeout(() => {
          send()
        }, 200);
      }
    }
    send()
  },
  SecondCategoryFilter(state,string){
    var JSON_Obj = 
    {
      "action": "search",
      "agent": "client",
      "data": {
        "query": "",
        "filters": {
          "secondLevelCategory": string,
        }
      }
    }
    var send = function(){
      if(state?.ws){
        state.ws.send(JSON.stringify(JSON_Obj))
      } else {
        setTimeout(() => {
          send()
        }, 200);
      }
    }
    send()
  },
  SearchByQuery(state, query){
    var obj = 
    {
      "action": "search",
      "agent": "client",
      "data": {
        "query": query
      }
    }
    var send = function(){
      if(state?.ws){
        state.ws.send(JSON.stringify(obj))
      } else {
        setTimeout(() => {
          send()
        }, 200);
      }
    }
    send()
  },
}

export const actions = {
  FrontInit({ commit, dispatch }) {
    console.log('FrontInit')
    dispatch('connect')
    axios.get(`https://textforeva.ru/storage/mostPopular/freshProducts/40`)
    .then(response => {
      commit('SetProducts', response.data)
    })
    .catch(function (error) {
      console.log(error);
    })

    axios.get(`https://textforeva.ru/storage/getAllCategories`)
    .then(response => {
      commit('SetCategories', response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  async connect ({ commit, dispatch }) {
    var connection = new WebSocket(`wss://textforeva.ru/ws/`)
    connection.onmessage = async (msg) => {
      console.log(msg)
      let data = JSON.parse(msg.data)
      commit('ChFilters', data.filterKeys)
      commit('ChProductsCopy', data.products)
    }
    connection.onopen = function () {
      console.log('START WEBSOCKET CONNECTION');
      commit('SetWs',connection)
    };
    connection.onclose = async e => {
      console.log('CLOSE WEBSOCKET CONNECTION')
      setTimeout(() => dispatch('connect'), 1)
    }
    connection.onerror = (err) => {
      console.log(err)
    }
  }
}

export const getters = {
  BestCategories: s => s.categories
}