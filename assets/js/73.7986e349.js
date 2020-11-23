(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{409:function(t,s,e){"use strict";e.r(s);var a=e(21),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-hooks-with-husky"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-hooks-with-husky"}},[t._v("#")]),t._v(" Git hooks with Husky")]),t._v(" "),e("p",[t._v("提交代码（commit）前做 ESLint 检查，可以使用 git 的钩子（pre-commit）执行 ESLint 命令，每一个 git 项目在 .git/hook 文件夹下存在许多可执行文件，找到 pre-commit 文件，修改内容即可。默认的文件名可能是 pre-commit.sample，需要修改文件名。")]),t._v(" "),e("p",[t._v("直接修改 git 钩子文件只会在本地起作用，不能提交到远程仓库，更简单的方法是使用 "),e("a",{attrs:{href:"https://github.com/typicode/husky#readme",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),e("OutboundLink")],1),t._v(" 。安装后在 package.json 中增加配置，或者新建一个单独的配置文件。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" husky -D\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serve"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service serve"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service lint --quiet"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build --mode fordev"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service lint"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("每次运行 "),e("code",[t._v("git commit")]),t._v("会先执行 "),e("code",[t._v("npm run lint")]),t._v(" ，如果有 error，commit 操作就不会执行。这样可以避免提交有问题的代码。例如开发时使用 console，ESLint 配置文件设置规则是 "),e("code",[t._v('"no-console": 0')]),t._v("，为了防止提交代码前忘记删除，就需要再做一次代码检测，而且还需要给 ESLint 增加一个额外的配置文件，包含"),e("code",[t._v('"no-console": 2')]),t._v(" 的规则。额外指定的配置文件优先级更高。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .ESLintrc-pre-commit.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no-console"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("修改 package.json 文件：")]),t._v(" "),e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[e("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v('-- "pre-commit": "vue-cli-service lint"\n')]),e("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('++ "pre-commit": "vue-cli-service lint -c ./.ESLintrc-pre-commit.js"\n')])])])]),e("p",[t._v("此时 ESLint 检测范围是整个项目，使用 "),e("a",{attrs:{href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"}},[t._v("lint-staged"),e("OutboundLink")],1),t._v(" 工具可以将范围缩小至需要提交的文件（staged files）速度更快。安装后修改 package.json 文件：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lint-staged -D\n")])])]),e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[e("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v('   "husky": {\n     "hook": {\n')]),e("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v('--     "pre-commit": "vue-cli-service lint -c ./.eslintrc-pre-commit.js"\n')]),e("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('++     "pre-commit": "lint-staged"\n')]),e("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("     }\n   },\n")]),e("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('++ "lint-staged": {\n++   "*.{js,vue}": [\n++     "vue-cli-service lint --c ./.eslintrc-pre-commit.js"\n++   ]\n++ }\n')])])])]),e("p",[t._v("加上 "),e("code",[t._v("--fix")]),t._v(" 会自动修复。")]),t._v(" "),e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[e("span",{pre:!0,attrs:{class:"token coord"}},[t._v('--- "vue-cli-service lint --c ./.eslintrc-pre-commit.js"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token coord"}},[t._v('+++ "vue-cli-service lint --c ./.eslintrc-pre-commit.js --fix"')]),t._v("\n")])])]),e("blockquote",[e("ol",[e("li",[t._v("vue 项目可以使用 "),e("a",{attrs:{href:"https://cli.vuejs.org/guide/cli-service.html#git-hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitHooks"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("li",[t._v("husky 要求 node 版本 >= 10，Git 版本 >= 2.13.0。")]),t._v(" "),e("li",[t._v("安装 husky 会自动修改 git 钩子文件，使用 cnpm 可能会导致使用时 ESLint 命令不执行。")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);