import Vue from 'vue'
import App from './App'
// import router from './router'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

Vue.component('OwMachine', {
  template: '<tr :class="{ active: OwMachine.isOn }">{{OwMachine.name}}<toggle-button :value="OwMachine.isOn" @change="OwMachine.isOn = !OwMachine.isOn"/></tr>',
  props: ['OwMachine']
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})
