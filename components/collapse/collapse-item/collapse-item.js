/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-29 10:05:52
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-29 15:42:23
 */
// components/collapse/collapse-item/collapse-item.js
Component({

    externalClasses: ['v-collapse-item-class', 'v-collapse-item-active-class', 'v-collapse-item-title-class', 'v-collapse-item-content-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        header: String,
        isOpen: { type: Boolean, value: false },
        showArrow: { type: Boolean, value: true },
        defaultContentHeight: { type: Number },
        disabled: { type: Boolean, value: false },
        collapseKey: String
    },

    relations: {
        '../collapse': {
            type: 'parent', // 关联的目标节点应为子节点
            linked: function(target) {},
            linkChanged: function(target) {},
            unlinked: function(target) {}
        }
    },

    options: {
        multipleSlots: true //使其可以使用多个slot，用name区分
    },

    /**
     * 组件的初始数据
     */
    data: {
        isActive: false,
        contentHeight: 0,
        id: '',
        activeKey: [],
        collapseItems: [],
        accordion: [],
        parent: null,
    },

    ready() {
        this.init()
    },

    attached() {},

    pageLifetimes: {
        show() {}
    },

    /**
     * 组件的方法列表
     */
    methods: {
        init() {
            let nodes = this.getRelationNodes('../collapse')
            console.log('parent-nodes', nodes)
            this.data.parent = nodes[0]
            this.setData({
                id: this.data.collapseKey,
                activeKey: nodes[0].data.activeKey,
                accordion: nodes[0].data.accordion
            })

            this.data.collapseItems = nodes[0].data.children.map(item => item.data)

            //默认打开项
            if (this.data.activeKey.length > 0) {
                this.data.activeKey.map(item => {
                    if (item == this.data.collapseKey && !this.data.disabled) {
                        this.setData({
                            isActive: true
                        })
                    }

                })


            }

        },

        onCollapseTap(evt) {
            if (!this.data.disabled) {
                const { dataset } = evt.currentTarget;
                if (this.data.accordion) {
                    this.data.parent.data.children.map(item => {
                        if (item.data.id != dataset.key) {
                            item.data.isActive = false
                            item.setData({
                                isActive: false
                            })
                        } else {
                            item.data.isActive = !item.data.isActive
                            item.setData({
                                isActive: item.data.isActive
                            })
                        }
                    })
                } else {
                    this.setData({
                        isActive: !dataset.isactive
                    })
                    this.data.parent.setData({
                        currentItem: dataset.key
                    })
                }
            }
        },

        getHeight() {
            wx.createSelectorQuery()
                .select('.v-collapse-item-content-wrapper')
                .boundingClientRect(function(rect) {
                    console.log(rect)
                })
                .exec(function(res) {
                    console.log(res)
                });
        }

    }
})