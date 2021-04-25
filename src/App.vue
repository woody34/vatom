<template>
  <!-- <AImageUploader header="Some Header" description="some Desc" fileTypeHint="PNG, JPG, GIF up to 10MB" /> -->
  <Test />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AImageUploader, Test } from './components/'
export default defineComponent({
  name: 'App',
  components: {
    AImageUploader,
    Test
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
