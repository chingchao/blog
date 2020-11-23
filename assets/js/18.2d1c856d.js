(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{355:function(t,s,a){"use strict";a.r(s);var e=a(21),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("linux安装：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])]),a("p",[t._v("mac安装：通过安装homebrew，然后通过homebrew安装Git。或者安装xcode，Xcode集成了Git。")]),t._v(" "),a("p",[t._v("windows安装：从Git官网直接"),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载安装程序"),a("OutboundLink")],1),t._v("，安装完成后，在开始菜单里找到“Git”->“Git Bash”。")]),t._v(" "),a("p",[t._v("安装完成后需要设置：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email@example.com"')]),t._v("\n")])])]),a("p",[t._v("注意"),a("code",[t._v("git config")]),t._v("命令的"),a("code",[t._v("--global")]),t._v("参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。")]),t._v(" "),a("h2",{attrs:{id:"feature-branching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature-branching"}},[t._v("#")]),t._v(" Feature Branching")]),t._v(" "),a("h3",{attrs:{id:"提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交"}},[t._v("#")]),t._v(" 提交")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程仓库名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地分支"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程分支"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin branch\n")])])]),a("h3",{attrs:{id:"拉取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取"}},[t._v("#")]),t._v(" 拉取")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--rebase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多部操作合并")]),t._v("\n")])])]),a("p",[t._v("如果"),a("code",[t._v("git pull")]),t._v("提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令"),a("code",[t._v("git branch --set-upstream branch-name origin/branch-name")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"提交-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交-2"}},[t._v("#")]),t._v(" 提交")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'msg'")]),t._v(" \n")])])]),a("h3",{attrs:{id:"修改错误提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改错误提交"}},[t._v("#")]),t._v(" 修改错误提交")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n")])])]),a("p",[t._v("只修改提交信息："),a("code",[t._v("git commit --amend -m 'massage'")])]),t._v(" "),a("p",[t._v("将一个新的改动添加进提交中："),a("code",[t._v("git add .")]),t._v(" + "),a("code",[t._v("git commit --amend --no-edit")]),t._v("，不改变 commit message")]),t._v(" "),a("p",[t._v("修改提交的作者："),a("code",[t._v('git commit --amend --author "Author Name <Author Email>"')])]),t._v(" "),a("h3",{attrs:{id:"bug分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug分支"}},[t._v("#")]),t._v(" Bug分支")]),t._v(" "),a("p",[t._v("Git提供了一个"),a("code",[t._v("stash")]),t._v("功能，可以把当前工作现场“储藏”起来。如果有新文件，需要加 "),a("code",[t._v("-a")]),t._v("，或者先 "),a("code",[t._v("git add .")]),t._v(" 再使用 "),a("code",[t._v("stash")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n")])])]),a("p",[t._v("先确定要在哪个分支上修复bug，假定需要在"),a("code",[t._v("master")]),t._v("分支上修复，就从"),a("code",[t._v("master")]),t._v("创建临时分支：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b issue-101\n")])])]),a("p",[t._v("解决后合并分支，再删除分支。回到刚才的工作现场，用"),a("code",[t._v("git status")]),t._v("查看，工作区是干净的。用"),a("code",[t._v("git stash list")]),t._v("命令查看。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list\nstash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": WIP on dev: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6224937")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" merge\n")])])]),a("p",[t._v("恢复"),a("code",[t._v("stash")]),t._v("有两个方法：")]),t._v(" "),a("p",[t._v("一是用"),a("code",[t._v("git stash apply")]),t._v("恢复，但是恢复后，stash内容并不删除，你需要用"),a("code",[t._v("git stash drop")]),t._v("来删除；")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash drop\nDropped refs/stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fe3b60470eb88919715b9ba6f36f6bd4d1847ffc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("另一种方式是用"),a("code",[t._v("git stash pop")]),t._v("，恢复的同时把stash内容也删了：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\n")])])]),a("p",[t._v("你可以多次stash，恢复的时候，先用"),a("code",[t._v("git stash list")]),t._v("查看，然后恢复指定的stash，用命令：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),a("h3",{attrs:{id:"查看分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[t._v("#")]),t._v(" 查看分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地和远程所有分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 远程有新的分支，git branch -a 也查看不到，需要先拉取")]),t._v("\n")])])]),a("h3",{attrs:{id:"新建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建分支"}},[t._v("#")]),t._v(" 新建分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch new_feature  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout new_feature  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" switch new_feature  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支")]),t._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b new_feature  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建并切换分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" switch -c new_feature  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建并切换分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b new_feature origin/master  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远程仓库 master 分支新建一个 new_feature 分支，再切换到新建的分支")]),t._v("\n")])])]),a("h3",{attrs:{id:"删除分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[t._v("#")]),t._v(" 删除分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d branch\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D branch  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强制删除分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin -d branch  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程分支")]),t._v("\n")])])]),a("h3",{attrs:{id:"找回分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#找回分支"}},[t._v("#")]),t._v(" 找回分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout c08de9a\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b branch_name\n")])])]),a("h3",{attrs:{id:"合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge branch  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 branch 合并到当前分支")]),t._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 若有冲突 手动解决后")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看冲突文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status -sb\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销合并")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge --abort  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不解决冲突直接撤销")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解决冲突后，回滚到合并前")]),t._v("\n")])])]),a("h2",{attrs:{id:"查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[t._v("#")]),t._v(" 查看")]),t._v(" "),a("h3",{attrs:{id:"查看提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看提交"}},[t._v("#")]),t._v(" 查看提交")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("$ git log")]),t._v(" "),a("td",[t._v("查看历史记录")])]),t._v(" "),a("tr",[a("td",[t._v("$ git log -p")]),t._v(" "),a("td",[t._v("查看详细历史")])]),t._v(" "),a("tr",[a("td",[t._v("$ git log -stat")]),t._v(" "),a("td",[t._v("查看简要统计")])]),t._v(" "),a("tr",[a("td",[t._v("$ git log --graph --pretty=oneline")]),t._v(" "),a("td",[t._v("查看分支合并情况")])]),t._v(" "),a("tr",[a("td",[t._v("$ git show")]),t._v(" "),a("td",[t._v("查看当前 commit")])]),t._v(" "),a("tr",[a("td",[t._v("$ git show <commit 引用>")]),t._v(" "),a("td",[t._v("查看指定 commit")])]),t._v(" "),a("tr",[a("td",[t._v("$ git show <commit 引用> <file name>")]),t._v(" "),a("td",[t._v("查看指定 commit 的指定文件")])])])]),t._v(" "),a("h3",{attrs:{id:"比较差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较差异"}},[t._v("#")]),t._v(" 比较差异")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("$ git diff")]),t._v(" "),a("td",[t._v("比对工作目录和暂存区")])]),t._v(" "),a("tr",[a("td",[t._v("$ git diff --staged （--cached）")]),t._v(" "),a("td",[t._v("比对暂存区和上一条提交")])]),t._v(" "),a("tr",[a("td",[t._v("$ git diff HEAD")]),t._v(" "),a("td",[t._v("比对工作目录和上一次提交")])]),t._v(" "),a("tr",[a("td",[t._v("$ git diff <commit>")]),t._v(" "),a("td",[t._v("比对工作目录和指定 commit")])]),t._v(" "),a("tr",[a("td",[t._v("$ git diff <本地分支名> <远程主机名>/<远程分支名>")]),t._v(" "),a("td",[t._v("比对本地仓库与远程仓库")])])])]),t._v(" "),a("p",[t._v("Git 提供了一个命令"),a("code",[t._v("git reflog")]),t._v("用来记录你的每一次命令，可以查看版本id。")]),t._v(" "),a("p",[t._v("默认情况下修改文件名大小写，不会产生记录，可以使用:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" a.js A.js\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n    renamed: a.js -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" A.js\n")])])]),a("h2",{attrs:{id:"撤销"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销"}},[t._v("#")]),t._v(" 撤销")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("$ git checkout . /  $ git checkout -- <filename>")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("撤销改动")])]),t._v(" "),a("tr",[a("td",[t._v("$ git reset  /  $ git reset <filename>")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("撤销 add")])]),t._v(" "),a("tr",[a("td",[t._v("$ git reset HEAD^")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("撤销 commit")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("$ git reset origin/<branch_name>")]),t._v(" "),a("td",[t._v("直接覆盖本地提交和远程保持一致")])])])]),t._v(" "),a("p",[t._v("如果新增加文件，没有被跟踪 (untracked)，使用 "),a("code",[t._v("git checkout .")]),t._v(" 是不起作用的，可以使用 "),a("code",[t._v("git clean -n")]),t._v("，先查看要被删除的文件，再使用 "),a("code",[t._v("git clean -f")]),t._v(" 删除 (-df文件夹)。")]),t._v(" "),a("p",[t._v("如果需要撤销操作到 add 之前，且不保存修改：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("阶段")]),t._v(" "),a("th",[t._v("操作")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("已修改，未暂存（"),a("code",[t._v("git add")]),t._v("之前)")]),t._v(" "),a("td",[a("code",[t._v("git checkout .")]),t._v(" 或 "),a("code",[t._v("git reset --hard")])])]),t._v(" "),a("tr",[a("td",[t._v("已暂存，未提交（"),a("code",[t._v("git add")]),t._v("之后）")]),t._v(" "),a("td",[a("code",[t._v("git reset")]),t._v("+"),a("code",[t._v("git checkout .")]),t._v(" 或 "),a("code",[t._v("git reset --hard")])])]),t._v(" "),a("tr",[a("td",[t._v("已提交，未推送（"),a("code",[t._v("git commit")]),t._v("之后)")]),t._v(" "),a("td",[a("code",[t._v("git reset --hard origin/master")])])]),t._v(" "),a("tr",[a("td",[t._v("已推送（"),a("code",[t._v("git push")]),t._v("之后)")]),t._v(" "),a("td",[a("code",[t._v("git reset --hard HEAD^")]),t._v("+"),a("code",[t._v("git push -f")])])])])]),t._v(" "),a("p",[a("code",[t._v("git reset")]),t._v(" 的本质是移动 HEAD 以及它所指向的 branch ，可以移动到任意的 commit 上，默认的参数是")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("--hard")]),t._v("：重置位置的同时，清空工作目录的所有改动；")]),t._v(" "),a("li",[a("code",[t._v("--soft")]),t._v("：重置位置的同时，保留工作目录和暂存区的内容，并把重置 "),a("code",[t._v("HEAD")]),t._v(" 的位置所导致的新的文件差异放进暂存区。")]),t._v(" "),a("li",[a("code",[t._v("--mixed")]),t._v("（默认）：重置位置的同时，保留工作目录的内容，并清空暂存区。")])]),t._v(" "),a("p",[t._v("在Git中，用"),a("code",[t._v("HEAD")]),t._v("表示当前版本，也就是最新的提交，上一个版本就是"),a("code",[t._v("HEAD^")]),t._v("，上两个版本就是"),a("code",[t._v("HEAD^^")]),t._v("，往上100个版本写成"),a("code",[t._v("HEAD~100")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),a("h3",{attrs:{id:"添加密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加密钥"}},[t._v("#")]),t._v(" 添加密钥")]),t._v(" "),a("p",[t._v("以"),a("code",[t._v("github")]),t._v("为远程仓库，由于本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，需要设置：")]),t._v(" "),a("ol",[a("li",[t._v("创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有"),a("code",[t._v("id_rsa")]),t._v("和"),a("code",[t._v("id_rsa.pub")]),t._v("这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ ssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a@163.com"')]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("登陆GitHub，打开“SSH Keys”页面，添加key：")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/.ssh/id_rsa.pub\n")])])]),a("h3",{attrs:{id:"添加远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库"}},[t._v("#")]),t._v(" 添加远程仓库")]),t._v(" "),a("p",[t._v("先在github上创建一个仓库。再关联远程仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:user/test.git\n")])])]),a("p",[t._v("把本地库的所有内容推送到远程库上：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n")])])]),a("p",[t._v("实际上是把当前分支"),a("code",[t._v("master")]),t._v("推送到远程。由于远程库是空的，第一次推送"),a("code",[t._v("master")]),t._v("分支时，加上了"),a("code",[t._v("-u")]),t._v("参数，Git不但会把本地的"),a("code",[t._v("master")]),t._v("分支内容推送的远程新的"),a("code",[t._v("master")]),t._v("分支，还会把本地的"),a("code",[t._v("master")]),t._v("分支和远程的"),a("code",[t._v("master")]),t._v("分支关联起来，在以后的推送或者拉取时就可以简化命令。")]),t._v(" "),a("h3",{attrs:{id:"设置远程仓库地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置远程仓库地址"}},[t._v("#")]),t._v(" 设置远程仓库地址")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冲突"}},[t._v("#")]),t._v(" 冲突")]),t._v(" "),a("p",[t._v("手动解决 conflicts 后，再提交。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull --rebase origin branch\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" readme.txt \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --continue\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"conflict fixed"')]),t._v("\n")])])]),a("h2",{attrs:{id:"标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[t._v("#")]),t._v(" 标签")]),t._v(" "),a("h3",{attrs:{id:"创建标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建标签"}},[t._v("#")]),t._v(" 创建标签")]),t._v(" "),a("p",[t._v("切换到需要打标签的分支上：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n")])])]),a("p",[t._v("然后，敲命令"),a("code",[t._v("git tag <name>")]),t._v("就可以打一个新标签：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag v1.0\n")])])]),a("p",[t._v("查看所有标签：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\nv1.0\n")])])]),a("p",[t._v("默认标签是打在最新提交的"),a("code",[t._v("commit")]),t._v("上的，打历史版本标签，先找到 commit id。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline --abbrev-commit\n7825a50 merge with no-ff\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6224937")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" merge\nd17efd8 remove test.txt\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("要对"),a("code",[t._v("add merge")]),t._v("这次提交打标签，它对应的commit id是"),a("code",[t._v("6224937")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag v0.9 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6224937")]),t._v("\n")])])]),a("p",[t._v("查看标签信息：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show v0.9\n")])])]),a("p",[t._v("创建带有说明的标签，用"),a("code",[t._v("-a")]),t._v("指定标签名，"),a("code",[t._v("-m")]),t._v("指定说明文字：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a v0.1 -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"version 0.1 released"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3628164")]),t._v("\n")])])]),a("h3",{attrs:{id:"操作标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作标签"}},[t._v("#")]),t._v(" 操作标签")]),t._v(" "),a("p",[t._v("删除标签：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d v0.1\nDeleted tag "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v0.1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("was e078af9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("推送某个标签到远程：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin v1.0\n")])])]),a("p",[t._v("一次性推送全部尚未推送到远程的本地标签：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --tags\n")])])]),a("p",[t._v("如果标签已经推送到远程，先从本地删除：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d v0.9\n")])])]),a("p",[t._v("然后，从远程删除：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :refs/tags/v0.9\nTo git@github.com:chingchao/learngit.git\n - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("deleted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("         v0.9\n")])])]),a("h2",{attrs:{id:"忽略文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#忽略文件"}},[t._v("#")]),t._v(" 忽略文件")]),t._v(" "),a("p",[t._v("忽略已提交的文件")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r --cached folder\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete files'")]),t._v("\n")])])]),a("h2",{attrs:{id:"异常处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[t._v("#")]),t._v(" 异常处理")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/24543372/unable-to-connect-to-git-remote-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unable to connect to git remote repository"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.yiibai.com/git",target:"_blank",rel:"noopener noreferrer"}},[t._v("易百教程-Git"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"}},[t._v("廖雪峰Git教程"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);