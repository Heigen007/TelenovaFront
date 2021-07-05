import axios from 'axios'
export const state = () => ({
  categories: null,
  products: null,
  productsFilteredCopy: null,
  productsFilteredCopyCopy: null,
  BackUrl: 'http://157.230.225.244',
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
    state.productsFilteredCopy = products
    state.productsFilteredCopyCopy = products
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
    state.ws.send(JSON.stringify(JSON_Obj))
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
    if(state?.ws){
      state.ws.send(JSON.stringify(JSON_Obj))
    } else {
      setTimeout(() => {
        state.ws.send(JSON.stringify(JSON_Obj))
      }, 1000);
    }
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
    if(state?.ws){
      state.ws.send(JSON.stringify(JSON_Obj))
    } else {
      setTimeout(() => {
        state.ws.send(JSON.stringify(JSON_Obj))
      }, 1000);
    }
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
    if(state?.ws){
      state.ws.send(JSON.stringify(JSON_Obj))
    } else {
      setTimeout(() => {
        state.ws.send(JSON.stringify(JSON_Obj))
      }, 1000);
    }

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
    state.ws.send(JSON.stringify(obj))
  },
}

export const actions = {
  FrontInit({ commit, dispatch }) {
    console.log('FrontInit')
    dispatch('connect')
    axios.get(`http://157.230.225.244/storage`)
    .then(response => {
      commit('SetProducts', response.data)
    })
    .catch(function (error) {
      console.log(error);
    })

    axios.get(`http://157.230.225.244/storage/getAllCategories`)
    .then(response => {
      commit('SetCategories', response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  async connect ({ commit, dispatch }) {
    var connection = new WebSocket(`ws://157.230.225.244:2000`)
    connection.onmessage = async (msg) => {
      let data = JSON.parse(msg.data)
      console.log(data);
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