import Vue from 'vue'
import App from './App'
// import router from './router'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

Vue.component('owMachine', {
  template: '<tr :class="{ active: AttrOwMachine.isOn }">{{AttrOwMachine.name}}<toggle-button :value="AttrOwMachine.isOn" @change="AttrOwMachine.isOn = !AttrOwMachine.isOn"/></tr>',
  props: ['AttrOwMachine']
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})
