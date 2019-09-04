/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-27 17:35:33
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-04 11:27:35
 */
// components/tabs/tabs.js
Component({
    externalClasses: ['v-tabs-class', 'v-tab-class','v-panel-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        tabs: Array,
        direction: {
            type: String,
            value: 'horizontal' // vertical
        },
        border: {
            type: Boolean,
            value: false
        },
        verticalHeight: {
            type: null,
            value: 400
        },
        scrollable: {
            type: Boolean,
            value: false
        },
        slider: {
            type: Boolean,
            value: false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        sliderOffset: 0,
        activeIndex: 0,
        sliderWidth: 0,
        sliderOffsetY:0
    },

    attached() {
        this.init()
    },
    options: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        tabClick: function(e) {
            let detail = {
                value: e.currentTarget.id
            }
            
            this.setData({
                sliderOffset: e.currentTarget.offsetLeft,
                activeIndex: e.currentTarget.id,
                sliderOffsetY:e.currentTarget.offsetTop
            });
            console.log(e,this.data.sliderOffset) 
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