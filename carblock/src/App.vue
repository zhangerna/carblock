<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  // computed: {
  // 	key(){
  // 		console.log(this.$route.name)
  // 		return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
  // 	}
  // }
}
</script>
