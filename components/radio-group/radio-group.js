/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-30 14:18:18
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-30 14:29:50
 */
// components/radio-group/radio-group.js
Component({
    externalClasses: ['v-item-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        items: Array,
        label: String,
        value: String,
        showIcon: {
            type: Boolean,
            value: true
        },
        color: {
            type: String,
            value: '#108ee9'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        radioChange(e) {
            let detail = {
                value: e.detail.value
            };
            this.data.items.map(item => {
                item.checked = detail.value == item[this.data.value]
            })
            this.setData({
                items: this.data.items
            })
            this.triggerEvent('change', detail);
        }
    }
})