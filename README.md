# vscode_extensions

由于本人对开发环境操作一致度要求极高，这个库主要是为了自动安装我在VScode上常用的扩展，争取一键式搭建开发环境。

## 项目介绍
```
├── extension.json  插件ID或Path数组
├── index.js        脚本入口
├── node_modules    只有一个chalk
├── package.json    
├── package-lock.json
├── .gitignore
└── README.md
```
## 使用方式
clone本repo -> npm intsall -> 修改extension.json中的扩展名称数组　->　npm start
## 坑

首先需要将VScode的code指令添加到bash中，步骤如下：

- 打开VScode，‘Ctrl + Shift + p’ 或者 ‘command + shift + p’
- 在弹出的输入栏中写入 "shell command"
- 点击提示Shell Command: Install ‘code’ command in PATH运行

其次，对于扩展ID或者PATH, 官方提示是这么写的
```
--install-extension <extension-id | path-to-vsix> 
Installs or updates the extension. Use `--force` argument to avoid prompts.
```

其并没有说明ID和PATH具体指的什么。最后我在安装扩展的目录下找到的各个扩展的文件夹名称，百般尝试后确定文件夹名称去掉后面的版本号为ID，PATH可能是repo地址。

## TODO

自动添加code指令