import ru from '../locales/ru.json'
import en from '../locales/en.json'
import kz from '../locales/kz.json'

export default {
  namespaced: true,
  state: {
    lang: '',
    locales: {
      'ru-RU': ru,
      'en-US': en,
      'kz-KZ': kz
    }
  },
  getters: {
    lang: s => s.lang
  },
  mutations: {
    getLang(state) {
      state.lang = localStorage.getItem('lang') || 'en-US'
      console.log(state.lang)
    },
    changeLang(state, lang){
      state.lang = lang
      localStorage.setItem('lang', lang)
    }
  }
}
