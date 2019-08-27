/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-27 16:57:24
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-27 17:14:46
 */
//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        list: [{
            title: "Steps步骤条",
            path: "pages/example/steps/steps"
        }]
    },

    navigateToPage(e) {
        let path = e.currentTarget.dataset.path
        if (path) {
            wx.navigateTo({
                url: '/' + path
            })
        }
    },

    onLoad: function() {

    },

})