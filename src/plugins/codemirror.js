import Vue from "vue";
import VueCodeMirror from "vue-codemirror";
import "codemirror/lib/codemirror.css";

//Personalização do Portugol
import "./../assets/codemirror/portugol/mode/portugol";
import "./../assets/codemirror/portugol/theme/portugol.css";

import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";

Vue.use(VueCodeMirror, {});
