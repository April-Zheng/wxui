/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-28 09:53:17
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-28 10:28:40
 */
// components/card/card.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        mode: {
            type: String,
            value: 'normal'
        },
        footer: {
            type: Boolean,
            value: false
        }
    },

    options: {
        multipleSlots: true //使其可以使用多个slot，用name区分
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTap() {
            this.triggerEvent("ontap");
        }
    }
})