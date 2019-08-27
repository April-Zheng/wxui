/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-27 16:10:41
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-27 16:45:35
 */
// components/steps/steps.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        className: String,
        activeIndex: {
            type: null,
            value: 1
        },
        failIndex: {
            type: null,
            value: 0
        },
        size: {
            type: null,
            value: 0
        },
        direction: {
            type: String,
            value: 'horizontal'
        },
        showIcon: {
            type: Boolean,
            value: false
        },
        items: Array,
    },

    /**
     * 组件的初始数据
     */
    data: {
        horWidth: ''
    },

    attached() {
        this.setData({
            horWidth: 100 / (this.data.items.length - 1) + '%'
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})