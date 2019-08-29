/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-29 10:05:37
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-29 15:35:24
 */
// components/collapse/collapse.js
Component({

    externalClasses: ['v-collapse-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        activeKey: Array,
        accordion: { type: Boolean, value: false, observer: 'updateExpanded' },
        openAnimation: Object,
        collapseKey: String,
    },

    relations: {
        './collapse-item/collapse-item': {
            type: 'child', // 关联的目标节点应为子节点
            linked: function(child) {
                this.data.children.push(child);
            },
            linkChanged: function(child) {},
            unlinked: function(child) {
                this.data.children = this.data.children.filter((item) => item !== child);
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        id: '',
        currentItem: '',
        collapseItems: [],
        children: []
    },

    ready() {
        this.init()
    },

    /**
     * 组件的方法列表
     */
    methods: {
        init() {
            let nodes = this.getRelationNodes('./collapse-item/collapse-item')
            console.log('nodes', nodes)
        },



    }
})