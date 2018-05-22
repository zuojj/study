# Tail2kafka 线上环境部署

> ps: offset 按天偏移

## 环境安装
```bash
// unzip
$ unzip tail2kafka.zip -d tail2kafka

// install rpm package
$ rpm -ivh tail2kafka-2.0.0-19.x86_64.rpm

// install rpm package
$ rpm -ivh tail2kafka-debuginfo-2.0.0-19.x86_64.rpm
```

## 环境配置

```bash
$ mv basic.lua main.lua /etc/tail2kafka

# update brokers:kafka cluster
$ vim /etc/main.lua
```

## 启动服务

```bash
# start
$ tail2kafka /etc/tail2kafka

# stop
$ kill $(cat /var/run/tail2kafka.pid)

# reload
$ kill -HUP $(cat /var/run/tail2kafka.pid)
```