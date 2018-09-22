<template>
	<div id="app">
		<div class="header">
			<h2>
				CESUPA <br />
				Luis Enrique Portugal 17300211
			</h2>
			<div id="nav">
				<router-link to="/">Léxico</router-link>
			</div>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
body {
  padding-top: 10px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .header {
    text-align: center;
    color: #2c3e50;
  }
}

#nav {
  padding: 0 30px 30px 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
