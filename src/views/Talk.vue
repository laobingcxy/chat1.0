<template>

    <div class="talk" v-show="flag">
        <div class="talk-header">
            <div class="talk-header-icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gengduocaozuo"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="exit">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
            </div>
        </div>

        <div class="talk-content ">

            <div v-for="item  in contentDiv" style="margin-top: 20px">


                <div style="text-align: center">
                    <p style="font-size: 1px;color: #9b9b9b"> {{item.time}}</p>
                </div>
                <div style="display: flex;">

                    <div class="name_right" v-if="item.show">
                        <p style="font-size: 1px; "> {{item.name}} </p>
                    </div>
                    <div class="url_right" v-if="item.show">
                        <el-avatar shape="circle" :size="30" :src="item.url"></el-avatar>
                    </div>
                    <div class="url-left" v-if="!item.show">
                        <el-avatar shape="circle" :size="30" :src="item.url"></el-avatar>
                    </div>


                    <div class="name_left" v-if="!item.show">
                        <p style="font-size: 1px;"> {{item.name}} </p>
                    </div>

                </div>


                <div v-html="item.content"
                     class="content_left" v-if="!item.show">
                </div>

                <div v-html="item.content"
                     class="content_right" v-if="item.show">
                </div>

            </div>

        </div>


        <div class=" talk-message
                ">

            <div class="talk-message-face">
                <svg class="icon" aria-hidden="true" @click="isShow">
                    <use xlink:href="#icon-biaoqing"></use>
                </svg>
                <emotion :emotionIsShow="emotionIsShow" @sendEmotionSelect="getValue"></emotion>
            </div>
            <div class="talk-message-content">

                <el-input
                        v-model="textarea"
                        resize="none"
                        type="textarea"
                        rows="1"
                        @keyup.enter.native="submit"
                ></el-input>
            </div>
            <div class="talk-message-send">
                <el-button type="text" style="color:#9b9b9b" @click="submit">发送</el-button>
            </div>
        </div>

    </div>


</template>

<script>
    import emotion from "../components/emotion.vue";
    import "../assets/talk.css";
    import '../utils/iconfont';
    export default {

        components: {
            emotion
        },


        data() {
            return {
                url: "https:/rescdn.qqmail.com/node/wwopen/wwopenmng/images/qq_emotion/qq/",
                eList: ['占位', '微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭',
                    '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱',
                    '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘',
                    '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼',
                    '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒',
                    '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹',
                    '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引',
                    '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手',
                    '激动', '街舞', '献吻', '左太极', '右太极'],
                contentDiv: [],
                textarea: "",
                textarea1: "",
                emotionIsShow: false, // 表情面板控制出现
                divIptEmotion: [], // 接收表情组件传过来的数据
                a: [],
                flag: true,
                show: false,
                closeChat: this.close
            }
        },
        created() {
        },
        mounted() {
            this.scrollToBottom()
        },
        updated() {
            this.scrollToBottom()
        },
        methods: {
            scrollToBottom() {
                this.$nextTick(() => {
                    let box = this.$el.querySelector(".talk-content")
                    box.scrollTop = box.scrollHeight
                })
            },
            sendInfo() {
                alert("aaa")
            },
            isShow() {
                if (this.emotionIsShow === false) {
                    this.emotionIsShow = true;
                } else {
                    this.emotionIsShow = false;
                }
                // this.emotionIsShow = !this.emotionIsShow;
            },
            iptFocus() {
                this.emotionIsShow = true;
            },
            getValue(val, item) {
                let img = '<img src="' + this.url + val + '.png"  style= "width: 22px;height: 22px">';
                let el = '[' + item + ']'
                this.emotionIsShow = false;
                this.textarea = this.textarea + el;
                this.textarea1 += img;
            },
            submit() {
                let a = this.textarea;
                let pre = 0;
                let last = 0;
                let flag = false;
                while (true) {
                    if (!a.match("]")) {
                        break;
                    }
                    pre = a.indexOf("[");
                    last = a.indexOf("]");

                    let face = a.substring(pre + 1, last);
                    let b;
                    for (let j = 0; j < this.eList.length; j++) {
                        if (face == this.eList[j]) {
                            b = j;
                            break;
                        }
                    }
                    let img = '<img src="' + this.url + b + '.png"  style= "width: 22px;height: 22px">';
                    a = a.substring(0, pre) + img + a.substring(last + 1, a.length);
                    pre = 0;
                    last = 0;
                    flag = false;


                }

                let c = {
                    "name": "锅包肉",
                    "url": "https://img0.baidu.com/it/u=3953639057,245238928&fm=15&fmt=auto&gp=0.jpg",
                    "content": a,
                    "show": true,
                    "time": "2021-7-12 17:12:12"
                };

                let d = {
                    "name": "糖醋里脊",
                    "url": "https://img0.baidu.com/it/u=1741172190,3962404342&fm=26&fmt=auto&gp=0.jpg",
                    "content": "大佬你好啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
                    "show": false,
                    "time": "2021-7-12 17:12:46"
                };

                this.textarea = "";
                this.textarea1 = "";
                this.contentDiv.push(c);
                this.contentDiv.push(d);
            },

            exit() {
               this.$emit('close',this.fleg)
            }

        }

    }
</script>

