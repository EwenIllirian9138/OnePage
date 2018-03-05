<template>
  <div id="app">
    <img src="">
    <h1>{{ message }}</h1>
    <div>
      <h4>
        hide on machine off
        <toggle-button :value="hideOffOwMachines" @change="hideOffOwMachines = !hideOffOwMachines"/>
      </h4>
    </div>
    <table>
        <OwMachine v-for="owMachine in owMachines"
                 :key="owMachine.id"
                 v-bind:OwMachine="owMachine"
                 v-if="!hideOffOwMachines || owMachine.isOn">
        </OwMachine>
    </table>
    <form @submit.prevent="addOwMachine" class="form">
      <input type="text" placeholder="Nom de la machine" v-model="buffer.name">
      <select name="status" v-model="buffer.isOn">
        <option v-bind:value="true">ON</option>
        <option v-bind:value="false">OFF</option>
      </select>
      <input type="submit" value="Ajouter">
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      hideOffOwMachines: false,
      message: 'list of machines',
      buffer: {
        id: 3, name: 'Next machine name', isOn: true
      },
      owMachines: [
        {id: 1, name: 'Machine Hanamura', isOn: true},
        {id: 2, name: 'Machine Anubis', isOn: true},
        {id: 3, name: 'Machine Volskaya', isOn: true},
        {id: 4, name: 'Machine Horizon', isOn: true}
      ]
    }
  },
  methods: {
    addOwMachine: function (e) {
      this.buffer.id += 1
      this.owMachines.push({
        id: this.buffer.id,
        name: this.buffer.name,
        isOn: this.buffer.isOn
      });
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
table {
  display:  block;
}
</style>
