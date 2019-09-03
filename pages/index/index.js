/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-27 16:57:24
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-03 09:54:55
 */
//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        list: [{
                title: "Button按钮",
                path: "pages/example/button/button"
            },
            {
                title: "Card卡片",
                path: "pages/example/card/card"
            },
            {
                title: "Checkbox-group复选框",
                path: "pages/example/checkbox-group/checkbox-group"
            },
            {
                title: "Capsule胶囊按钮",
                path: "pages/example/capsule/capsule"
            },
            {
                title: "Collapse折叠面板",
                path: "pages/example/collapse/collapse"
            },
            {
                title: "Grid宫格",
                path: "pages/example/grid/grid"
            },
            {
                title: "Input输入框",
                path: "pages/example/input/input"
            },
            {
                title: "Radio-group单选框",
                path: "pages/example/radio-group/radio-group"
            },
            {
                title: "Rate评分",
                path: "pages/example/rate/rate"
            },
            {
                title: "Search-bar搜索栏",
                path: "pages/example/searchbar/searchbar"
            },
            {
                title: "Steps步骤条",
                path: "pages/example/steps/steps"
            },
            {
                title: "Tabs选项卡",
                path: "pages/example/tabs/tabs"
            },
            {
                title: "Tree树形目录",
                path: "pages/example/tree/tree"
            },
            {
                title: "Uploader图片上传",
                path: "pages/example/uploader/uploader"
            },



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

    onShow: function() {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
    }

})