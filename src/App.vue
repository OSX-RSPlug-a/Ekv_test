<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, 500 1.2em/1.2 'Roboto', sans-serif;
}

html {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: linear-gradient(to bottom right, #26a3ab, #B05574);
}

@-ms-viewport{
  width: device-width;
}

</style>
