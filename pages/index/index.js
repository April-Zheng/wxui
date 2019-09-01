/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-27 16:57:24
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-30 17:57:50
 */
//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        list: [{
                title: "Steps步骤条",
                path: "pages/example/steps/steps"
            },
            {
                title: "Tabs选项卡",
                path: "pages/example/tabs/tabs"
            },
            {
                title: "Card卡片",
                path: "pages/example/card/card"
            },
            {
                title: "Grid宫格",
                path: "pages/example/grid/grid"
            },
            {
                title: "Button按钮",
                path: "pages/example/button/button"
            },
            {
                title: "Collapse折叠面板",
                path: "pages/example/collapse/collapse"
            },
            {
                title: "Uploader图片上传",
                path: "pages/example/uploader/uploader"
            },
            {
                title: "Checkbox-group复选框",
                path: "pages/example/checkbox-group/checkbox-group"
            },
            {
                title: "Radio-group单选框",
                path: "pages/example/radio-group/radio-group"
            },
            {
                title: "Capsule胶囊按钮",
                path: "pages/example/capsule/capsule"
            },
            {
                title: "Tree树形目录",
                path: "pages/example/tree/tree"
            }
        ]
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