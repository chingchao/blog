(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{410:function(s,a,t){"use strict";t.r(a);var e=t(21),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"svn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#svn"}},[s._v("#")]),s._v(" SVN")]),s._v(" "),t("h3",{attrs:{id:"导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[s._v("#")]),s._v(" 导入")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ svn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" /Users/apple/Documents/eclipse_workspace/weibo svn://localhost/mycode/weibo --username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mj --password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" -m\n")])])]),t("h3",{attrs:{id:"检出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检出"}},[s._v("#")]),s._v(" 检出")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ svn checkout svn://localhost/mycode --username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mj —password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n")])])]),t("h3",{attrs:{id:"解决冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突"}},[s._v("#")]),s._v(" 解决冲突")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ svn update   //更新代码\n\n$ svn resolve --accept working main.c   //解决冲突\n\n$ svn ci -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("   //提交\n\n$ svn delete 删除文件／文件夹\n\n$ svn delete —force 强制删除\n")])])]),t("blockquote",[t("p",[s._v("(p) postpone 暂时推后处理，我可能要和那个和我冲突的家伙商量一番")]),s._v(" "),t("p",[s._v("(df) diff-full 把所有的修改列出来，比比看")]),s._v(" "),t("p",[s._v("(e) edit 直接编辑冲突的文件")]),s._v(" "),t("p",[s._v("(mc) mine-conflict 如果你很有自信可以只用你的修改，把别人的修改干掉")]),s._v(" "),t("p",[s._v("(tc) theirs-conflict 底气不足，还是用别人修改的吧")]),s._v(" "),t("p",[s._v("(s) show all options 显示其他可用的命令")])]),s._v(" "),t("h3",{attrs:{id:"查看提交日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看提交日志"}},[s._v("#")]),s._v(" 查看提交日志")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ svn log -l "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("   // 查看最近5条记录\n")])])]),t("h3",{attrs:{id:"撤销修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#撤销修改"}},[s._v("#")]),s._v(" 撤销修改")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ svn revert "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-R"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])])]),t("p",[s._v("当需要撤销文件时，加 -R 递归。")]),s._v(" "),t("h3",{attrs:{id:"查看版本差异"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看版本差异"}},[s._v("#")]),s._v(" 查看版本差异")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ svn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" -r "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7808")]),s._v(":7920 src/views/memberManager/index.vue\n")])])]),t("h3",{attrs:{id:"tags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[s._v("#")]),s._v(" tags")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ svn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" trunk tags/1.1.0\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);