# 命令行使用

###  端口被占用

显示端口信息：

```shell
$ sudo -s lsof -i tcp:8887
```

杀掉进程

```shell
$ kill 22995
```

### node 版本控制

[nvm](https://github.com/nvm-sh/nvm)

### npm

```shell
$ npm -v          #显示版本，检查npm 是否正确安装。
$ npm install express   #安装express模块
$ npm install -g express  #全局安装express模块
$ npm list         #列出已安装模
$ npm list -g --depth 0 # 显示已安装的包
$ npm show express     #显示模块详情
$ npm update        #升级当前目录下的项目的所有模块
$ npm update express    #升级当前目录下的项目的指定模块
$ npm update -g express  #升级全局安装的express模块
$ npm uninstall express  #删除指定的模块
$ npm cache clean  #清除缓存
```

### npm 源 (nrm)

1，使用淘宝的源

```shell
$ npm config set registry https://registry.npm.taobao.org
```

2，使用官方的源

```shell
$ npm config set registry https://registry.npmjs.org/
```

3，查看源地址

```shell
$ npm config get registry
```

### 常用命令

```shell
$ mv docs blog #重命名
$ touch config.js #新建文件
$ mkdir dir && cd $_ #创建并进入文件夹
$ pwd #查看路径
```

### 启动 mongodb

```hell
$ ./mongod --dbpath=/Users/zhaoqing/project/DOClever-6.2.0/db --port=27017
```

### 启动 http-server

```shell
$ http-server ./dist -P http://10.11.4.12/ -o
```

### node 系统环境判断

```js
if (process.platform === 'win32') {
  'windows'
} else if (process.platform === 'darwin') {
  'macos'
} else if (process.platform === 'linux') {
  'linux'
}
```

### 快捷键

| 快捷键        | 操作                           |
| ------------- | ------------------------------ |
| ctrl-w        | 删除你键入的最后一个单词       |
| ctrl-u        | 删除行内光标所在位置之前的内容 |
| ctrl-b  alt-f | 以单词为单位移动光标           |
| ctrl-a        | 将光标移至行首                 |
| ctrl-e        | 将光标移至行尾                 |
| ctrl-k        | 删除光标至行尾的所有内容       |
| ctrl-l        | 清屏                           |

### 命令行语法格式

| 符号               | 描述                           |
| :----------------- | :----------------------------- |
| 没有括号的文本     | 必须按照显示的输入             |
| `<尖括号内的文本>` | 必填值的占位符                 |
| `[方括号内的文本]` | 可选项                         |
| `{大括号内的文本}` | 一组必填项，必须选择一个       |
| 竖线 `(|)`         | 分隔多个互斥的项，必须选择一个 |
| 省略号 `(…)`       | 可以分开的项目并使用多次       |

> Command-line syntax key [https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/command-line-syntax-key](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/command-line-syntax-key) 
>
> docopt.org [http://docopt.org/](http://docopt.org/)

