<template>
    <div class="emoticon-list-cover" v-show="isShow">
        <div class="emoticon-list">
            <div class="pic-item" v-for="(item,i) in emotionList" @click="clickEmoticon(i,item)" :key="i">
                <img :src=" 'https://rescdn.qqmail.com/node/wwopen/wwopenmng/images/qq_emotion/qq/' + i + '.png'"
                     :title="item" class="emotion" v-if="i>0">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            emotionIsShow: {
                type: Boolean,
                default() {
                    return false;
                }
            }
        },
        data() {
            return {
                emotionList: ['占位','微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭',
                    '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱',
                    '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘',
                    '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼',
                    '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒',
                    '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹',
                    '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引',
                    '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手',
                    '激动', '街舞', '献吻', '左太极', '右太极'],
            }
        },
        computed: {
            isShow() {
                return this.emotionIsShow;
            }
        },
        methods: {
            //选中表情
            clickEmoticon(index,item) {
                this.$emit('sendEmotionSelect', index,item);
            },
        }
    }
</script>

<style scoped>
    .emoticon-list-cover {
        position: absolute;
        top: 230px;
        left: 200px;
        margin-top: 20px;
        width: 400px;
        height: 190px;
        overflow: auto;
        z-index:10;
        background-color: red;
    }

    .emoticon-list {
        width: 400px;
        display: flex;
        flex-wrap: wrap;
        background-color: white;
    }

    .emotion {
        border: 1px solid #DCE1E6;
        width: 24px;

    }
</style>
