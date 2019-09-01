/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-30 17:57:05
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-01 13:48:54
 */
// components/tree/tree.js externalClasses: ['v-tree-class'],
Component({
    properties: {
        range: Object,
        color: {
            type: String,
            value: '#108ee9'
        },
        rangeKey: {
            type: String,
            value: 'id'
        }
    },
    data: {
        open: false,
        checked: false,
        hasChildren: false,
    },

    methods: {
        toggle: function(e) {
            console.log(e)
            if (this.data.hasChildren) {
                this.setData({
                    open: !this.data.open,
                })
            }
        },
        tapItem: function(e) {
            console.log(e)
            let itemid = e.currentTarget.dataset.itemid;
            if (this.data.hasChildren) {
                this.data.range.children.map(item => {
                    item.checked = !this.data.checked
                    if (Boolean(item.children && item.children.length)) {
                        item.children.map(val => {
                            val.checked = !this.data.checked
                        })
                    }
                })
            }
            this.setData({
                'range.checked': !this.data.checked,
                range: this.data.range
            })

            console.log(this.data.range);
            this.triggerEvent('ontap', { itemid: itemid }, { bubbles: true, composed: true });
        }
    },

    ready: function(e) {
        this.setData({
            hasChildren: Boolean(this.data.range.children && this.data.range.children.length),
        });
    },
})