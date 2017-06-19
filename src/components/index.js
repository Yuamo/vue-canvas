import timer from './timer/timer'

const vComponets = {
  timer: timer
}

Object.keys(wxComponets).forEach(key => {
  Vue.component('v-' + key, vComponets[key])
})
