# 简历识别模块

详情见[官网](http://www.resumesdk.com/)
因为官网没有提供nodejs包，所以自己封装了一个

## 如何使用

### 安装

`npm install resumesdk --save`

### 设置

自行注册youyun，并获取`uid`和`pwd`，替换`settings.json`中对应的值

### 使用

```javascript
const resumesdk = require('resumesdk');
/*
 * 上传简历解析
 * @params {string} 填写需要解析的文件路径
 * @return {Promise}
 * @return {object}
*/
resumesdk(filepath).then( r => console.log(r))
```


## 目前测试的简历识别准确度

### 中文简历

识别度还可以
针对特定模板，比如说拉勾网，简历的识别度甚至能到100%

### 英文简历

识别度稍微差一些

