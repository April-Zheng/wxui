/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-30 17:57:05
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-10 10:15:58
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
        },
        label: {
            type: String,
            value: 'text'
        },
        mutliSelect: {
            type: Boolean,
            value: false
        }
    },
    data: {
        open: false,
        checked: false,
        hasChildren: false,
    },

    methods: {
        nodesTap(e) {
            let item = e.currentTarget.dataset.item;
            let hasChildren = this.checkHasChildren(item)
            if (hasChildren) {
                this.toggle(e)
            } else {
                this.tapItem(e)
            }
        },
        toggle: function(e) {
            let item = e.currentTarget.dataset.item;
            if (this.data.hasChildren) {
                this.setData({
                    open: !this.data.open,
                })
            }
            let detail = {
                value: item
            }

            this.triggerEvent('toggle', detail);
        },
        tapItem: function(e) {
            // console.log(e)
            let item = e.currentTarget.dataset.item;
            if (this.data.mutliSelect) {
                this.selectAll(this.data.range)

            } else {

            }
            this.setData({
                'range.checked': !this.data.range.checked,
                range: this.data.range
            })

            let detail = {
                value: item
            }

            // console.log(this.data.range);
            this.triggerEvent('ontap', detail);
        },

        selectAll(range) {
            if (this.checkHasChildren(range)) {
                range.children.map(item => {
                    item.checked = !item.checked
                    this.selectAll(item)
                })
            }
        },

        selectSingle(range) {

        },

        checkHasChildren(range) {
            return Boolean(range.children && range.children.length)
        }
    },

    ready: function(e) {
        this.setData({
            hasChildren: this.checkHasChildren(this.data.range)
        });
    },
})