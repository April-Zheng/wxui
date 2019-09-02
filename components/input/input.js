/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-09-02 11:05:14
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-02 14:25:06
 */
// components/input/input.js
Component({
  externalClasses:['v-input-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        label: String,
        password: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        placeholder: {
            type: String,
            value: '请输入'
        },
        placeholderStyle: String,
        placeholderClass: String,
        maxlength: {
            type: Number,
            value: 140
        },
        focus: {
            type: Boolean,
            value: false
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
        required: {
            type: Boolean,
            value: false,
        },
        message: {
            type: String,
            value: '请输入完整内容'
        },
        border: {
            type: Boolean,
            value: false
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
            if (this.data.required) {
                if (this.checkValueRequired(detail.value)) {
                    this.setData({
                        value: detail.value
                    });
                }
            }

            this.triggerEvent('blur', detail);
        },
        handleInputConfirm(e) {
            let detail = {
                value: e.detail.value
            }
            this.setData({
                value: detail.value
            });
            this.triggerEvent('confirm', detail);
        },
        handleClearTap() {
            let detail = {
                value: ''
            }
            this.setData({
                value: ''
            })
            this.triggerEvent('clear', detail);
        },

        checkValueRequired() {
            if (!!this.data.value && this.data.value !== "") {
                return true
            } else {
                this._showToast(this.data.message)
                return false
            }
        },

        _showToast(message, icon = 'none') {
            wx.showToast({
                title: message,
                icon: icon
            })
        }
    }
})