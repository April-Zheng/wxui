/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-09-03 09:31:59
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-03 09:43:28
 */
// components/custom-tab-bar/index.js
const app = getApp()
Component({
    data: {
        selected: 0,
        color: "#999999",
        selectedColor: "#1FC8CF",
        list: [{
                pagePath: "/pages/index/index",
                text: "首页",
                iconPath: "/images/icon/menu_home@3x.png",
                selectedIconPath: "/images/icon/menu_home_sel@3x.png",
                isScan: false,
            },
            {
                pagePath: "",
                text: "",
                iconPath: "/images/icon/menu_scan@3x.png",
                selectedIconPath: "/images/icon/menu_scan@3x.png",
                isScan: true,
            },
            {
                pagePath: "/pages/usercenter/usercenter",
                text: "我的",
                iconPath: "/images/icon/menu_my@3x.png",
                selectedIconPath: "/images/icon/menu_my_sel@3x.png",
                isScan: false,
            }
        ],
        isFullSucreen: app.globalData.isFullSucreen ? true : false
    },
    created() {},
    attached() {},
    ready() {},
    pageLifetimes: {
        show: function() {

        },
        hide: function() {
            // 页面被隐藏
        },
        resize: function(size) {
            // 页面尺寸变化
        }
    },
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path
            this.setData({
                selected: data.index
            })
            if (data.isscan) {
                wx.scanCode({
                    success: res => {
                        console.info(res)
                    },
                    fail: () => {}
                });
            } else {
                wx.switchTab({
                    url
                })

            }
        }
    }
})