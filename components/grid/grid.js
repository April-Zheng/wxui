/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-28 11:19:51
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-28 16:18:22
 */
// components/grid/grid.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        mode: {
            type: String,
            value: 'normal'
        },
        columnNum: {
            type: [Number, String],
            value: 3
        },
        list: Array,
        hasLine: {
            type: Boolean,
            value: true
        },
    },

    relations: {
        '../grid-item/grid-item': {
            type: 'child', // 关联的目标节点应为子节点
            linked: function(target) {
                // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
            },
            linkChanged: function(target) {
                // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
            },
            unlinked: function(target) {
                // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
            }
        }
    },

    options: {
        multipleSlots: true //使其可以使用多个slot，用name区分
    },

    /**
     * 组件的初始数据
     */
    data: {},

    ready() {
        this.init()
    },

    /**
     * 组件的方法列表
     */
    methods: {
        init() {
            if (this.data.mode == 'custom') {
                let nodes = this.getRelationNodes('../grid-item/grid-item')
                let columnNum = nodes[0].data.columnNum
                console.log('nodes', nodes)
                const list = nodes.map((item, index) => {
                    return {
                        index: index,
                        key: item.data.key,
                    }
                })
                this.setData({
                    list,
                    columnNum
                })
            }

        },

        onGridItemClick(e) {
            let detail = {
                value: e.target.dataset.index,
            }
            this.triggerEvent('onItemClick', detail);
        },
    }
})