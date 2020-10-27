<template>
  <div id="app">
    <div class="columns mx-3">
  <div class="column is-three-fifths
is-offset-one-fifth">
      <TheForm/>
  </div>
    </div>
  </div>
</template>

<script>

import TheForm from './components/TheForm'

export default {
  name: "App",
  components:{TheForm}
  
};
</script>

<style>

</style>
