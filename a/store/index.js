import axios from 'axios'
export const state = () => ({
  categories: null,
  promoActions: [],
  products: null,
  productsFilteredCopy: null,
  productsFilteredCopyCopy: null,
  BackUrl: 'https://textforeva.ru',
  ws: null,
  filters: [],
  priceRange: [0,1500000]
})
export const mutations = {
  SetPromoActions(state, promoActions){
    state.promoActions = promoActions
  },
  SetProductsOnly(state, response){
    state.products = response
  },
  SetProducts(state, response){
    state.products = state.productsFilteredCopy = state.productsFilteredCopyCopy = response
  },
  SetCategories(state, response){
    state.categories = response
  },
  SetPriceRange(state, range){
    if(range[0] != range[1]) return state.priceRange = range

    state.priceRange = [0,1500000]
  },
  SetWs(state, ws){
    state.ws = ws
  },
  ChFilters(state,filters){
    state.filters = filters
  },
  ChProductsCopy(state, products){
    state.productsFilteredCopy = state.productsFilteredCopyCopy = products
  },
  FilterProducts(state, MyArray){
    var ExceptionsArray = []
    var filters = {
      priceRange: MyArray[1],
      exceptions: ExceptionsArray,
    }
    MyArray[0].forEach(element => {
      ExceptionsArray.push(
        {
          name: element[0],
          value: element[1]
        }
      )
    });
    switch (MyArray[2][0]) {
      case 'FCat':
        filters.firstLevelCategory = MyArray[2][1];
        break;
      case 'SCat':
        filters.secondLevelCategory = MyArray[2][1];
        break;
      case 'TCat':
        filters.thirdLevelCategory = MyArray[2][1];
        break;
    }
    var JSON_Obj = 
      {
        "action": "search",
        "agent": "client",
        "data": {
          "filters": filters
        }
      }
    var send = function(){
      if(state?.ws){
        state.ws.send(JSON.stringify(JSON_Obj))
      } else {
        setTimeout(() => send(), 200);
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
        setTimeout(() => send(), 200);
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
  CategoryFilter(state, arr){
    var filters = {}
    switch (arr[1]) {
      case 'first':
        filters.firstLevelCategory = arr[0]
        break;
      case 'second':
        filters.secondLevelCategory = arr[0]
        break;
      case 'third':
        filters.thirdLevelCategory = arr[0]
        break;
    }
    var JSON_Obj = 
    {
      "action": "search",
      "agent": "client",
      "data": {
        "filters": filters
      }
    }
    var send = function(){
      if(state?.ws){
        state.ws.send(JSON.stringify(JSON_Obj))
      } else {
        setTimeout(() => send(), 200);
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
        setTimeout(() => send(), 200);
      }
    }
    send()
  },
}

export const actions = {
  async FrontInit({ commit, dispatch }) {
    console.log('FrontInit')

    dispatch('connect')

    await axios.get(`https://textforeva.ru/storage/mostPopular/freshProducts/30`)
    .then(response => {
      commit('SetProductsOnly', response.data)
    })
    .catch(function (error) {
      console.log(error);
    })

    await axios.get(`https://textforeva.ru/promoAction/`)
    .then(response => {
      commit('SetPromoActions', response.data)
    })
    .catch(function (error) {
      console.log(error);
    })

    await axios.get(`https://textforeva.ru/storage/getAllCategories`)
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
      let data = JSON.parse(msg.data)
      commit('ChFilters', data.filterKeys)
      commit('ChProductsCopy', data.products)
      commit('SetPriceRange', data.priceRange)
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