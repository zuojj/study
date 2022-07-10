# Screenshots

## 相关需求
* 可配置项：网站URL、图片宽、图片高、图片格式（JPEG,PNG,PDF,BMP）、图片质量
* 开发环境 Linux + PHP + Nginx / Windows + PHP + Apache
* 支持添加水印（图片或文字）

## 实现方案
PHP + Phantomjs


## Linux环境下问题总结
* [#14485](https://github.com/ariya/phantomjs/issues/14485)
解决步骤如下：
```
$command = "phantomjs {$script} {$url} {$filePath} {$width} {$height} {$format} {$quality}";
```
增加sudo: 执行失败
```
$command = "/usr/bin/sudo phantomjs {$script} {$url} {$filePath} {$width} {$height} {$format} {$quality}";
```
phantomjs不使用软连接
```
$command = "/usr/bin/sudo /search/phantomjs-2.1.1-linux-x86_64/bin/phantomjs {$script} {$url} {$filePath} {$width} {$height} {$format} {$quality}";
```
出现错误信息：
> sudo: no tty present and no askpass program specified

使用ps aux|grep nginx查看nginx进程的身份，发现是nobody, 使用`vim /etc/sudoers`添加配置项`nobody ALL=(root) NOPASSWD:/search/phantomjs-2.1.1-linux-x86_64/bin/phantomjs` 后，设置以root身份运行，解决此问题。
* Phantomjs在linux下截图中文字体问题
* PHP exec sudo 权限执行问题



## 网页截屏
* [使用 JavaScript 截屏](http://www.barretlee.com/blog/2015/09/24/screenshot-with-javascript/)
* [html2canvas](https://html2canvas.hertzen.com/)
* [phantomjs](http://phantomjs.org/)
* [webkit2png](http://www.paulhammond.org/webkit2png/)
* [node-webshot](https://github.com/brenden/node-webshot)
* [Windows下通过PHP执行PhantomJS实现网页截图功能](http://www.pusonglin.cn/windows-php-phantomjs-page-snap/)
* [在 PHP 中使用命令行工具](https://www.ibm.com/developerworks/cn/opensource/os-php-commandline/)

## 添加水印
* [nodejs给图片加水印](http://www.barretlee.com/blog/2015/09/08/add-watermark-to-images/)
* [利用ImageMagick给图片加水印](http://www.jianshu.com/p/7cff445afb3d)
* [使用PHP为图片添加文字图片水印](http://blog.wangjunfeng.com/archives/67)


## Phantomjs
* [PhantomJS基础及示例](http://imweb.io/topic/560b402ac2317a8c3e08621c)
* [phantomjs font rendering issue](http://stackoverflow.com/questions/22052555/phantomjs-font-rendering-issue)
* [phantomjs screenshot font missing, boxes rendered instead](http://stackoverflow.com/questions/15029002/phantomjs-screenshot-font-missing-boxes-rendered-instead)
* [How do I render @font-face in PhantomJS screen capture?](http://stackoverflow.com/questions/7521759/how-do-i-render-font-face-in-phantomjs-screen-capture)
* [Some pages have italic fonts instead of normal on Windows](https://github.com/annulen/webkit/issues/270)
* [phantomjs在linux下截图中文字体问题](http://jser.me/2016/05/31/phantomjs%E5%9C%A8linux%E4%B8%8B%E6%88%AA%E5%9B%BE%E4%B8%AD%E6%96%87%E5%AD%97%E4%BD%93%E9%97%AE%E9%A2%98.html)
* [Black background when creating jpg with transparent background](https://github.com/ariya/phantomjs/issues/12724)
* [Screen Capture : phantomjs-2.0.0 does not convert webpage to png/jpg correctly](https://github.com/ariya/phantomjs/issues/13145)

## PHP
* function_exists('imagecreatefromjpeg')测试函数是否存在
* [CentOS下PHP安装完成后继续安装GD扩展库](http://www.169it.com/article/15124989829733471899.html)

## Nginx
* [Nginx服务器安装及配置文件详解](https://segmentfault.com/a/1190000002797601)
* [Nginx的模块与工作原理](http://www.cnblogs.com/net2012/p/3385614.html)


## SecureCRT
* [SecureCRT 绝佳配色方案, 保护你的眼睛](http://my.oschina.net/ijaychen/blog/193486)
* [比较好用的SecureCRT配色方案](http://my.oschina.net/iuranus/blog/279513)


## Linux
* [Linux中更改当前进程运行身份](https://www.hitoy.org/changing-the-identity-of-a-process.html)
* 查询软件安装路径: whereis php
* 查询运行文件所在地址（文件夹地址）: which php
