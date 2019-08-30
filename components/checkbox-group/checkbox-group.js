/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-30 11:09:11
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-30 14:10:45
 */
// components/checkbox/checkbox.js
Component({
    externalClasses: ['v-item-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        items: Array,
        label: String,
        value: String,
        color: {
            type: String,
            value: '#108ee9'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        checkboxValues: []
    },

    /**
     * 组件的方法列表
     */
    methods: {
        checkboxChange(e) {
            let detail = {
                value: e.detail.value
            };
            this.data.items.map(item => {
                item.checked = detail.value.includes(item[this.data.value])
            })
            this.setData({
                items: this.data.items
            })
            this.triggerEvent('change', detail);
        }
    }
})