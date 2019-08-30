/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-30 15:22:48
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-30 16:09:08
 */
// components/capsule/capsule.js
Component({
    externalClasses: ['v-capsule-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        type: {
            type: String,
            value: 'default' //success,warning,error
        },
        openText: {
            type: String,
            value: '开'
        },
        colseText: {
            type: String,
            value: '关'
        },
        active: null //1开0关
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        onTap(e) {
            let active = e.currentTarget.dataset.active
            this.setData({
                active
            })
            let detail = {
                value: active
            }
            this.triggerEvent('change', detail);
        }
    }
})