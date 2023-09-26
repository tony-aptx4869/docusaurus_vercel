---
slug: 24-raid_driver_installation_for_linux
title: 为 Linux 安装 RAID 驱动程序
date: 2021-06-24
authors: tony
tags: [Linux, Drivers]
keywords: [Linux, RAID, Drivers, 驱动]
description: 关于为 Linux 安装 RAID 驱动程序的简介
---

# 为 Linux 安装 RAID 驱动程序

## CentOS 7 不支持阵列卡

```shell
modprobe.blacklist=ahci inst.dd
hpsa.hpsa_simple_mode=1 hpsa.hpsa_allow_any=1
```
