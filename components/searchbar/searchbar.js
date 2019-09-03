/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-09-03 10:04:56
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-03 11:16:38
 */
// components/searchbar/searchbar.js
Component({
    externalClasses: ['v-search-class', 'v-confirm-class', 'v-cancel-class', 'v-search-input-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        boxBgColor: {
            type: String,
            value: '#fff',
        },
        shape: {
            type: String,
            value: 'primary'
        },
        bgColor: {
            type: String,
            value: '#f6f6f6',
        },
        placeholder: {
            type: String,
            value: "搜索"
        },
        confirmType: {
            type: String,
            value: 'done'
        },
        confirmHold: {
            type: Boolean,
            value: false
        },
        type: {
            type: String,
            value: 'text'
        },
        value: String,
        clearable: {
            type: Boolean,
            value: false
        },
        showConfirm: {
            type: Boolean,
            value: false
        },
        confirmColor: {
            type: String,
            value: "#108ee9"
        },
        confirmText: {
            type: String,
            value: '确定'
        },
        showCancel: {
            type: Boolean,
            value: false
        },
        cancelText: {
            type: String,
            value: '取消'
        }
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
        handleInputChange(e) {
            let detail = {
                value: e.detail.value
            }
            this.setData({
                value: detail.value
            });

            this.triggerEvent('input', detail);
        },
        handleInputFocus(e) {
            this.triggerEvent('focus', e.detail);
        },
        handleInputBlur(e) {
            let detail = {
                value: e.detail.value
            }
            this.setData({
                value: detail.value
            });
            this.triggerEvent('blur', detail);
        },
        handleInputConfirm(e) {
            let detail = {
                value: e.detail.value
            }
            this.setData({
                value: detail.value
            });
            this.triggerEvent('iConfirm', detail);
        },
        onConfirm() {
            let detail = {
                value: this.data.value
            }
            this.triggerEvent('confirm', detail);
        },
        onCancel() {
            console.log("121")
            let detail = {
                value: ''
            }
            this.setData({
                value: ''
            })
            this.triggerEvent('cancel', detail);
        },
    }
})