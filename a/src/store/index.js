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
  }
}

export const actions = {
  FrontInit({ commit }) {
    console.log('FrontInit')

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

    const ws = new WebSocket(`ws://157.230.225.244:2000`)
    commit('SetWs', ws)
    ws.onopen = function () {
      console.log('START WEBSOCKET CONNECTION');
    };
    ws.onclose = function () {
      console.log('CLOSE WEBSOCKET CONNECTION')
    };

    ws.onmessage = function (event) {
      let data = JSON.parse(event.data)
      console.log(data);
      commit('ChFilters', data.filterKeys)
      commit('ChProductsCopy', data.products)
    }
    setInterval(() => {
      ws.send("Hello Dimash))))")
      console.log('WS Update');
    }, 30000);
  }
}

export const getters = {
  BestCategories: s => s.categories
}