/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-09-02 15:25:48
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-02 16:03:09
 */
// components/rate/rate.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        value: {
            type: Number,
            value: 0
        },
        max: {
            type: Number,
            value: 5
        },
        showText: {
            type: Boolean,
            value: true
        },
        texts: {
            type: Array,
            value: ['极差', '失望', '一般', '满意', '惊喜']
        },
        activeImg: {
            type: String,
            value: './images/active.png'
        },
        inactiveImg: {
            type: String,
            value: './images/none.png'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    ready() {

    },

    /**
     * 组件的方法列表
     */
    methods: {

        ontap(e) {
            let detail = {
                value: e.currentTarget.dataset.index + 1,
            }
            this.setData({
                value: detail.value
            })
            this.triggerEvent('change', detail);
        }
    }
})