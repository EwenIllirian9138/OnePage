<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <toggle-button @change="onChangeEventHandler"/>

    <toggle-button v-model="myDataVariable"/>

    <toggle-button :value="false"
                   color="#82C7EB"
                   :sync="true"
                   :labels="true"/>

    <toggle-button :value="true"
                   :labels="{checked: 'Foo', unchecked: 'Bar'}"/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
