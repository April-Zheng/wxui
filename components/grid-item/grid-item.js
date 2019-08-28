/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-28 15:46:42
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-28 16:24:35
 */
// components/grid-item/grid-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        key: String
    },

    relations: {
        '../grid/grid': {
            type: 'parent', // 关联的目标节点应为子节点
            linked: function(target) {},
            linkChanged: function(target) {},
            unlinked: function(target) {}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        columnNum: 3,
        hasLine: true,
    },

    ready() {
        this.init()
    },

    /**
     * 组件的方法列表
     */
    methods: {
        init() {
            let nodes = this.getRelationNodes('../grid/grid')
            console.log('parent-nodes', nodes)
            this.setData({
                columnNum: nodes[0].data.columnNum,
                hasLine: nodes[0].data.hasLine
            })
        },
        onGridItemTap(e) {
            this.triggerEvent('onGridItemTap');
        },
    }
})