(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{512:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title)+" "),a("MigrationBadges",{attrs:{badges:e.$frontmatter.badges}})],1),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("v-enter")]),e._v(" transition class has been renamed to "),a("code",[e._v("v-enter-from")]),e._v(" and the "),a("code",[e._v("v-leave")]),e._v(" transition class has been renamed to "),a("code",[e._v("v-leave-from")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"_2-x-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-x-syntax"}},[e._v("#")]),e._v(" 2.x Syntax")]),e._v(" "),a("p",[e._v("Before v2.1.8, we had two transition classes for each transition direction: initial and active states.")]),e._v(" "),a("p",[e._v("In v2.1.8, we introduced "),a("code",[e._v("v-enter-to")]),e._v(" to address the timing gap between enter/leave transitions. However, for backward compatibility, the "),a("code",[e._v("v-enter")]),e._v(" name was untouched:")]),e._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".v-enter,\n.v-leave-to")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".v-leave,\n.v-enter-to")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("This became confusing, as "),a("em",[e._v("enter")]),e._v(" and "),a("em",[e._v("leave")]),e._v(" were broad and not using the same naming convention as their class hook counterparts.")]),e._v(" "),a("h2",{attrs:{id:"_3-x-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-x-update"}},[e._v("#")]),e._v(" 3.x Update")]),e._v(" "),a("p",[e._v("In order to be more explicit and legible, we have now renamed these initial state classes:")]),e._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".v-enter-from,\n.v-leave-to")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".v-leave-from,\n.v-enter-to")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("It's now much clearer what the difference between these states is.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("<transition>")]),e._v(" component's related prop names are also changed:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("leave-class")]),e._v(" is renamed to "),a("code",[e._v("leave-from-class")]),e._v(" (can be written as "),a("code",[e._v("leaveFromClass")]),e._v(" in render functions or JSX)")]),e._v(" "),a("li",[a("code",[e._v("enter-class")]),e._v(" is renamed to "),a("code",[e._v("enter-from-class")]),e._v(" (can be written as "),a("code",[e._v("enterFromClass")]),e._v(" in render functions or JSX)")])]),e._v(" "),a("h2",{attrs:{id:"migration-strategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-strategy"}},[e._v("#")]),e._v(" Migration Strategy")]),e._v(" "),a("ol",[a("li",[e._v("Replace instances of "),a("code",[e._v(".v-enter")]),e._v(" to "),a("code",[e._v(".v-enter-from")])]),e._v(" "),a("li",[e._v("Replace instances of "),a("code",[e._v(".v-leave")]),e._v(" to "),a("code",[e._v(".v-leave-from")])]),e._v(" "),a("li",[e._v("Replace instances of related prop names, as above.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);