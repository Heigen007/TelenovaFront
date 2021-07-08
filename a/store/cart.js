export default {
    namespaced: true,
    state: {
      cart: [],
      cartCount: 0
    },
    getters: {
      cart: s => s.cart
    },
    mutations: {
      AmountCh(state, ValueId){
        if(state.cart[ValueId[1]].offerData.count + ValueId[0] > 0) {
          state.cart[ValueId[1]].offerData.count += ValueId[0]
          localStorage.setItem('cart', JSON.stringify(state.cart))
        }
      },
      clear(state){
        state.cart = []
        localStorage.setItem('cart', JSON.stringify([]))
      },
      cartChange(state, product){
        var Updated = false
        if(!product.offerData.count) product.offerData.count = 1
        if(localStorage.getItem('cart')){
          var currentCart = state.cart
          currentCart.forEach(function(item) {
            if (item.offerData.name == product.offerData.name) {
              item.offerData.count += 1
              state.cartCount += 1
              Updated = true
            }
          });
          if(!Updated) {
            currentCart.push(product)
            state.cartCount += 1
          }
          localStorage.setItem('cart', JSON.stringify(currentCart))
        } else {
          localStorage.setItem('cart', JSON.stringify([product]))
        }
        state.cart = JSON.parse(localStorage.getItem('cart'))
      },
      getCart(state){
        state.cart = JSON.parse(localStorage.getItem('cart'))
      },
      DeleteItemFromCart(state, el){
        var filteredData = state.cart.filter(cartItem => cartItem.offerData.name != el.offerData.name)
        console.log(filteredData);
        state.cart = filteredData
        localStorage.setItem('cart', JSON.stringify(filteredData))
      }
    }
  }
  