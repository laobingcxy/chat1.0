# 网页聊天框设计与实现




![volcano](https://github.githubassets.com/images/icons/emoji/unicode/1f30b.png)[项目功能演示地址](https://www.yuque.com/yingwenerjie/er48g3/ruzb6h)



## 成品效果截图

**集成微信官方表情包 完整的实现文档 Vue3 聊天框基本功能**



![image.png](https://cdn.nlark.com/yuque/0/2021/png/2442600/1626078324525-7c2a91d8-488e-44e6-abfa-8669a0dbca58.png)









## 微信官方表情包思路



首先要说一下，这里是用的微信官方的表情包，什么意思呢？就是我这个系统是跟企业微信对接的嘛，消息的来源还是企业微信的用户，那么用户发消息用的也是企业微信官方素材，在这里就是表情。如果说用户发了表情，而我维护自己的表情库，我这边就解析不了，也就无法同步。本地维护一个字符串数组，内容就是表情的汉字含义，为什么是汉字呢？因为方便我考虑的是方便后端存储，当然你也可以自定义的嘛。然后我我们在div中循环这个数组，内部的img拼接微信表情的地址就可以了。这里要注意的是，微信官方表情是从1开始的，而我们数组的下标是从0开始，所以我们要处理一下，这里我用了v-if去做了一个判断



## 消息框以及消息发送表情展示思路

聊天框我用的element Plus的组件，我参考了企业微信发送消息时表情的处理，也就是字符串含义。当用户点击表情选中后，我会默认在原来字符串的基础上拼接[]后展示，为什么这样呢？是为了和输入的文字做区分，便于后面聊天内容处对于表情的解析。当用户点击发送后，会在聊天内容处渲染，根据之前表情的字符串含义遍历本地数组拿到下标后，请求对应的资源地址。这样，文字和表情就可以同时展示啦。



## 消息左右聊天展示思路

对于左右消息展示，我采用的v-if标签做了一个判断，来选用展示不同的标签样式这里默认消息内容是全部展示的



## 多余内容展示思路

多余内容是做了换行处理 word-wrap: break-word；同时让消息内容从左到右展示text-align: left;




## 聊天消息始终保持最新思路

让滚动条始终置底，就是展示最新内容的实现思路，这里我们不赘述具体知识点，以下为关键代码：

![image-20210713230417805](https://cdn.jsdelivr.net/gh/laobingcxy/img/20210713230417)



```vue
       scrollToBottom() {
            this.$nextTick(() => {
                let box = this.$el.querySelector(".talk-content")
                box.scrollTop = box.scrollHeight
            })
        }
```







## 聊天内容大小固定思路

聊天内容大小的固定更简单啦，就是控制div的大小





## 运行



```
git clone 项目到本地

npm install

npm run serve
```



[个人介绍](https://www.yuque.com/yingwenerjie)  



以上是聊天框的纯前端1.0版，相信已经符合大多数人的需求。当然了作为一个全栈，我还有升级版本！敬请期待！欢迎Start、Pr!
