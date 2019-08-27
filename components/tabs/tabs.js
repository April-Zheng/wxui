/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-27 17:35:33
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-27 17:45:04
 */
// components/tabs/tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs: Array,
        navStyle: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        sliderOffset: 0,
        activeIndex: 0
    },

    attached() {
        this.init()
    },
    options: {
        styleIsolation: 'apply-shared'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        tabClick: function(e) {
            this.setData({
                sliderOffset: e.currentTarget.offsetLeft,
                activeIndex: e.currentTarget.id,
            });
            let detail = {
                value: e.currentTarget.id
            }
            this.triggerEvent("click", detail);

        },

        init() {
            var that = this;
            wx.getSystemInfo({
                success: function(res) {
                    that.setData({
                        sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
                        sliderWidth: 100 / (that.data.tabs.length) + '%'
                    });
                }
            });
        }
    }
})