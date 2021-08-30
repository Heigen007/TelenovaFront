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
    lang: s => s.lang,
    getWord: (state) => ([Component,key,key2,key3]) => {
      if(key3) return state.locales?.[state.lang]?.[Component]?.[key]?.[key2]?.[key3] || ``
      if(key2) return state.locales?.[state.lang]?.[Component]?.[key]?.[key2]|| ``
      return state.locales?.[state.lang]?.[Component]?.[key] || ``
    }
  },
  mutations: {
    getLang(state) {
      state.lang = localStorage.getItem('lang') || 'ru-RU'
    },
    changeLang(state, lang){
      state.lang = lang
      localStorage.setItem('lang', lang)
    }
  }
}
