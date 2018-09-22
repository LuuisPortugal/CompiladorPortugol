<template>
	<div class="home">
		<b-container>
			<b-row>
				<b-col cols="7">
					<h2>Editor de Código</h2>
					<codemirror :value="CodemirrorContent" :options="CodemirrorOptions" />
				</b-col>
				<b-col cols="5">

				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { Default_Init } from "../assets/codemirror/portugol/default_init";

export default {
  name: "home",
  data() {
    return {
      CodemirrorContent: Default_Init,
      CodemirrorOptions: {
        mode: "portugol",
        theme: "portugol",
        lineNumbers: true,
        indentWithTabs: true,
        autoCloseBrackets: true,
        matchBrackets: true
      }
    };
  }
};
</script>

<style lang="scss">
.CodeMirror {
  border: 1px solid #eee;
  height: auto !important;
  max-height: 700px;
}

.CodeMirror-scroll {
  height: auto;
  max-height: 600px;
}
</style>
