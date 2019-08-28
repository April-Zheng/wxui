/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-28 16:42:07
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-28 17:55:26
 */
// components/button/button.js
Component({

    externalClasses: ['v-btn-class', 'v-btn-hover-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        collected: {
            type: Boolean,
            value: false
        },
        type: {
            type: String,
            value: 'default' //success,error,warning
        },
        disabled: {
            type: Boolean,
            value: false
        },
        size: {
            type: String,
            value: 'mini' //medium,large,full
        },
        plain: {
            type: Boolean,
            value: false
        },
        shape: {
            type: String,
            value: 'circle', //square,semicircle
        },
        loading: {
            type: Boolean,
            value: false
        },
        openType: String,
        name: String,
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
        //收集formId
        onCollectFormId(e) {
            console.log(e.detail.formId)
        },
        // 开放能力事件回调
        handleOpenTypeEvent(e) {
            console.log(e)
            this.triggerEvent(e.type, e.detail, {});
        }
    }
})